<script>
  import { signOut } from "firebase/auth";
  import { colors } from "../consts/colors";
  import { auth } from "../firebase";
  import { authStore } from "../stores/auth";
  import Button from "./Button.svelte";

  const logout = () => {
    signOut(auth);
  };
</script>

<div class="text-white flex md:flex-row flex-col gap-5 items-center p-5 bg-slate-800 rounded-md w-[90vw] md:w-fit justify-center ">
  <p>Welcome {$authStore.user.displayName}</p>
  <div class="flex flex-row gap-3">
      <Button
      on:click={logout}
      text="Sign out"
      icon="logout"
      color={colors.alert}
      />
      <Button text="Check-in" color={colors.success} icon="check" />
    </div>

</div>
