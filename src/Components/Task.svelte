<script>
  import { createEventDispatcher } from "svelte";
  export let id, title, content, done;
  let dispatch = createEventDispatcher();

  function updateState() {
    dispatch("todoUpdate", { id, title, content, done });
  }
</script>

<div class="task box-border" class:done>
  <h1 class="text-input">{title}: {content}</h1>
  <input
    type="checkbox"
    class="checkbox-done"
    bind:checked={done}
    on:change={updateState}
  />
</div>

<style>
  .task.done {
    background-color: lightgreen;
    text-decoration: line-through;
    border-radius: 0.25rem;
    transition: 0.3s;
  }

  .text-input {
    flex-grow: 1;
    font-size: 1.25em;
  }

  .checkbox-done {
    margin-left: 1.5%;
  }
</style>
