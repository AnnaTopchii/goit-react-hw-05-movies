import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <b> Author: {author} </b>
          <p> {content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry, there are no reviews</p>
  );
};

export default Reviews;
