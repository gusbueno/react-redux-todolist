import uuid from 'uuid/v4'

class TodoController {
  constructor () {
    this.todos = []
    this.getTodos = this.getTodos.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  getTodos (req, res) {
    res.status(200).send({ todos: this.todos })
  }

  addTodo (req, res) {
    const { description } = req.body
    const todo = {
      id: uuid(),
      description
    }
    this.todos = [...this.todos, todo]
    res.status(201).send()
  }

  deleteTodo (req, res) {
    const { id } = req.body
    const newTodos = this.todos.filter(todo => todo.id !== id)
    this.todos = newTodos
    res.status(204).send()
  }
}

export default new TodoController()
