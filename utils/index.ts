export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f51175f41dmshb49d38b5d26d52dp15facdjsn327f9ea53778",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json()

  return result
}
