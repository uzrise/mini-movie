import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import fetchMovies from "../api/fetchMovies";
import SEO from "../components/seo";
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

  const handlePageClick = async (selectedItem) => {
    const selectedPage = selectedItem.selected + 1;
    router.push(`/?page=${selectedPage}`, undefined, { shallow: true });
  };

  return (
    <>
      <SEO title={"Home"} companyName="Movie" />
      <MovieList movies={movies} />
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage - 1}
        // initialPage={router.query.page ? Number(router.query.page) - 1 : 0}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page ? Number(context.query.page) : 1;
  const { movies, totalMovies, error } = await fetchMovies(page);

  if (error) {
    return { notFound: true };
  }

  return {
    props: {
      initialMovies: movies,
      totalMovies,
    },
  };
}
