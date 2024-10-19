import React from 'react';
import './Reviews.css'; 

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      text: 'ImmuniLink has made tracking my child’s vaccinations so easy! I love the reminders.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'A fantastic platform! I can access my child’s records from anywhere.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Emily Johnson',
      text: 'Very user-friendly and reliable. I highly recommend it to all parents!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Michael Brown',
      text: 'Great tool for managing immunizations. I appreciate the guidance it provides!',
      rating: 4,
    },
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">What Our Users Say</h2>
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <h4 className="reviewer-name">{review.name}</h4>
            <p className="review-text">"{review.text}"</p>
            <div className="rating">
              {'⭐'.repeat(review.rating)} {/* Display star rating */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
