import {
  ProxyState
} from "../AppState.js"
import Task from "../Models/Task.js"

class TaskService {
  constructor() {
    console.log("Task Service")
  }

  create(rawTask) {
    console.log(rawTask, new Task(rawTask));
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTask))
    ProxyState.tasks = tasks
    console.log(ProxyState.tasks);
  }

  delete(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
}

export const taskService = new TaskService();