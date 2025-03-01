"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ImageCard from "./ImageCard";

const Navbar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/pokemon/?search=${search}`);
    };

    return (
        <nav className="w-full flex justify-between items-center p-2 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
            <ImageCard />
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full px-2 md:px-4 py-0 md:py-1 shadow-lg">
                <input
                    type="text"
                    placeholder="Search Pokémon..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="outline-none px-2 py-1 w-40 md:w-64 text-gray-700 placeholder-gray-400"
                />
                <button type="submit">
                    <IoSearchOutline className="text-blue-500 cursor-pointer hover:scale-110 transition-transform" size={22} />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
