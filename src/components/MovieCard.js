import propTypes from 'prop-types';
import { CardContainer } from './MovieCard.styled';

export const MovieCard = ({ movieInfo }) => {
  const { title, release_date, overview, genres, poster_path, vote_average } =
    movieInfo;

  const releaseYear = () => {
    const date = new Date(release_date);
    return date.getFullYear();
  };
  const rate = Math.round(vote_average * 10);
  const genresList = () => genres.map(genre => genre.name).join(', ');

  return (
    <CardContainer>
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
        <h1>
          {' '}
          {title} ({releaseYear()}){' '}
        </h1>
        <p>User score: {rate}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList()}</p>
      </div>
    </CardContainer>
  );
};

MovieCard.propTypes = {
  movieInfo: propTypes.shape({
    title: propTypes.string.isRequired,
    release_date: propTypes.string.isRequired,
    overview: propTypes.string,
    genres: propTypes.arrayOf(propTypes.object),
    poster_path: propTypes.string,
    vote_average: propTypes.number.isRequired,
  }),
};
