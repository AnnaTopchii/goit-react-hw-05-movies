import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Home');
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => {
        setMovieInfo(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const { title, release_date, overview, genres, poster_path, vote_average } =
    movieInfo;

  const releaseYear = () => {
    const date = new Date(release_date);
    return date.getFullYear();
  };
  const rate = Math.round(vote_average * 10);
  //   const genresList = () => genres.map(genre => genre.name).join(', ');

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>

      <h1>
        {title} ({releaseYear()})
      </h1>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'https://img.freepik.com/free-vector/images-concept-illustration_114360-218.jpg'
          }
          width={300}
          height={400}
          loading="lazy"
          alt="poster"
        />
        <div>
          <p>User score: {rate}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {/* <p>{genresList()}</p> */}
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
