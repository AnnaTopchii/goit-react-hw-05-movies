import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/api';
import { MoviesList } from 'components/MoviesList';
import { Container } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <div>LOADING ...</div>}

      {movies.length > 0 && (
        <Container>
          <h1>Trending today</h1>
          <MoviesList movies={movies} location={location} />
        </Container>
      )}
    </>
  );
};

export default Home;
