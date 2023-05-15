<script lang="ts">
  import BarraSuperior from "./components/BarraSuperior.svelte";
  import Titulo from "./components/Titulo.svelte";
  import type IUsuario from "./interface/IUsuario";

  let value = "";
  function onSubmit() {
    usuario = {
      avatar: "https://github.com/joaquimchianca.png",
      login: "joaquimchianca",
      name: "Joaquim Chianca",
      profilelUrl: "https://github.com/joaquimchianca",
      location: "Natal, RN, Brazil",
      repositorios: 50,
      followers: 27,
    }
  }

  let usuario: IUsuario = null;
</script>

<div class="app">
  <header>
    <Titulo />

    <div class="busca__usuario">
      <form on:submit|preventDefault={onSubmit}>
        <input type="text" class="input" bind:value />

        <div class="botao__container">
          <button type="submit" class="botao">Buscar</button>
        </div>
      </form>
    </div>
  </header>

  <div class="card__usuario">
    <BarraSuperior />
    {#if usuario}
      <div class="usuario">
        <div class="foto__container">
          <a href={usuario.profilelUrl} target="_blank" rel="noopener">
            <div
              class="foto__usuario"
              style:background-image="url({usuario.avatar})"
            />
          </a>
        </div>
        <div class="detalhes__usuario">
          <div class="info">
            Nome: <span>{usuario.name}</span>
          </div>
          <div class="info">
            Usuário: <span>{usuario.login}</span>
          </div>
          <div class="info">
            Seguidores: <span>{usuario.followers}</span>
          </div>
          <div class="info">
            Repositórios: <span>{usuario.repositorios}</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
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

  .input {
    padding: 15px 25px;
    width: cal(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .botao__container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }

  .botao {
    padding: 15px 24px;
    border-radius: 8px;
    border: none;
    background: #2e80fa;
    line-height: 26px;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    flex-wrap: wrap;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    gap: 13px;
  }

  .botao:hover {
    background: #4590ff;
  }

  .card__usuario {
    margin-top: 65px;
  }

  .usuario {
    padding: 28px 0;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);

    display: flex;
    justify-content: center;
  }

  .foto__container {
    margin-right: 81px;
    margin-left: 15px;
  }

  .foto__usuario {
    width: 10.75rem;
    height: 10.75rem;
    border: 4.56px solid #2e80fa;
    border-radius: 50%;
    background-size: cover;
  }

  .detalhes__usuario {
    margin-right: 55px;
  }

  .detalhes__usuario > .info {
    font-weight: 600px;
    font-size: 20px;
    line-height: 31px;
    color: #395278;
  }

  .detalhes__usuario > .info > span {
    color: #6781a8;
    font-weight: normal;
  }
</style>
