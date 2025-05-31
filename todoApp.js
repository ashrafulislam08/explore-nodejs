class Todo {
  constructor() {
    this.todos = [];
  }

  addTodo(title, duration) {
    const newTodo = {
      id: this.todos.length + 1,
      title,
      duration,
      isCompleted: false,
    };
    this.todos.push(newTodo);
  }

  displayTodo() {
    return this.todos;
  }
}

const myTodo = new Todo();
myTodo.addTodo("Mastering Reactjs", "10 Days");
myTodo.addTodo("Be a JS Pro", "30 Days");
console.log(myTodo.displayTodo());
