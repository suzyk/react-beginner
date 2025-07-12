import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ title: "", genres: [], rating: 0 });
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ) //68909
      .json();
    const m = json.data.movie;
    setMovie({ title: m.title, genres: m.genres, rating: m.rating });
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{movie.rating}</h2>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </>
  );
}
