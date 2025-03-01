
export const metadata = {
    title: "PokéVerse",
    description: "Discover Pokémon cards, stats, abilities, and moves.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
