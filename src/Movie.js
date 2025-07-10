export default function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>{title}</h2>
      <p>{summary === "" ? "No Summary" : summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
//export default Movie;
