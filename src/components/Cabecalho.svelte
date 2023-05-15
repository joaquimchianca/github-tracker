<!-- TS -->
<script lang="ts">
    import Formulario from "./Formulario.svelte";
    import Titulo from "./Titulo.svelte";
</script>

<!-- HTML -->
<header>
    <Titulo />
    <div class="busca__usuario">
        <Formulario on:changeUser />
    </div>
</header>

<!-- CSS -->
<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .busca__usuario {
        position: relative;
        width: 70%;
    }
</style>
