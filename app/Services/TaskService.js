import {
  ProxyState
} from "../AppState.js"
import Task from "../Models/Task.js"

class TaskService {
  constructor() {
    console.log("Task Service")
  }

  create(rawTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTask))
    ProxyState.tasks = tasks
    console.log(ProxyState.tasks);
  }
}

export const taskService = new TaskService();