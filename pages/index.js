import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import fetchMovies from "../api/fetchMovies";
import SEO from "../components/seo";
import Pagination from "@material-ui/lab/Pagination";
const items = 20;

export default function Home({ initialMovies, totalMovies }) {
  const [movies, setMovies] = useState(initialMovies);
  const router = useRouter();
  const totalPages = Math.ceil(totalMovies / items);
  const pageNumber = router.query.page ? Number(router.query.page) : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);

  useEffect(() => {
    const fetchPage = async () => {
      if (pageNumber === currentPage) return;
      const { movies, error } = await fetchMovies(pageNumber, items);
      if (!error) {
        setCurrentPage(pageNumber);
        setMovies(movies);
      } else {
        console.log(error);
      }
    };

    fetchPage();
  }, [router.query.page]);

  const handlePageChange = (event, value) => {
    router.push(`/?page=${value}`, undefined, { shallow: true });
  };

  return (
    <>
      <SEO title={"Home"} companyName="Movie" />
      <MovieList movies={movies} />
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handlePageChange}
        color="primary"
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page ? Number(context.query.page) : 1;
  const { movies, totalMovies, error } = await fetchMovies(page, items);

  if (error) {
    console.error(error);
    return { notFound: true };
  }

  return {
    props: {
      initialMovies: movies,
      totalMovies,
    },
  };
}
