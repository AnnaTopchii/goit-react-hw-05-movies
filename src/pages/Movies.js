import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useSearchParams } from 'react-router-dom';

import { searchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList';
// import {
//   Header,
//   SearchForm,
//   Button,
//   ButtonLabel,
//   Input,
// } from './Searchbar.styled';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }

    setIsLoading(true);
    searchMovies(movieName)
      .then(response => {
        if (response.total_results === 0) {
          setMovies([]);
          return toast.error(
            `Sorry, we didn't find any films with name ${movieName}`
          );
        }
        setMovies(response.results);
      })
      .catch(error => {
        toast.error(`Sorry something went wrong. ${error.message}`);
      })
      .finally(setIsLoading(false));
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.movie.value.toLowerCase();

    if (value.trim() === '') {
      setMovies([]);
      return toast.warn('Enter any word to search movies');
    }
    setSearchParams({ movieName: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <label>Search</label>
        </button>
      </form>

      {isLoading && <div>LOADING ...</div>}

      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
      <ToastContainer />
    </>
  );
};

export default MoviesSearch;
