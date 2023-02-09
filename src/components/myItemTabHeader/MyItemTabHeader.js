import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import PostTypeModal from '../postTypeModal/PostTypeModal';
import './myItemTabHeader.scss';

const MyItemTabHeader = ({ filterByType, handleReset, filterByCategory, reFetch }) => {

    const { data } = useFetch(`https://global-life-api.onrender.com/api/events/allevents`);

    const categoryList = [];
    const postTypeList = [];

    data?.events?.map((i) => categoryList.push(i?.category));
    data?.events?.map((i) => postTypeList.push(i?.postType));

    let uniqueCategoryList = [...new Set(categoryList)];
    let uniquePostTypeList = [...new Set(postTypeList)];

    return (
        <div>
            <div className="events-area-header">
                <div className="d-flex align-items-center justify-content-between flex-wrap pb-2">
                    <h4 className="fs-24 lh-34 fw-medium text-dark1 mb-0">What's happening?</h4>
                    <PostTypeModal reFetch={reFetch} />
                </div>
                <div className="events-filter-area d-flex align-items-center justify-content-between mt-3 pb-4">
                    <div className="d-flex align-items-center gap-2">
                        <div className="header">
                            <select className="form-select" onChange={filterByType}>
                                <option value="">All</option>
                                {uniquePostTypeList?.map((i, index) => (
                                    <option key={index} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="header">
                            <select className="form-select" onChange={filterByCategory}>
                                <option value="">Any Category</option>
                                {uniqueCategoryList?.map((i, index) => (
                                    <option key={index} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="reset-filters-btn">
                            <Link className="text-decoration-none fs-12 lh-15 text-green ff-inter ls-1 fw-semiBold text-uppercase p-2 hover-color" onClick={handleReset}>
                                Reset filters
                            </Link>
                        </div>
                    </div>

                    <div className="">
                        <div className="header event-filter-all-btn relevance-btn">
                            <div className="grid-item d-flex align-items-center justify-content-start">
                                <div className="header-right-catalog me-sm-2">
                                    <div className="dropdown">
                                        <Link
                                            className="menu-item btn btn-authInfo is-dropdown-toggle dropdown-toggle d-flex align-items-center text-start gap-1 gap-xxl-1 position-relative bg-gray-2"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="fw-semiBold fs-12 ff-inter d-none d-lg-block mb-0 text-uppercase text-dark2">Relevance</span>
                                            <span className="user-img flex-shrink-0 mb-1">
                                                <img src="assets/img/user-1.png" alt="" className="img-fluid" />
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.9494 3.75H11.8508C11.7761 3.75 11.7058 3.78662 11.6618 3.84668L7.50019 9.58301L3.33856 3.84668C3.29462 3.78662 3.22431 3.75 3.1496 3.75H2.05097C1.95575 3.75 1.90009 3.8584 1.95575 3.93604L7.12079 11.0566C7.30829 11.3145 7.69208 11.3145 7.87812 11.0566L13.0432 3.93604C13.1003 3.8584 13.0446 3.75 12.9494 3.75V3.75Z"
                                                        fill="#1A2227"
                                                    />
                                                </svg>
                                            </span>
                                        </Link>

                                        <div className="notify-dropdown-menu dropdown-menu px-0 py-0 position-absolute">
                                            <ul className="dropdown-list-group list-group list-group-flush px-0 py-0 list-unstyled">
                                                <li className="list-group-item">
                                                    <Link className="list-group-item-linkable text-dark2 ff-inter fs-12 fw-medium text-uppercase ls-2 d-block">Date</Link>
                                                </li>
                                                <li className="list-group-item">
                                                    <Link className="list-group-item-linkable text-dark2 ff-inter fs-12 fw-medium text-uppercase ls-2 d-block">Relevance</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItemTabHeader;