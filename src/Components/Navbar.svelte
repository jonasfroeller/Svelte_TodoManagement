<script>
  import Form from "./Form.svelte";
  import { onMount } from "svelte";

  let oldUrl = "";
  let url = ``;
  onMount(() => (url = window.location.hash));

  let form;
</script>

<nav class="hero is-primary welcome is-small">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Organisations Management</h1>
      <h2 class="subtitle">
        <slot><!-- optional fallback --></slot>
      </h2>
    </div>
  </div>
</nav>

<div class="box">
  <div class="container">
    <div class="fould is-grouped">
      <div class="tabs">
        <ul>
          {#await url != "" && url != oldUrl}
            <p>home</p>
          {:then}
            <li>
              <a href="./#/" class={url == "#/" ? "card-header-title" : ""}
                >all todos</a
              >
            </li>
            <li>
              <a
                href="./#/Table"
                class={url == "#/Table" ? "card-header-title" : ""}
                >done todos</a
              >
            </li>
          {:catch error}
            <p>{error}</p>
          {/await}
        </ul>
      </div>
      <button on:click={() => form.toggleForm()} class="button"> new </button>
    </div>
  </div>
</div>

<Form bind:this={form} />
