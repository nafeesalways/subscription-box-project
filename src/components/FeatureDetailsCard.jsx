import React, { useState } from 'react';

import Footer from './Footer';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const FeatureDetailsCard = ({ feature }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (!reviewText || !rating || rating < 1 || rating > 5) {
     toast('Please enter a valid review and rating between 1 and 5.');
      return;
    }

    const newReview = {
      id: Date.now(),
      text: reviewText,
      rating: Number(rating),
    };

    setReviews([newReview, ...reviews]);
    setReviewText('');
    setRating('');
  };

  return (
    <div className="p-5">
     <div className="bg-white rounded-xl shadow-lg p-6 m-4 flex flex-col items-center text-center space-y-2">
  <img src={feature.thumbnail} alt={feature.name} className="w-40 h-40 object-contain mb-5" />
  <h2 className="text-xl font-semibold">{feature.name}</h2>
  <h2 className="text-xl font-semibold">Tech Category: {feature.tech_category}</h2>
  <p className="font-semibold">Useful for: {feature.features}</p>
  <p className="font-semibold">{feature.platforms}</p>
  <p className="font-semibold text-lg">
    Price: <span className="text-secondary">{feature.price}</span>
  </p>
</div>

      
      <Link className='btn  btn-secondary mb-5' to={`/category/${feature.category_id}`}>
        Back to Feature
      </Link>

      {/* Review Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Leave a Review</h3>
        <input
          type="text"
          placeholder="Write your review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="number"
          placeholder="Rating (1 to 5)"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="input input-bordered w-full mb-2"
        />
        <button onClick={handleReviewSubmit} className="btn btn-secondary rounded-full">
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">User Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="border p-3 mb-2 rounded-md">
              <p className="font-medium">"{r.text}"</p>
              <p className="text-sm">Rating: ⭐ {r.rating}/5</p>
            </div>
          ))
        )}
      </div>

      <footer className='max-w-screen'>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default FeatureDetailsCard;
