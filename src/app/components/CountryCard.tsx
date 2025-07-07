import Image from "next/image";
export default function CountryCard() {
  return (
    <div className="col-span-1 flex items-center justify-center">
      <div className="card bg-white w-full shadow-sm mb-5 ">
        <Image
          src={"/germany.png"}
          alt="Germany"
          width={400}
          height={150}
        ></Image>
        <div className="card-body">
          <h2 className="card-title">Germany</h2>
          <div className="flex flex-col justify-start items-start">
            <h3 className="font-bold">
              Population: <span className="font-medium">81,770,900</span>
            </h3>
            <h3 className="font-bold">
              Region: <span className="font-medium">Europe</span>
            </h3>
            <h3 className="font-bold">
              Capital: <span className="font-medium">Berlin</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
