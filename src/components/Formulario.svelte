<!-- TS -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type IUsuario from "../interface/IUsuario";
  import { searchRepos, searchUser } from "../requisicoes";
    import { mountUser } from "../utils/mountUser";

  let status: null | number = null;
  let value = "";
  const dispatch = createEventDispatcher<{ changeUser: IUsuario | null }>();

  async function onSubmit() {
    const responseUser = await searchUser(value)
    const responseRepos = await searchRepos(value)
    if (responseUser.ok) {
      const userJson = await responseUser.json();
      const reposJson = await responseRepos.json()
      console.log(reposJson.length)
      dispatch("changeUser", mountUser(userJson, reposJson));
      status = null;
    } else {
      status = responseUser.status;
      dispatch("changeUser", null);
    }
  }
</script>

<!-- HTML -->

<form on:submit|preventDefault={onSubmit}>
  <input type="text" class="input" bind:value placeholder="Type here" class:erro__input={status === 404}/>

  <div class="botao__container">
    <button type="submit" class="botao">Search</button>
  </div>
</form>
{#if status === 404}
  <span class="erro">Github user not found!</span>
{/if}

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

  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }

  .erro__input {
    border: 1px solid #ff003e;
  }
</style>
