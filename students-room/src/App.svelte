<script lang="ts">
  import { onAuthStateChanged } from "firebase/auth";
  import Form from "./lib/components/Form.svelte";
  import UserBar from "./lib/components/UserBar.svelte";
  import UsersTable from "./lib/components/UsersTable.svelte";
  import { auth } from "./lib/firebase";
  import { authStore, defaultAuth } from "./lib/stores/auth";

  onAuthStateChanged(auth, (user) => {
    if (user) {
      let newStore = {
        user,
        uid: user.uid,
      };
      const uid = user.uid;

      authStore.set(newStore);
      // ...
    } else {
      authStore.set(defaultAuth);
      //signed out
    }
  });
</script>

<main class="flex flex-col gap-5  items-center min-h-screen bg-slate-900">
  <h1 class="text-4xl font-medium text-gray-200 mt-5">Students Room</h1>
  <p class="text-gray-200 text-justify p-5">
    Unical Mathematics and Computer Science Students Room
  </p>
  {#if $authStore.user}
    <UserBar />
    <UsersTable />
  {:else}
    <!-- If the person is not logged in-->
    <Form />
  {/if}
</main>

<style>
</style>
