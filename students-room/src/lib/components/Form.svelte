<script lang="ts">
  import Input from "./Input.svelte";
  import { enums } from "../../lib/consts/form_types";
  import Button from "./Button.svelte";
  import { auth } from "../../lib/firebase";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";

  import { colors } from "../consts/colors";

  const initialForm = {
    email: "",
    password: "",
    username: "",
  };

  let register = true;

  let form = {
    email: "",
    password: "",
    username: "",
  };

  const changeRegister = (value: boolean) => {
    register = value;
    form = initialForm;
  };

  const createUser = () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: form.username,
        });
        location.reload();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, form.email, form.password);
  };
</script>

<div class="m-auto flex flex-col justify-center items-center gap-5">
  <div class="flex gap-5 justify-evenly items-center w-full ">
    <button
      on:click={() => changeRegister(true)}
      class="w-full bg-transparent transition-all ease-in hover:bg-purple-500 text-white font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
    >
      Sign-up
    </button>
    <button
      on:click={() => changeRegister(false)}
      class="w-full bg-transparent transition-all ease-in hover:bg-purple-500 text-white font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
    >
      Sign-in
    </button>
  </div>

  {#if register}
    <form on:submit|preventDefault={createUser} class="w-full max-w-sm">
      <Input
        bind:textValue={form.email}
        label={"Email address"}
        type={enums.email}
      />
      <Input
        bind:textValue={form.username}
        label={"Username"}
        type={enums.text}
      />
      <Input
        bind:textValue={form.password}
        label={"Password"}
        type={enums.password}
      />
      <Button text="Register" color={colors.primary} />
    </form>
  {:else}
    <form on:submit|preventDefault={signIn} class="w-full max-w-sm">
      <Input
        bind:textValue={form.email}
        label={"Email address"}
        type={enums.email}
      />
      <Input
        bind:textValue={form.password}
        label={"Password"}
        type={enums.password}
      />
      <Button text="Login" color={colors.primary} />
    </form>
  {/if}
</div>

<style>
</style>
