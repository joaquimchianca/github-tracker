<!-- TS -->
<script lang="ts">
    import type IUsuario from "../interface/IUsuario";

    export let usuario: IUsuario | null
    let value = "";
    async function onSubmit() {
        const responseUser = await fetch(
            `https://api.github.com/users/${value}`
        );
        const userJson = await responseUser.json();

        usuario = {
            avatar: userJson.avatar_url,
            followers: userJson.followers,
            location: userJson.location,
            login: userJson.login,
            name: userJson.name,
            profileUrl: userJson.html_url,
            publicRepos: userJson.public_repos,
        };
    }
</script>
<!-- HTML -->

<form on:submit|preventDefault={onSubmit}>
    <input type="text" class="input" bind:value placeholder="Pesquise" />

    <div class="botao__container">
        <button type="submit" class="botao">Buscar</button>
    </div>
</form>

<!-- CSS -->
<style>

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
</style>