<script lang="ts">
    import type IUsuario from "../interface/IUsuario";
    import Fa from "svelte-fa/src/fa.svelte";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";

    import BarraSuperior from "./BarraSuperior.svelte";
    export let usuario: IUsuario;
</script>

<div class="card__usuario">
    <BarraSuperior />
    <div class="usuario">
        <div class="foto__container">
            <a href={usuario.profileUrl} target="_blank" rel="noopener">
                <div
                    class="foto__usuario"
                    style:background-image="url({usuario.avatar})"
                />
            </a>
        </div>
        <div class="detalhes__usuario">
            {#if usuario.name}
                <div class="info">
                    <span>{usuario.name}</span>
                </div>
            {/if}
            <div class="info">
                <Fa icon={faGithub} /> <span>{usuario.login}</span>
            </div>
            {#if usuario.location}
                <div class="info">
                    <span>{usuario.location}</span>
                </div>
            {/if}
            <div class="info strings">
                <strong>Followers:</strong> <span>{usuario.followers}</span>
            </div>
            <div class="info">
                <strong>Public Repos:</strong>
                <span>{usuario.publicRepos}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .card__usuario {
        margin-top: 65px;
    }

    .usuario {
        padding: 28px 0;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
        border-radius: 8px;

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

    .strings {
        margin-top: 15px;
    }
</style>
