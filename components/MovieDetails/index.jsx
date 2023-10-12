import styles from "./MovieDetails.module.css";
import EmployeeList from "./EmployeeList";
import Image from "next/image";
import dynamic from "next/dynamic";
// import VideoPlayerCustom from "../VideoPlayerCustom";
const ReactVideoPlayer = dynamic(() => import("../ReactVideoPlayer"), {
  ssr: false,
});

const MovieDetails = ({ movie }) => {
  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.movieHeader}>
        <Image
          priority
          src={movie.poster}
          alt={movie.title}
          className={styles.poster}
          loading="eager"
          width={300}
          height={444}
        />
        <div className={styles.movieInfo}>
          <h2>{movie.title}</h2>
          <p className={styles.description}>{movie.description}</p>
          <div className={styles.movieDetails}>
            <p>Year: {movie.year}</p>
            <p>
              Country:{" "}
              {movie.countries.map((country) => country.title).join(", ")}
            </p>
            <p>Genre: {movie.genres.map((genre) => genre.title).join(", ")}</p>
          </div>
        </div>
      </div>
      <ReactVideoPlayer
        url={"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"}
      />
      {/* <VideoPlayerCustom
        src={"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"}
      /> */}
      <EmployeeList groups={movie.people} />
    </div>
  );
};

export default MovieDetails;
