import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { MovieCard } from 'components/MovieCard';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Home');
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(response => {
        setMovieInfo(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>

      {isLoading && <div>LOADING ...</div>}

      {movieInfo && <MovieCard movieInfo={movieInfo} />}

      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
