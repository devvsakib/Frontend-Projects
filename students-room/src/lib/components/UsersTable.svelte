<script>
  import UserRow from "./UserRow.svelte";
</script>

<div
  id="users-table"
  class=" text-white w-[90vw] md:w-1/3 bg-slate-800 flex flex-col rounded-md py-5 px-2 my-5 min-h-[50vh]"
>
  <h3 class="text-xl text-center mb-5">Actually inside the room</h3>
  <div class="grid grid-cols-1 place-items-center justify-start gap-4">
      {#each Array(10) as element}
      <UserRow />
      {/each}
    </div>
</div>
