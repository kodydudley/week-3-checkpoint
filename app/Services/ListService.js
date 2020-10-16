import List from "../Models/List.js";
import {
  ProxyState
} from "../AppState.js"

//Public
class ListService {

  constructor() {
    console.log("List Service");
  }

  create(rawList) {
    let lists = ProxyState.lists
    lists.push(new List(rawList))
    ProxyState.lists = lists
    console.log(ProxyState.lists);
  }

  delete(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    //TODO  Here is where we handle all of our business logic,
    //given the information you need in the controller,
    //what methods will you need to do when this class is first 'constructed'?
    //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
  }
}

export const listService = new ListService();