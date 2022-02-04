export const fetchPeopleAPI = async (page = 1, search) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?format=json&page=${page}&search=${search}`
    );
    const data = await response.json();
    return data;
  } catch {
    console.log("failed planets");
  }
};