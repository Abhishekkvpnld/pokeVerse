
import Navbar from "../../components/Navbar";


export const metadata = {
  title: "Details",
  description: "Pokémon Details",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
