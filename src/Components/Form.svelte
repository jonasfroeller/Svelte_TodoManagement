<script>
  import localStorage from "../Stores/localStorage";
  import { todos } from "../Stores/main";
  import { v4 as uuidv4 } from "uuid";

  let title = "";
  let content = "";
  let formIsVisible = "";

  export const toggleForm = () => {
    if (formIsVisible === "") {
      formIsVisible = "is-active";
    } else {
      formIsVisible = "";
    }
  };

  const form = () => {
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    $todos = [
      {
        id: uuidv4(),
        done: false,
        title,
        content,
      },
      ...$todos,
    ];
    title = "";
    content = "";

    localStorage.save($todos);
  };
</script>

<main class="modal {formIsVisible}">
  <div class="modal-background" />
  <div class="modal-content">
    <div class="box is-centered">
      <form on:submit|preventDefault={form}>
        <div class="field">
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="title"
              bind:value={title}
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              type="text"
              class="textarea"
              placeholder="content"
              bind:value={content}
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-primary"> add </button>
            <button
              on:click={toggleForm}
              type="submit"
              class="button is-danger"
            >
              cancle
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <button
    on:click={toggleForm}
    class="modal-close is-large"
    aria-label="close"
  />
</main>
