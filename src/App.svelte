<script lang="ts">
  import Formulario from "./components/Formulario.svelte";
import Titulo from "./components/Titulo.svelte";
  import Usuario from "./components/Usuario.svelte";
  import type IUsuario from "./interface/IUsuario";

  let usuario: IUsuario | null = null;
</script>

<div class="app">
  <header>
    <Titulo />

    <div class="busca__usuario">
      <Formulario bind:usuario/>
    </div>
  </header>

  {#if usuario}
    <Usuario {usuario} />
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }

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
