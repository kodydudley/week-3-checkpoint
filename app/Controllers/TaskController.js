import {
  ProxyState
} from "../AppState.js"

import {
  taskService
} from "../Services/TaskService.js"

export default class TaskController {
  constructor() {
    console.log("Task Controller")
  }

  create(e, listId) {
    e.preventDefault()

    let form = e.target
    let rawTask = {
      title: form.taskTitle.value,
      listId: listId
    }
    taskService.create(rawTask)

    form.reset()
  }
  delete(id) {
    let confirmed = window.confirm('Are you sure you want to delete this task?')
    if (confirmed) {
      taskService.delete(id)
    }
  }
}