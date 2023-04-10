import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/api';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => {
        console.log(response);
        setCastInfo(response.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  console.log(castInfo);

  return (
    <>
      {castInfo && (
        <ul>
          {castInfo.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : 'https://img.freepik.com/free-vector/images-concept-illustration_114360-218.jpg'
                }
                width={200}
                height={300}
                loading="lazy"
                alt="poster"
              />
              <div>
                <b> {name} </b>
                <p>Character : {character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
