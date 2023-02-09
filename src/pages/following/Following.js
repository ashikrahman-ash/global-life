import React from 'react';
import { Spinner } from 'react-bootstrap';
import FollowingTab from '../../components/followingTab/FollowingTab';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';

const Following = () => {

  const { user } = useAuth();

  const { data, loading, error } = useFetch(`https://global-life-api.onrender.com/api/users/myfollowingitem/${user?._id}`);

  const { data: followingMemberData, loading: memberLoading, error: memberError } = useFetch(`https://global-life-api.onrender.com/api/users/myfollowingmember/${user?._id}`);


  return (
      <>
          <section className="section-padding-72 bg-gray-3">
              <div className="container">
                  <h3 className="fs-48 text-center">Following</h3>
                  <div className="item-box d-flex align-items-center justify-content-center">
                      <div className="item d-flex">
                          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.4" cx="28.5" cy="28.5" r="28.5" fill="#A7FFDA" />
                              <path
                                  d="M36.1212 33.8969C35.679 32.8496 35.0374 31.8984 34.2321 31.0961C33.4292 30.2915 32.4781 29.65 31.4313 29.207C31.4219 29.2023 31.4126 29.2 31.4032 29.1953C32.8633 28.1406 33.8126 26.4227 33.8126 24.4844C33.8126 21.2734 31.211 18.6719 28.0001 18.6719C24.7891 18.6719 22.1876 21.2734 22.1876 24.4844C22.1876 26.4227 23.1368 28.1406 24.5969 29.1977C24.5876 29.2023 24.5782 29.2047 24.5688 29.2094C23.5188 29.6523 22.5766 30.2875 21.768 31.0984C20.9634 31.9013 20.3219 32.8524 19.879 33.8992C19.4438 34.924 19.2091 36.0228 19.1876 37.1359C19.1869 37.161 19.1913 37.1858 19.2005 37.2091C19.2096 37.2324 19.2233 37.2537 19.2408 37.2716C19.2583 37.2895 19.2791 37.3037 19.3022 37.3134C19.3253 37.3231 19.35 37.3281 19.3751 37.3281H20.7813C20.8844 37.3281 20.9665 37.2461 20.9688 37.1453C21.0157 35.3359 21.7422 33.6414 23.0266 32.357C24.3555 31.0281 26.1204 30.2969 28.0001 30.2969C29.8797 30.2969 31.6446 31.0281 32.9735 32.357C34.2579 33.6414 34.9844 35.3359 35.0313 37.1453C35.0337 37.2484 35.1157 37.3281 35.2188 37.3281H36.6251C36.6501 37.3281 36.6749 37.3231 36.6979 37.3134C36.721 37.3037 36.7419 37.2895 36.7593 37.2716C36.7768 37.2537 36.7905 37.2324 36.7997 37.2091C36.8088 37.1858 36.8132 37.161 36.8126 37.1359C36.7891 36.0156 36.5571 34.9258 36.1212 33.8969ZM28.0001 28.5156C26.9243 28.5156 25.9118 28.0961 25.1501 27.3344C24.3883 26.5727 23.9688 25.5602 23.9688 24.4844C23.9688 23.4086 24.3883 22.3961 25.1501 21.6344C25.9118 20.8727 26.9243 20.4531 28.0001 20.4531C29.0758 20.4531 30.0883 20.8727 30.8501 21.6344C31.6118 22.3961 32.0313 23.4086 32.0313 24.4844C32.0313 25.5602 31.6118 26.5727 30.8501 27.3344C30.0883 28.0961 29.0758 28.5156 28.0001 28.5156Z"
                                  fill="#4D585F"
                              />
                          </svg>

                          <div>
                              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">Members</p>
                              {memberLoading && <Spinner size="sm" animation="grow" variant="warning" />}

                              {!memberLoading && !memberError && <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">{followingMemberData?.length > 0 ? followingMemberData?.length : 0}</h5>}
                          </div>
                      </div>
                      <div className="item d-flex">
                          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.4" cx="28.5" cy="28.5" r="28.5" fill="#FFC9C9" />
                              <path
                                  d="M28.3438 26.3852V28.375H26.3633C26.2672 28.375 26.1875 28.4477 26.1875 28.5391V29.5234C26.1875 29.6125 26.2672 29.6875 26.3633 29.6875H28.3438V31.6773C28.3438 31.7688 28.4187 31.8438 28.5078 31.8438H29.4922C29.5836 31.8438 29.6562 31.7688 29.6562 31.6773V29.6875H31.6367C31.7328 29.6875 31.8125 29.6125 31.8125 29.5234V28.5391C31.8125 28.4477 31.7328 28.375 31.6367 28.375H29.6562V26.3852C29.6562 26.2938 29.5836 26.2188 29.4922 26.2188H28.5078C28.4187 26.2188 28.3438 26.2938 28.3438 26.3852ZM37.625 22.9937H29.2109L26.4617 20.3641C26.4267 20.3313 26.3807 20.3129 26.3328 20.3125H20.375C19.9602 20.3125 19.625 20.6477 19.625 21.0625V34.9375C19.625 35.3523 19.9602 35.6875 20.375 35.6875H37.625C38.0398 35.6875 38.375 35.3523 38.375 34.9375V23.7437C38.375 23.3289 38.0398 22.9937 37.625 22.9937ZM36.6875 34H21.3125V22H25.7305L28.5336 24.6812H36.6875V34Z"
                                  fill="#4D585F"
                              />
                          </svg>

                          <div>
                              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">Item</p>

                              {loading && <Spinner size="sm" animation="grow" variant="warning" />}

                              {!loading && !error && <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">{data?.length > 0 ? data?.length : 0}</h5>}
                          </div>
                      </div>
                      <div className="item d-flex">
                          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.4" cx="28.5" cy="28.5" r="28.5" fill="#E1DEFF" />
                              <path
                                  d="M24.8085 24.6667C25.4186 23.372 27.0649 22.4444 29.0001 22.4444C31.4547 22.4444 33.4445 23.9368 33.4445 25.7778C33.4445 27.3327 32.0249 28.639 30.1047 29.0073C29.5021 29.1229 29.0001 29.6086 29.0001 30.2222M29 33.5556H29.0111M39 28C39 33.5228 34.5228 38 29 38C23.4772 38 19 33.5228 19 28C19 22.4772 23.4772 18 29 18C34.5228 18 39 22.4772 39 28Z"
                                  stroke="#4D585F"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                              />
                          </svg>

                          <div>
                              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">Item Type</p>
                              <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">18</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="following section-padding-72">
              <div className="container">
                  <FollowingTab data={data} followingMemberData={followingMemberData} loading={loading} error={error} />
              </div>
          </section>
      </>
  );
};

export default Following;