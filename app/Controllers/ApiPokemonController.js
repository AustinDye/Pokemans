import { ProxyState } from "../AppState.js"
import { apiPokemonService } from "../Services/ApiPokemonService.js"
import { Pop } from "../Utils/Pop.js"


function _drawPokemon(){
    let template = ''
    ProxyState.pokemon.forEach(p => template += /*html*/ `<li onclick="app.apiPokemonController.setMainPokemon('${p.name}')" class="selectable">${p.name}</li>`)
    document.getElementById('api-pokemon').innerHTML = template
}

function _drawMainPokemon() {
    if (!ProxyState.mainPokemon) {
        document.getElementById('main-pokemon').innerHTML = ''
    } else {
        document.getElementById('main-pokemon').innerHTML = ProxyState.mainPokemon.Template
    }
}
export class ApiPokemonController {
    constructor() {
        this.getApiPokemon()
        ProxyState.on('main-pokemon', _drawMainPokemon)
        ProxyState.on('pokemon', _drawPokemon)
    }

    async getApiPokemon() {
        try {
            await apiPokemonService.getApiPokemon()
        } catch (error) {
            Pop.toast(error.message, 'error')
        }
    }
    async setMainPokemon(name) {
        try {
            await apiPokemonService.setMainPokemon(name)
        } catch (error) {
            Pop.toast(error.message, 'error')
        }
    }
}

