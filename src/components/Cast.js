import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/api';
import { Container, ActorsList, ActorsCard } from './Cast.slyled';
import { getPosterPath } from 'services/getPosterPath';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => {
        setCastInfo(response.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <Container>
      {castInfo.length > 0 && (
        <ActorsList>
          {castInfo.map(({ id, name, profile_path, character }) => (
            <ActorsCard key={id}>
              <img
                src={getPosterPath(profile_path)}
                width={200}
                height={300}
                loading="lazy"
                alt="poster"
              />
              <b> {name} </b>
              <p>Character : {character}</p>
            </ActorsCard>
          ))}
        </ActorsList>
      )}
    </Container>
  );
};

export default Cast;
