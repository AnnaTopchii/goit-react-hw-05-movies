import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
  location: propTypes.object,
};
