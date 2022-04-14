import { ProxyState } from "../AppState.js";
import { Pokeman } from "../Models/Pokemon.js";
import { pokeApi, sandboxApi } from "./AxiosServices.js";

class ApiPokemonService {
    async setMainPokemon(name) {
        const response = await pokeApi.get('pokemon/' + name)
        ProxyState.mainPokemon = new Pokeman(response.data)
    }

    async getApiPokemon(){
        const response =  await pokeApi.get('pokemon')
        console.log('pokemons', response.data)
        ProxyState.pokemon = response.data.results
    }

}

export const apiPokemonService = new ApiPokemonService()

