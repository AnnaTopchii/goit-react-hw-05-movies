import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useSearchParams } from 'react-router-dom';

import { searchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList';
import {
  Container,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Movies.styled';

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
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>
      </SearchForm>

      {isLoading && <div>LOADING ...</div>}

      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
      <ToastContainer />
    </Container>
  );
};

export default MoviesSearch;
