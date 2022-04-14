import { ProxyState } from "../AppState.js"
import { myPokemonService } from "../Services/MyPokemonService.js"
import { Pop } from "../Utils/Pop.js"


function _drawMyPokemon() {
    let template = ''
    ProxyState.myPokemon.forEach(p => template += /*html*/ `<li class="selectable" onclick="app.myPokemonController.addPokemon('${p.name}')"><i class="mdi mdi-star"></i></li>`)
}

export class MyPokemonController {
    constructor() {
        this.getMyPokemon()
        ProxyState.on('myPokemon', _drawMyPokemon)
    }

    setMainPokemon(name) {
        try {
            myPokemonService.setMainPokemon(name)
            bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('myPokemon-offcanvas')).toggle()
        } catch (error) {
            Pop.toast(error.message, 'error')
        }
    }

    async getMyPokemon() {
        try {
            await myPokemonService.getMyPokemon()
        }   catch (error) {
            Pop.toast(error.message, 'error')
        }
    }

    async addPokemon() {
        try {
            const newPokemon = await myPokemonService.addPokemon()
            Pop.toast(`${newPokemon.name} was added!`) 
        } catch (error) {
            Pop.toast(error.message, 'error')
        }
    }
}