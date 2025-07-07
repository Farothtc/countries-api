"use client";
import axios from "axios";
import CountryCard from "./components/CountryCard";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";

type DataCountry = {
  name: string;
  population: number;
  region: string;
  capital: string;
};

export default function Home() {
  const [countryData, setCountryData] = useState<DataCountry>({
    name: "",
    population: 0,
    region: "",
    capital: "",
  });
  useEffect(() => {
    const countryData = async () => {
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
        );
        setCountryData((prevData) => ({
          ...prevData,
          name: res.data.name,
        }));
        console.log(countryData);
      } catch (err) {
        console.log("Unable to connect API", err);
      }
    };
    countryData();
  }, []);

  return (
    <main className="min-h-screen">
      <Nav />
      <hr className="text-gray-300 border-t-3" />
      <section className="bg-[#fafafa]">
        {/* Search & Filter */}
        <div className="container mx-auto py-15 flex justify-between items-center">
          <label className="input bg-white rounded-lg border-gray-300 h-12 w-[35%] flex gap-5">
            <svg
              className="h-[1em] opacity-50 ps-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow bg-white"
              placeholder="Search for a country..."
            />
          </label>
          <select
            defaultValue="Filter by Region"
            className="select bg-white border-gray-300 rounded-lg h-12 w-52"
          >
            <option disabled={true}>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Ocenia</option>
          </select>
        </div>
        {/* Countries */}
        <div className="container mx-auto pb-5 grid grid-cols-4 gap-25">
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </section>
    </main>
  );
}
