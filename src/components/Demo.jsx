const portfolioItems = [
  {
    id: 1,
    category: "GRAPHIC",
    imageUrl: "https://i.postimg.cc/rsfd9Q3m/shofor-Pothe.png",
    title: "Graphic Design Project 1",
  },
  {
    id: 2,
    category: "DESIGN",
    imageUrl: "https://i.postimg.cc/rsfd9Q3m/shofor-Pothe.png",
    title: "Design Project 1",
  },
  {
    id: 3,
    category: "BRAND",
    imageUrl: "https://i.postimg.cc/rsfd9Q3m/shofor-Pothe.png",
    title: "Branding Project 1",
  },
  {
    id: 4,
    category: "GRAPHIC",
    imageUrl: "https://i.postimg.cc/rsfd9Q3m/shofor-Pothe.png",
    title: "Graphic Design Project 2",
  },
  {
    id: 5,
    category: "DESIGN",
    imageUrl: "https://i.postimg.cc/rsfd9Q3m/shofor-Pothe.png",
    title: "Design Project 2",
  },
  {
    id: 6,
    category: "BRAND",
    imageUrl: "https://i.postimg.cc/rsfd9Q3m/shofor-Pothe.png",
    title: "Branding Project 2",
  },
];

const page = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filteredItems =
    activeFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };
  return (
    <div className="layout-padding">
      <SectionHeader icon={<Folder />} title="Projects" />

      <div>
        <div className="border border-white">
          <ul className="inline-flex rounded-2xl">
            <li className="mr-2">
              <button
                className={`px-4 py-2 rounded-2xl text-sm font-semibold ${
                  activeFilter === "ALL"
                    ? "bg-sky-500 text-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
                }`}
                onClick={() => handleFilterClick("ALL")}
              >
                ALL
              </button>
            </li>
            <li className="mr-2">
              <button
                className={`px-4 py-2 rounded-2xl text-sm font-semibold ${
                  activeFilter === "GRAPHIC"
                    ? "bg-sky-500 text-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
                }`}
                onClick={() => handleFilterClick("GRAPHIC")}
              >
                GRAPHIC
              </button>
            </li>
            <li className="mr-2">
              <button
                className={`px-4 py-2 rounded-2xl text-sm font-semibold ${
                  activeFilter === "DESIGN"
                    ? "bg-sky-500 text-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
                }`}
                onClick={() => handleFilterClick("DESIGN")}
              >
                DESIGN
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 rounded-2xl text-sm font-semibold ${
                  activeFilter === "BRAND"
                    ? "bg-sky-500 text-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
                }`}
                onClick={() => handleFilterClick("BRAND")}
              >
                BRAND
              </button>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-md overflow-hidden shadow-md group"
            >
              <div className="aspect-w-16 aspect-h-10">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 group-hover:opacity-75"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-80 transition duration-500 ease-in-out">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.category} Project
                  </p>
                </div>
              </div>
              {/* Hover Animation Overlay */}
              <div className="absolute inset-0 bg-sky-500 bg-opacity-0 z-10 transition-all duration-500 ease-in-out transform translate-y-full group-hover:-translate-y-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;