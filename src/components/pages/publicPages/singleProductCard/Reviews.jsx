import React, { useEffect, useState } from "react";
import { useBaseApi } from "../../../contextApi/BaseDomainContext";
import axios from "axios";

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const baseURL = useBaseApi();

  const fetchReview = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/ecommerce/review/${productId}`,
        {
          headers: {
            projectId: "4stjj1sb1x5a",
          },
        }
      );

      // console.log('reviews', response.data.data);
      setReviews(response.data.data);
    } catch (e) {
      console.log("error occured in fetching reviews", e);
    }
  };

  // console.log(reviews);
  useEffect(() => {
    fetchReview();
  }, []);
  return (
    <div className="review-wrapper">
      <div className="review-container">
      <h4 className="review-title">Reviews</h4>
      {reviews.map((review) => {
        return (
          <div key={review.id} className="review-item">
              <div className="ratings-star">{review.ratings}</div>
              <div className="review-text">
                {review.text}
                <div className="review-username">
                  Bewakoof Fans
                </div>
                <div className="review-date">2021-06-24</div>
              </div>
            </div>
         
        );
      })}
       </div>
    </div>
  );
};

export default Reviews;
