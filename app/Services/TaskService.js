import {
  ProxyState
} from "../AppState.js"
import Task from "../Models/Task.js"

class TaskService {
  constructor() {
    console.log("Task Service")
  }
}

export const taskService = new TaskService();