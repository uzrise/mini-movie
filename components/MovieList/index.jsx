import Link from "next/link";
import styles from "./MovieList.module.css";
import Image from "next/image";

export default function MovieList({ movies }) {
  return (
    <div className={styles.movieGrid}>
      {movies?.map((movie) => (
        <Link
          href={`/movie/${movie.id}`}
          key={movie.id}
          className={styles.movieCard}
        >
          <Image
            src={movie.poster}
            alt={movie.title}
            width={215}
            height={305}
            loading="lazy"
            className={styles.poster}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.year}>{movie.year}</p>
            See Details
          </div>
        </Link>
      ))}
    </div>
  );
}
