import Nav from "./components/Nav";

export default function Home() {
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
      </section>
    </main>
  );
}
