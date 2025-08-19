// SearchResults.jsx
import { useSearchParams } from "react-router-dom";
import foodData from "./Food/FoodData";
import drinkData from "./Drink/drinkData";
import dessertData from "./Dessert/dessertData";
import snackData from "./Snack /snackData";
import promoData from "./Promo/promoData";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const allItems = [...foodData, ...drinkData, ...dessertData, ...snackData,...promoData];

  const filtered = allItems.filter((item) =>
    item.title.toLowerCase().includes(query)
  );
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search results for: "{query}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <Link to={`/item/${item.slug}`} key={item.id}>
              <div className="bg-white rounded shadow p-3 hover:shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded" />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">₺{item.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No matching items found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
