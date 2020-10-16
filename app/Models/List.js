import {
  generateId
} from "../Utils/GenerateId.js";

export default class List {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId();
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  }

  get Template() {
    return /*html*/ `
    <div class="row mt-5">
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h3 class="card-title text-center">Task</h3>
                            <p class="card-text">task 1</p>
                            <p class="card-text">task 2</p>
                            <p class="card-text">task 3</p>
                            <p class="card-text">task 4</p>
                        </div>
                    </div>
                </div>
            </div>
            `
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}