import {
  generateId
} from "../Utils/GenerateId.js";
import {
  ProxyState
} from "../AppState.js"

export default class Task {
  constructor(data) {
    this.title = data.title
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.listId = data.listId
  }

  get Template() {

    return /*html*/ `
    <div class="col-12">
<h5>${this.title} <button class="close text-danger float-right" onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button></h5>
    </div>
    `
  }

  //Be sure to add the methods needed to create the view template for this model

}