<script>
  export let label = "Label";
  export let type = "type";
  export let textValue = "";
  export let isRequired = true;


  function typeAction(node){
    node.type = type
  }
</script>

<div class="md:flex md:items-center mb-6">
  <div class="md:w-1/3">
    <label
      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
      for="inline-full-name"
    >
      {label}
    </label>
  </div>
  <div class="md:w-2/3">
    <input
    bind:value={textValue}
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="inline-full-name"
      use:typeAction
      placeholder="Example"
      required={isRequired}
    />
  </div>
</div>

<style>
</style>
