import React from "react";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EventDetailsContent from "../../components/eventDetailsContent/EventDetailsContent";
import EventDetailsHeroArea from "../../components/eventDetailsHeroArea/EventDetailsHeroArea";
import EventReview from "../../components/eventReview/EventReview";
import EventSideBar from "../../components/eventSideBar/EventSideBar";
import HappingNext from "../../components/happingNext/HappingNext";
import useFetch from "../../hooks/useFetch";
import "./eventDetails.scss";

const EventDetails = () => {

  const { eventId } = useParams();

  const { data, loading } = useFetch(`https://global-life-api.onrender.com/api/events/allevents/${eventId}`);
  

  const {
    data: reviewData,
  } = useFetch(
    `https://global-life-api.onrender.com/api/reviews/${data?._id}`
  );


  const allRating = reviewData?.reviews?.map((i) => i?.rating);

  // Creating variable to store the avgRating
  let avgRating = 0;

  // Running the for loop
  for (let i = 0; i < allRating?.length; i++) {
    avgRating += allRating[i] / allRating?.length;
  }

  const totalReviews = reviewData?.reviews?.length;


    const { data:relatedData } = useFetch(
      `https://global-life-api.onrender.com/api/events/allevents/`
    );

    const filterdRelatedEvents = relatedData?.events?.filter(
      (event) => event?.category === data?.category
    );

    const realatedEvents = filterdRelatedEvents?.filter(
      (event) => event?._id !== eventId
    );

    // console.log(realatedEvents);

    return (
      <div>
        <EventDetailsHeroArea
          singleDetails={data}
          avgRating={avgRating}
          totalReviews={totalReviews}
        />

        <div className="blog-details-main bg-gray3 py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 ff-inter">
                <EventDetailsContent singleDetails={data} />
                <EventReview
                  avgRating={avgRating}
                  totalReviews={totalReviews}
                  singleDetails={data}
                />
              </div>
              <div className="col-lg-3 offset-1">
                <EventSideBar singleDetails={data} />
              </div>
            </div>
          </div>
        </div>
        <section className="heppeningNext sectionPadding">
          <div className="container">
            <div className="commonTitle">
              <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">
                You might also like...
              </h2>
            </div>

            <div className="happeningNextWrapper mt-5">
              <div className="row">
                <div className="d-flex justify-content-center align-items-center h-50">
                  {loading && (
                    <div>
                      <Spinner animation="grow" variant="warning" />
                    </div>
                  )}
                </div>

                {!loading &&
                  realatedEvents?.map((event) => (
                    <HappingNext key={event?._id} event={event} />
                  ))}

                {realatedEvents?.length === 0 && (
                  <p className="text-clr-dark-4 ff-inter text-center">
                    No Related Event or Experience Found !!!
                  </p>
                )}

                <div className="d-flex justify-content-center mt-5">
                  <Link
                    to="/allevents"
                    className="commonBtn ff-inter bg-green discoverBtn text-uppercase ls-1 d-flex align-items-center justify-content-center text-white fs-12 text-decoration-none"
                  >
                    <span>SEE ALL</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default EventDetails;
