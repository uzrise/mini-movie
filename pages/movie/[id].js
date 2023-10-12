import MovieDetails from "../../components/MovieDetails";
import axios from "axios";
export default function MoviePage({ movie }) {
  return <MovieDetails movie={movie} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  let movie = null;

  try {
    const response = await axios.get(
      `https://api.cinerama.uz/api-test/movie-detail?id=${id}`,
      {
        headers: { "secret-token": "df884a64-3b86-4186-8139-6c7e3fe27b60" },
      }
    );
    if (response.data.status) {
      movie = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }

  return {
    props: {
      movie, // movie ma'lumotlarini prop sifatida berish
    },
  };
}
