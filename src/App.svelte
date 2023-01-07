<script>
  import "../node_modules/bulma/css/bulma.min.css";
  import Navbar from "./Components/Navbar.svelte";
  import ToDo from "./Components/ToDo.svelte";
  import Table from "./Components/Table.svelte";
  import NotFound from "./Components/NotFound.svelte";
  import localStorage from "./Stores/localStorage";
  import { todos } from "./Stores/main";
  import Router from "svelte-spa-router";
  import { onMount } from "svelte";

  onMount(async () => {
    $todos = await localStorage.load();
  });

  $: tasksToDo = $todos.length;
  $: tasksDone = $todos.filter((todos) => todos.done).length;
</script>

<Navbar>
  TODO-Lists: {tasksDone}/{tasksToDo}
</Navbar>

<Router
  routes={{
    "/": ToDo,
    "/table": Table,
    "*": NotFound,
  }}
/>

<svelte:head>
  <title>App</title>
</svelte:head>
