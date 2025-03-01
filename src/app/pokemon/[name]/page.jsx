
import { fetchDetails } from "@/app/api/Api";
import Stats from "@/app/components/Stats";


const PokemonDetail = async ({ params }) => {
    const { name } = await params
    const res = await fetchDetails(name);
    const pokemon = res.data;


    if (!pokemon) return <p>Loading...</p>;

    return (
        <Stats pokemon={pokemon} />
    );
};

export default PokemonDetail;



