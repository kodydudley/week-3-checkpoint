import {
  generateId
} from "../Utils/GenerateId.js";
import {
  ProxyState
} from "../AppState.js"

export default class List {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId();
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  }

  get Template() {
    return /*html*/ `
  <div class="card col-5 mt-3 text-center border bg-light rounded shadow-lg">
    <h3>${this.title} <button class="text-danger close mt-3" onclick="app.listController.delete('${this.id}')"><span>&times;</span></button></h3>
      <form onsubmit="app.taskController.create(event, '${this.id}')">
          <div class="form-group">
             <input type="text" name="taskTitle" class="form-control" placeholder="Enter task item here">
             <button type="submit" name="" id="" class="btn btn-primary btn-lg mt-1">Add Task</button>
          </div>
      </form>
    <h4>Tasks:</h4>
    <div class="row text-left">
    ${this.Task}
    </div>
  </div>
    `
  }

  get Task() {
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
// <div class="row mt-5">
//             <div class="col-4">
//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body">
//                         <h3 class="card-title text-center">Task</h3>
//                         <p class="card-text">task 1</p>
//                         <p class="card-text">task 2</p>
//                         <p class="card-text">task 3</p>
//                         <p class="card-text">task 4</p>
//                     </div>
//                 </div>
//             </div>
//         </div>