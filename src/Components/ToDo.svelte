<script>
  import { todos } from "../Stores/main";
  import localStorage from "../Stores/localStorage";
  import { blur, slide, scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  import Fa from "svelte-fa/src/fa.svelte";

  const contentChanged = (id) => {
    console.log("change at " + id);
    localStorage.save($todos);
  };

  const deleteTask = (id) => {
    const deletionGranted = confirm("rly?");

    if (deletionGranted) {
      $todos = $todos.filter((todo) => todo.id != id);
      localStorage.save($todos);
    }
  };
</script>

<main class="container">
  <div class="columns is-multiline">
    {#each $todos as todo (todo.id)}
      <div class="column is-one-quarter">
        <div
          class="card"
          in:scale={{ amount: 50, duration: 1000 }}
          out:slide={{ amount: 50, duration: 1000, easing: expoInOut }}
          on:outroend={() => console.log("deleted")}
        >
          <header class="card-header">
            <button
              class="delete is-small"
              on:click={() => deleteTask(todo.id)}
            />
            <h1 class="card-header-title level">
              <div
                transition:blur={{ duration: 500 }}
                contenteditable="true"
                on:blur={() => contentChanged(todo.id)}
                bind:innerHTML={todo.title}
              >
                {todo.title}
              </div>
              <input
                transition:blur={{ duration: 500 }}
                type="checkbox"
                name={todo.title}
                id={todo.id}
                on:blur={contentChanged(todo.id)}
                bind:checked={todo.done}
              />
            </h1>
          </header>
          <div class="card-content">
            <div
              class="content"
              contenteditable="true"
              on:blur={() => contentChanged(todo.id)}
              bind:innerHTML={todo.content}
            >
              <p>{todo.content}</p>
            </div>
          </div>
        </div>
      </div>
    {:else}
      <h1 class="title is-4 mt-4">Keine Aufgaben erstellt.</h1>
    {/each}
  </div>
</main>
