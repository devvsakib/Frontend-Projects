<script>
    export let name ='User'
    export let dep ='Ingegneria Informatica, Modellistica, Elettronica e Sistemistica'
    export let icon = 'computer'
</script>

<div class="grid grid-cols-2 justify-between items-center bg-slate-700 w-full p-3 rounded-md shadow-md shadow-slate-900">
    <div class="flex gap-2 items-center justify-start">
        <p class="material-icons bg-red-700 p-2 rounded-full">{icon}</p>
        <p class="text-lg ml-4">{name}</p>
    </div>
    <p class="text-end ">{dep}</p>
</div>

<style>

</style>