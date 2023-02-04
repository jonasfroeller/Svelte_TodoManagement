<script>
  import { blur, slide } from "svelte/transition";
  import Task from "./Task.svelte";
  import { todos } from "../Stores/main";
  import localStorage from "../Stores/localStorage";

  let toDo = $todos.filter((todo) => todo.done === false).length;
  let toDosSorted = [];

  $: {
    toDosSorted = [...$todos].sort((a, b) =>
      a.done && b.done ? 0 : a.done ? 1 : -1
    );
  }

  function todoUpdate(e) {
    console.log(e.detail);
    const i = $todos.findIndex((todo) => todo.id === e.detail.id);

    $todos[i] = e.detail;
    localStorage.save($todos);
  }
</script>

<svelte:head>
  <title>done cards</title>
</svelte:head>

<div id="table" class="is-flex is-justify-content-center">
  <div transition:blur={{ amount: 25, delay: 500 }}>
    <input
      type="range"
      class="slider is-fullwidth is-info"
      name=""
      id=""
      bind:value={toDo}
      max={$todos.length}
    />

    <div class="box">
      {#each toDosSorted.slice(0, toDo) as todo}
        <div transition:slide class="table">
          <Task {...todo} on:todoUpdate={todoUpdate} />
        </div>
      {:else}
        {#if $todos.filter((todo) => todo.done === false).length > 0}
          <p>No tasks in this range!</p>
        {:else}
          <p>No tasks left!</p>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .table {
    padding: 1.25%;
    border-bottom: 1px solid black;
  }
</style>
