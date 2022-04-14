import { ApiPokemonController } from "./Controllers/ApiPokemonController.js";
import { MyPokemonController } from "./Controllers/MyPokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  myPokemonController = new MyPokemonController()
  apiPokemonController = new ApiPokemonController()
}

window["app"] = new App();
