<script>
  export let text = "Text";
  export let type = "submit";
  export let icon = null;
  export let color = null;

</script>

<div class="md:flex md:items-center">
  <div class="w-full">
    <button
      on:click
      style="{{color} ? `background-color: ${color} `: `background-color: purple `}"
      class="w-full flex justify-center items-center gap-3 shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      {type}
    >
      {#if icon}
        <span class="material-icons w-fit"> {icon} </span>
      {/if}
      {text}
    </button>
  </div>
</div>

<style>
</style>
