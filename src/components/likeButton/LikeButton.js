import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const LikeButton = ({ review }) => {

    const { user } = useAuth();

    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

     useEffect(() => {
       setIsLiked(review?.likes?.includes(user?._id));
       setLike(review?.likes?.length);
     }, [user?._id, review?.likes]);


     const likeHandler = () => {
       if (user?._id) {
         try {
           axios.put(`https://global-life-api.onrender.com/api/reviews/${review?._id}/like`, {
             userId: user?._id,
           });

           setLike(isLiked ? like - 1 : like + 1);
           setIsLiked(!isLiked);
         } catch (err) {
           console.log(err);
         }
       } else {
         toast.error("You have to login for like the post");
       }
     };
  return (
    <button
      className="fw-medium d-flex align-items-center justify-content-center gap-2 fs-12 text-clr-dark-2 fw-semiBold text-uppercase border-0 bg-transparent"
      onClick={likeHandler}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5205 3.15382C12.3242 2.69919 12.041 2.2872 11.687 1.94093C11.3327 1.59362 10.915 1.31762 10.4565 1.12794C9.98117 0.930469 9.4713 0.829392 8.95654 0.830577C8.23438 0.830577 7.52979 1.02833 6.91748 1.40187C6.771 1.49122 6.63184 1.58937 6.5 1.6963C6.36816 1.58937 6.229 1.49122 6.08252 1.40187C5.47021 1.02833 4.76562 0.830577 4.04346 0.830577C3.52344 0.830577 3.01953 0.930186 2.54346 1.12794C2.0835 1.31837 1.66895 1.5923 1.31299 1.94093C0.958491 2.28681 0.675309 2.69889 0.479492 3.15382C0.275879 3.62696 0.171875 4.1294 0.171875 4.64649C0.171875 5.13429 0.271484 5.64259 0.469238 6.15968C0.634766 6.59181 0.87207 7.04005 1.17529 7.49269C1.65576 8.20899 2.31641 8.95607 3.13672 9.71339C4.49609 10.9688 5.84229 11.8359 5.89941 11.8711L6.24658 12.0938C6.40039 12.1919 6.59814 12.1919 6.75195 12.0938L7.09912 11.8711C7.15625 11.8345 8.50098 10.9688 9.86182 9.71339C10.6821 8.95607 11.3428 8.20899 11.8232 7.49269C12.1265 7.04005 12.3652 6.59181 12.5293 6.15968C12.7271 5.64259 12.8267 5.13429 12.8267 4.64649C12.8281 4.1294 12.7241 3.62696 12.5205 3.15382ZM6.5 10.9351C6.5 10.9351 1.28516 7.59376 1.28516 4.64649C1.28516 3.15382 2.52002 1.94386 4.04346 1.94386C5.11426 1.94386 6.04297 2.54151 6.5 3.41456C6.95703 2.54151 7.88574 1.94386 8.95654 1.94386C10.48 1.94386 11.7148 3.15382 11.7148 4.64649C11.7148 7.59376 6.5 10.9351 6.5 10.9351Z"
          fill={isLiked ? "#0A8270" : "#69747B"}
        />
      </svg>
          <span className='me-1'>{ like }</span> Like
    </button>
  );
};

export default LikeButton;