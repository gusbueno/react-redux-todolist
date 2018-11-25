import express from 'express'
import bodyParser from 'body-parser'

import todoController from './controllers/TodoController'

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/todos', todoController.getTodos)
app.post('/todo', todoController.addTodo)
app.delete('/todo', todoController.deleteTodo)

app.listen(3001)
