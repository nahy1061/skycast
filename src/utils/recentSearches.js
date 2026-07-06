const STORAGE_KEY = "recentSearches";

export function getRecentSearches() {
  // read from localStorage, parse JSON
  const saved = localStorage.getItem(STORAGE_KEY);

  // if nothing saved yet, return an empty array
  return saved ? JSON.parse(saved) : [];
}

export function addRecentSearch(city) {
  // get current list (using the function above)
  const currentList = getRecentSearches();

  // remove city if it already exists in the list (avoid duplicates) - toLowerCase() for case-sensitivity edge cases
  const filteredList = currentList.filter((item) => item.toLowerCase() !== city.toLowerCase());

  // add city to the front of the list
  filteredList.unshift(city);

  // keep only the first 5
  const newList = filteredList.slice(0, 5);

  // save back to localStorage (JSON.stringify)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));

  // return the new list, so the caller can update state immediately
  return newList;
}
