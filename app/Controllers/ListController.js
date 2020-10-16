import {
  ProxyState
} from "../AppState.js"
import {
  listService
} from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById("list").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).
    console.log("List Controller");
    ProxyState.on("lists", _drawLists);
    ProxyState.on("tasks", _drawLists);
    _drawLists();
  }

  create(e, ) {
    e.preventDefault()

    let form = e.target

    let rawList = {
      title: form.title.value
    }
    listService.create(rawList)

    form.reset()

    //TODO: Your app will need the ability to create, and delete lists
  }
}