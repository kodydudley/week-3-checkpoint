import {
  generateId
} from "../Utils/GenerateId.js";
import {
  ProxyState
} from "../AppState.js"

export default class Task {
  constructor(data) {
    this.task = data.task
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
  }

  get Template() {

    return /*html*/ `
    <div class="col-12">
    <h4>${this.task} <button class="close float-right" onclick="app.taskController.delete('${this.id}')"></button><span>&times;</span>></button></button></h4>
    </div>
    `
  }
  //Be sure to add the methods needed to create the view template for this model

}