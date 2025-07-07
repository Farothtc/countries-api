import Image from "next/image";
export default function Nav() {
  return (
    <nav className="container mx-auto py-10 bg-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-4xl">Where in the world?</h1>
        <div className="flex items-center justify-center gap-2">
          <button className="btn btn-ghost bg-white text-black">
            <Image
              src="/icon-moon.svg"
              alt="Dark"
              width={22}
              height={22}
            ></Image>
            <h2>Dark Mode</h2>
          </button>
        </div>
      </div>
    </nav>
  );
}
