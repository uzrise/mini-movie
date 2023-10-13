import axios from "axios";

async function fetchMovies(page = 1, items = 20) {
  try {
    const response = await axios.get(
      `https://api.cinerama.uz/api-test/movie-list?page=${page}&items=${items}`,
      {
        headers: { "secret-token": "df884a64-3b86-4186-8139-6c7e3fe27b60" },
      }
    );

    if (response.data.status) {
      return {
        movies: response.data.data.movies,
        totalMovies: response.data.data.total,
      };
    } else {
      throw new Error("API response status is false");
    }
  } catch (error) {
    console.error("API Error:", error.message);
    return {
      movies: null,
      error: true,
    };
  }
}

export default fetchMovies;
