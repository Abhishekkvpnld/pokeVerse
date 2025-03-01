import axios from "axios";


export const fetchAll = async () => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_POKEMON_API;
        const res = await axios.get(`${apiUrl}/pokemon`);
        const data = await res.data;

        return { data: data }

    } catch (error) {
        console.log(error);
        return { data: [] };
    }
}


export const fetchDetails = async (name) => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_POKEMON_API;
        const res = await axios.get(`${apiUrl}/pokemon/${name}`);
        if (res.data) {
            const data = await res.data;

            return { data: data }
        }

    } catch (error) {
        console.log(error);
        return { data: [] };
    }
}


export const fetchDataUrl = async (url) => {
    try {
        const res = await axios.get(`${url}`);
        if (res.data) {
            const data = await res.data;
            return { data: data }
        }
    } catch (error) {
        console.log(error);
        return { data: [] };
    }
};