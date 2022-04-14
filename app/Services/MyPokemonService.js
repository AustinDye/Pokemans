import { ProxyState } from "../AppState.js";
import { Pokeman } from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosServices.js";



class MyPokemonService {
    async addPokemon(){
        const response = await sandboxApi.post('austin/pokemon', ProxyState.mainPokemon.name)
        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokeman(response.data)].sort((a, b) => {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        })
        return response.data
    }
    setMainPokemon(pokeId) {
            const currentPokemon = ProxyState.pokemon.find(p => p.name == pokeId)
            ProxyState.mainPokemon = currentPokemon
    }
    async getMyPokemon() {
        const response = await sandboxApi.get('austin/pokemon')
        ProxyState.myPokemon = response.data.map(p => new Pokeman(p)).sort((a, b) => {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        })
    }

        
    
    
}

export const myPokemonService = new MyPokemonService()