import { Pokemon } from "./models/pokemon";
import { PokemonDetail } from "./models/pokemonDetail";
import { PokemonResponse } from "./models/pokemonResponse";

export class PokemonService {
    private static baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

    public static async GetPokemon(): Promise<Pokemon[]> {
        let response = await fetch(this.baseUrl);

        if (!response.ok)
            throw new Error('Network response was not ok');

        let result: PokemonResponse = await response.json()

        let pokemon = result?.results;

        if (!pokemon)
            throw new Error('Something went wrong parsing the response!');

        // The API does not include IDs in the Pokémon objects, so I'll temporarily add them by extracting the ID from the URL.
        pokemon.forEach((p) => {
            let id = p.url.split('/').filter(x => x).pop();

            if (id) {
                p.id = parseInt(id);
            }
        });

        return pokemon;
    }

    public static async GetPokemonById(id: number): Promise<PokemonDetail> {
        let response = await fetch(`${this.baseUrl}/${id}`);

        if (!response.ok)
            throw new Error('Network response was not ok');

        let pokemon: PokemonDetail = await response.json();

        return pokemon;
    }
}