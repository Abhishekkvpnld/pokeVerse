
import { fetchAll } from "../api/Api";
import Navbar from '../components/Navbar';
import CardSection from '../components/CardSection';



const Page = async ({ searchParams }) => {

  const searchQuery = searchParams?.search || "";

  const res = await fetchAll();
  let data = res?.data?.results || [];

  if (searchQuery) {
    data = data.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }


  return (
    <div className='flex flex-col gap-2 bg-slate-100 min-h-[100vh]'>
      <Navbar />
      <h1 className='my-2 text-xl font-semibold text-gray-500 mx-5 transition-all'>Explore All Pokémon Cards</h1>
      <CardSection filterData={data} />
    </div>
  )
}

export default Page;