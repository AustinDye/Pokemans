

export class Pokeman {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.user = data.user
    }
    get Template() {
        return /*html*/ `
        <div class="card" onclick="app.myPokemonController.addPokemon(name)">
            <h1>${this.name}<h1>
           
        </div>
        `
    }
    
}
