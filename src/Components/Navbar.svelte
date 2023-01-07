<script>
  import Form from "./Form.svelte";
  let form;
</script>

<nav class="hero is-primary welcome is-small">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">TODO</h1>
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
          <li>
            <a href="./#/">Cards</a>
          </li>
          <li>
            <a href="./#/Table">Table</a>
          </li>
        </ul>
      </div>
      <button on:click={() => form.toggleForm()} class="button"> new </button>
    </div>
  </div>
</div>

<Form bind:this={form} />
