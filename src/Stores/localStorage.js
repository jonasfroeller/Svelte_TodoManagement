export default class ToDoStorage {
  static async save(tasks) {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }

  static async load() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }
}
