import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";

function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  async function getData(value) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );

    // This is the body of the response which contains what you'd see in postman
    const data = await response.json();
    const mealsResponse = data.meals; // null or []

    if (mealsResponse) {
      setMeals(mealsResponse);
    }
  }

  function handleText(e) {
    setSearch(e.target.value);
  }

  /**
   * When search updates,
   * The callback is invoked
   * The callback happens to be calling getData, and passes in "search"
   */
  useEffect(() => {
    getData(search);
  }, [search]);

  return (
    <div className="md:px-32 lg:40 xl:px-64 2xl:px-96">
      <div>
        <label
          htmlFor="recipe"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Search for a recipe
        </label>
        <input
          type="text"
          name="recipe"
          id="recipe"
          value={search}
          onChange={handleText}
          className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search for recipe here"
        ></input>
      </div>
      <div className="mt-4">
        <ul className="flex flex-col gap-y-4">
          {meals.map((meal) => (
            <li>
              <Recipe
                image={meal.strMealThumb}
                instructions={meal.strInstructions}
                title={meal.strMeal}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
