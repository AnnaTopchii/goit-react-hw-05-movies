import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then(response => {
        setMovies(response.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
      .finally();
  }, []);

  return (
    <>
      {movies.length > 0 && (
        <>
          {isLoading && <div>LOADING ...</div>}
          <h1>Trending today</h1>
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Home;
