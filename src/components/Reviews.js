import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/api';

export const Revievs = () => {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(response => {
        setReviews(response.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b> Author: {author} </b>
              <p> {content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
