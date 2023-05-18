<script lang="ts">
  import Cabecalho from "./components/Cabecalho.svelte";
  import Usuario from "./components/Usuario.svelte";
  import type IUsuario from "./interface/IUsuario";

  let usuario: IUsuario | null = null;

  function defineUser(e: CustomEvent<IUsuario | null>) {
    usuario = e.detail
  }
</script>

<div class="app">
  <Cabecalho on:changeUser={defineUser} />

  {#if usuario}
    <Usuario {usuario} />
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }
</style>
