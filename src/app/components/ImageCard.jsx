import Link from "next/link";
import Image from "next/image";

const ImageCard = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image src="/pokeball.png" width={40} height={40} alt="PokéBall" className="animate-spin-slow" />
            <h1 className="text-white hidden md:block text-sm md:text-lg font-extrabold tracking-wide">PokéVerse</h1>
        </Link>
    )
}

export default ImageCard