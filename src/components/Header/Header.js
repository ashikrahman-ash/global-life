import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import message from "../../assets/images/MessageLeft.svg";
import notification from "../../assets/images/ring.svg";
import PrifileAvator from '../../assets/images/demo-profile-avatar.png'
import arrow from "../../assets/images/whiteArrow.png";
import useAuth from "../../hooks/useAuth";
import "./Header.scss";

const Header = () => {
    const { user, dispatch } = useAuth();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div>
            {/* Top header */}
            <header className="header py-2 bg-gray-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center gap-3">
                        <div className="grid-item d-xl-block">
                            <div className="globalSearch">
                                <input type="search" className="globalSearchInput custom-form-control border-0 bg-transparent ff-inter" placeholder="Search here.." />
                            </div>
                        </div>
                        <div className="grid-item text-xl-center d-flex align-items-center gap-4">
                            <p className="mb-0 ff-inter text-dark3 fs-14 fw-medium">Propose a user to Join Global Life Community</p>
                            <Link to="/" className="top-header-btn">
                                propose{" "}
                                <span className="ms-1 pb-1">
                                    <img src={arrow} alt="" />
                                </span>
                            </Link>
                        </div>
                        {!user?.email && (
                            <div className="grid-item d-flex align-items-center justify-content-center justify-content-sm-end gap-3 ">
                                <Link to="/login" className="fs-12 fw-semiBold text-clr-dark-1 ff-inter text-uppercase text-decoration-none">
                                    Login
                                </Link>
                                <Link to="/signup" className="fs-12 fw-semiBold text-clr-dark-1 ff-inter text-uppercase text-decoration-none">
                                    Apply
                                </Link>
                            </div>
                        )}

                        {user?.email && (
                            <div className="grid-item text-xl-center d-flex align-items-center gap-4">
                                <Link className="fs-12 fw-semiBold text-dark1 ff-inter text-uppercase text-decoration-none">
                                    2
                                    <span className="ps-1">
                                        <img src={message} className="img-fluid" alt="message" />
                                    </span>
                                </Link>
                                <Link className="fs-12 fw-semiBold text-danger ff-inter text-uppercase text-decoration-none">
                                    8
                                    <span className="ps-1">
                                        <img src={notification} className="img-fluid" alt="message" />
                                    </span>
                                </Link>
                                <div className="header-right-catalog me-sm-2">
                                    <div className="dropdown">
                                        <Link
                                            className="btn btn-authInfo is-dropdown-toggle dropdown-toggle d-flex align-items-center text-start gap-1 gap-xxl-1 border-0"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={user?.profilePic ? user?.profilePic : PrifileAvator} alt="user" className="rounded-circle" width={30} height={30} />
                                            <h6 className="user-name fw-semiBold fs-13 ff-inter d-none d-lg-block mb-0">{user?.name}</h6>
                                            <div className="user-img flex-shrink-0">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.9494 3.75H11.8508C11.7761 3.75 11.7058 3.78662 11.6618 3.84668L7.50019 9.58301L3.33856 3.84668C3.29462 3.78662 3.22431 3.75 3.1496 3.75H2.05097C1.95575 3.75 1.90009 3.8584 1.95575 3.93604L7.12079 11.0566C7.30829 11.3145 7.69208 11.3145 7.87812 11.0566L13.0432 3.93604C13.1003 3.8584 13.0446 3.75 12.9494 3.75V3.75Z"
                                                        fill="#1A2227"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                        <div className="notify-dropdown-menu dropdown-menu px-0 py-1">
                                            <ul className="dropdown-list-group list-group list-group-flush px-0 py-0 list-unstyled">
                                                <li className="list-group-item">
                                                    <Link to={"/profile"} className="list-group-item-linkable d-flex flex-wrap align-items-center justify-content-between py-2 px-3">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="me-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M3.44531 18.6164L2.87002 18.446C2.81626 18.6275 2.8513 18.8237 2.96456 18.9754C3.07782 19.127 3.25601 19.2164 3.44531 19.2164V18.6164ZM18.4453 18.6164V19.2164C18.6346 19.2164 18.8128 19.127 18.9261 18.9754C19.0393 18.8237 19.0744 18.6275 19.0206 18.446L18.4453 18.6164ZM14.512 6.11637C14.512 8.08619 12.9151 9.68304 10.9453 9.68304V10.883C13.5779 10.883 15.712 8.74893 15.712 6.11637H14.512ZM10.9453 9.68304C8.9755 9.68304 7.37865 8.08619 7.37865 6.11637H6.17865C6.17865 8.74893 8.31276 10.883 10.9453 10.883V9.68304ZM7.37865 6.11637C7.37865 4.14656 8.9755 2.54971 10.9453 2.54971V1.34971C8.31276 1.34971 6.17865 3.48382 6.17865 6.11637H7.37865ZM10.9453 2.54971C12.9151 2.54971 14.512 4.14656 14.512 6.11637H15.712C15.712 3.48382 13.5779 1.34971 10.9453 1.34971V2.54971ZM4.0206 18.7868C4.95466 15.6337 7.71878 13.383 10.9453 13.383V12.183C7.13315 12.183 3.93907 14.8372 2.87002 18.446L4.0206 18.7868ZM10.9453 13.383C14.1718 13.383 16.936 15.6337 17.87 18.7868L19.0206 18.446C17.9516 14.8372 14.7575 12.183 10.9453 12.183V13.383ZM3.44531 19.2164H18.4453V18.0164H3.44531V19.2164Z"
                                                                    fill="#4D585F"
                                                                />
                                                            </svg>

                                                            <p className=" text-dark2 ff-inter fs-15 fw-medium text-uppercase ls-2 mb-0">Profile</p>
                                                        </div>
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.5234 5.90483L5.62031 0.781396C5.575 0.742334 5.51719 0.720459 5.45625 0.720459H4.07344C3.95781 0.720459 3.90469 0.864209 3.99219 0.939209L9.46406 5.68921H0.320312C0.251562 5.68921 0.195312 5.74546 0.195312 5.81421V6.75171C0.195312 6.82046 0.251562 6.87671 0.320312 6.87671H9.4625L3.99062 11.6267C3.90312 11.7033 3.95625 11.8455 4.07188 11.8455H5.50156C5.53125 11.8455 5.56094 11.8345 5.58281 11.8142L11.5234 6.66108C11.5775 6.61405 11.6209 6.55595 11.6506 6.49072C11.6803 6.42549 11.6957 6.35464 11.6957 6.28296C11.6957 6.21128 11.6803 6.14043 11.6506 6.0752C11.6209 6.00997 11.5775 5.95187 11.5234 5.90483V5.90483Z"
                                                                fill="#969EA3"
                                                            />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li className="list-group-item">
                                                    <Link className="list-group-item-linkable d-flex flex-wrap align-items-center justify-content-between py-2 px-3">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="me-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M19.0703 3.40796H2.82031C2.47461 3.40796 2.19531 3.68726 2.19531 4.03296V16.533C2.19531 16.8787 2.47461 17.158 2.82031 17.158H19.0703C19.416 17.158 19.6953 16.8787 19.6953 16.533V4.03296C19.6953 3.68726 19.416 3.40796 19.0703 3.40796ZM3.60156 4.81421H18.2891V7.15796H3.60156V4.81421ZM18.2891 15.7517H3.60156V8.87671H18.2891V15.7517ZM13.6602 14.5017H16.8828C16.9688 14.5017 17.0391 14.4314 17.0391 14.3455V12.9392C17.0391 12.8533 16.9688 12.783 16.8828 12.783H13.6602C13.5742 12.783 13.5039 12.8533 13.5039 12.9392V14.3455C13.5039 14.4314 13.5742 14.5017 13.6602 14.5017Z"
                                                                    fill="#4D585F"
                                                                />
                                                            </svg>
                                                            <p className=" text-dark2 ff-inter fs-15 fw-medium text-uppercase ls-2 mb-0">Membership</p>
                                                        </div>
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.5234 5.90483L5.62031 0.781396C5.575 0.742334 5.51719 0.720459 5.45625 0.720459H4.07344C3.95781 0.720459 3.90469 0.864209 3.99219 0.939209L9.46406 5.68921H0.320312C0.251562 5.68921 0.195312 5.74546 0.195312 5.81421V6.75171C0.195312 6.82046 0.251562 6.87671 0.320312 6.87671H9.4625L3.99062 11.6267C3.90312 11.7033 3.95625 11.8455 4.07188 11.8455H5.50156C5.53125 11.8455 5.56094 11.8345 5.58281 11.8142L11.5234 6.66108C11.5775 6.61405 11.6209 6.55595 11.6506 6.49072C11.6803 6.42549 11.6957 6.35464 11.6957 6.28296C11.6957 6.21128 11.6803 6.14043 11.6506 6.0752C11.6209 6.00997 11.5775 5.95187 11.5234 5.90483V5.90483Z"
                                                                fill="#969EA3"
                                                            />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li className="list-group-item">
                                                    <Link to="/myitems" className="list-group-item-linkable d-flex flex-wrap align-items-center justify-content-between py-2 px-3">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="me-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M19.0703 8.95483H16.9609V6.73608C16.9609 6.39038 16.6816 6.11108 16.3359 6.11108H10.1836L7.89258 3.91968C7.86343 3.89239 7.82509 3.87705 7.78516 3.87671H2.82031C2.47461 3.87671 2.19531 4.15601 2.19531 4.50171V16.0642C2.19531 16.4099 2.47461 16.6892 2.82031 16.6892H16.4531C16.707 16.6892 16.9375 16.5349 17.0332 16.2986L19.6504 9.81421C19.6797 9.73999 19.6953 9.65991 19.6953 9.57983C19.6953 9.23413 19.416 8.95483 19.0703 8.95483ZM3.60156 5.28296H7.2832L9.61914 7.51733H15.5547V8.95483H5.59375C5.33984 8.95483 5.10938 9.10913 5.01367 9.34546L3.60156 12.8455V5.28296ZM16.0098 15.283H4.05078L6.06836 10.283H18.0293L16.0098 15.283Z"
                                                                    fill="#4D585F"
                                                                />
                                                            </svg>

                                                            <p className=" text-dark2 ff-inter fs-15 fw-medium text-uppercase ls-2 mb-0">My Items</p>
                                                        </div>
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.5234 5.90483L5.62031 0.781396C5.575 0.742334 5.51719 0.720459 5.45625 0.720459H4.07344C3.95781 0.720459 3.90469 0.864209 3.99219 0.939209L9.46406 5.68921H0.320312C0.251562 5.68921 0.195312 5.74546 0.195312 5.81421V6.75171C0.195312 6.82046 0.251562 6.87671 0.320312 6.87671H9.4625L3.99062 11.6267C3.90312 11.7033 3.95625 11.8455 4.07188 11.8455H5.50156C5.53125 11.8455 5.56094 11.8345 5.58281 11.8142L11.5234 6.66108C11.5775 6.61405 11.6209 6.55595 11.6506 6.49072C11.6803 6.42549 11.6957 6.35464 11.6957 6.28296C11.6957 6.21128 11.6803 6.14043 11.6506 6.0752C11.6209 6.00997 11.5775 5.95187 11.5234 5.90483V5.90483Z"
                                                                fill="#969EA3"
                                                            />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li className="list-group-item">
                                                    <Link to="/following" className="list-group-item-linkable d-flex flex-wrap align-items-center justify-content-between py-2 px-3">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="me-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M14.1934 12.8298C14.6661 12.5759 15.2071 12.4314 15.7833 12.4314H15.7852C15.8438 12.4314 15.8711 12.3611 15.8282 12.322C15.229 11.7843 14.5445 11.35 13.8028 11.0369C13.795 11.033 13.7872 11.031 13.7793 11.0271C14.9922 10.1462 15.7813 8.7146 15.7813 7.09937C15.7813 4.42358 13.6172 2.25562 10.9473 2.25562C8.27739 2.25562 6.11528 4.42358 6.11528 7.09937C6.11528 8.7146 6.90435 10.1462 8.11919 11.0271C8.11138 11.031 8.10357 11.033 8.09575 11.0369C7.22271 11.406 6.4395 11.9353 5.76567 12.6111C5.09574 13.2798 4.56238 14.0725 4.19536 14.9451C3.83425 15.7995 3.63937 16.7149 3.62114 17.6423C3.62062 17.6632 3.62428 17.6839 3.6319 17.7033C3.63951 17.7227 3.65094 17.7404 3.6655 17.7554C3.68006 17.7703 3.69747 17.7821 3.71668 17.7902C3.7359 17.7983 3.75654 17.8025 3.77739 17.8025H4.94731C5.0313 17.8025 5.10161 17.7341 5.10356 17.6501C5.14263 16.1423 5.74614 14.7302 6.8145 13.6599C7.91802 12.5525 9.38677 11.9431 10.9493 11.9431C12.0567 11.9431 13.1192 12.2498 14.0352 12.824C14.0587 12.8388 14.0857 12.8471 14.1135 12.8481C14.1413 12.8491 14.1688 12.8428 14.1934 12.8298ZM10.9493 10.4587C10.0547 10.4587 9.21294 10.1091 8.57817 9.47437C8.26586 9.16286 8.01827 8.79264 7.84966 8.38503C7.68105 7.97742 7.59476 7.54047 7.59575 7.09937C7.59575 6.20288 7.94536 5.35913 8.57817 4.72437C9.21099 4.0896 10.0528 3.73999 10.9493 3.73999C11.8458 3.73999 12.6856 4.0896 13.3204 4.72437C13.6327 5.03587 13.8803 5.40609 14.0489 5.8137C14.2175 6.22131 14.3038 6.65826 14.3028 7.09937C14.3028 7.99585 13.9532 8.8396 13.3204 9.47437C12.6856 10.1091 11.8438 10.4587 10.9493 10.4587ZM18.1329 15.1072H16.4922V13.4666C16.4922 13.3806 16.4219 13.3103 16.336 13.3103H15.2422C15.1563 13.3103 15.086 13.3806 15.086 13.4666V15.1072H13.4454C13.3594 15.1072 13.2891 15.1775 13.2891 15.2634V16.3572C13.2891 16.4431 13.3594 16.5134 13.4454 16.5134H15.086V18.1541C15.086 18.24 15.1563 18.3103 15.2422 18.3103H16.336C16.4219 18.3103 16.4922 18.24 16.4922 18.1541V16.5134H18.1329C18.2188 16.5134 18.2891 16.4431 18.2891 16.3572V15.2634C18.2891 15.1775 18.2188 15.1072 18.1329 15.1072Z"
                                                                    fill="#4D585F"
                                                                />
                                                            </svg>

                                                            <p className=" text-dark2 ff-inter fs-15 fw-medium text-uppercase ls-2 mb-0">Following</p>
                                                        </div>
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.5234 5.90483L5.62031 0.781396C5.575 0.742334 5.51719 0.720459 5.45625 0.720459H4.07344C3.95781 0.720459 3.90469 0.864209 3.99219 0.939209L9.46406 5.68921H0.320312C0.251562 5.68921 0.195312 5.74546 0.195312 5.81421V6.75171C0.195312 6.82046 0.251562 6.87671 0.320312 6.87671H9.4625L3.99062 11.6267C3.90312 11.7033 3.95625 11.8455 4.07188 11.8455H5.50156C5.53125 11.8455 5.56094 11.8345 5.58281 11.8142L11.5234 6.66108C11.5775 6.61405 11.6209 6.55595 11.6506 6.49072C11.6803 6.42549 11.6957 6.35464 11.6957 6.28296C11.6957 6.21128 11.6803 6.14043 11.6506 6.0752C11.6209 6.00997 11.5775 5.95187 11.5234 5.90483V5.90483Z"
                                                                fill="#969EA3"
                                                            />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li className="list-group-item" onClick={handleLogout}>
                                                    <Link className="list-group-item-linkable d-flex flex-wrap align-items-center justify-content-between py-2 px-3">
                                                        <div className="d-flex align-items-center">
                                                            <svg className="me-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M17.8969 14.5786H16.5239C16.4301 14.5786 16.3422 14.6197 16.2836 14.6919C16.1469 14.8579 16.0004 15.0181 15.8461 15.1704C15.2151 15.8021 14.4676 16.3056 13.645 16.6529C12.7927 17.0128 11.8767 17.1975 10.9516 17.1958C10.0161 17.1958 9.10981 17.0122 8.25825 16.6529C7.43565 16.3056 6.68814 15.8021 6.05707 15.1704C5.42488 14.5409 4.92078 13.7947 4.5727 12.9732C4.21137 12.1216 4.02973 11.2173 4.02973 10.2818C4.02973 9.34622 4.21333 8.44192 4.5727 7.59036C4.92036 6.7681 5.42036 6.02786 6.05707 5.3931C6.69379 4.75833 7.43403 4.25833 8.25825 3.91067C9.10981 3.5513 10.0161 3.36771 10.9516 3.36771C11.8872 3.36771 12.7934 3.54935 13.645 3.91067C14.4692 4.25833 15.2094 4.75833 15.8461 5.3931C16.0004 5.54739 16.145 5.70755 16.2836 5.87161C16.3422 5.94388 16.4321 5.98489 16.5239 5.98489H17.8969C18.02 5.98489 18.0961 5.84817 18.0278 5.74466C16.5297 3.41653 13.9086 1.87552 10.9301 1.88333C6.25043 1.89505 2.49848 5.69388 2.54536 10.3677C2.59223 14.9673 6.33833 18.6802 10.9516 18.6802C13.9223 18.6802 16.5317 17.1411 18.0278 14.8189C18.0942 14.7154 18.02 14.5786 17.8969 14.5786ZM19.6332 10.1587L16.8618 7.97122C16.7582 7.88919 16.6079 7.96341 16.6079 8.09427V9.57864H10.475C10.3891 9.57864 10.3188 9.64896 10.3188 9.73489V10.8286C10.3188 10.9146 10.3891 10.9849 10.475 10.9849H16.6079V12.4693C16.6079 12.6001 16.7602 12.6743 16.8618 12.5923L19.6332 10.4048C19.6519 10.3902 19.667 10.3715 19.6774 10.3502C19.6878 10.3289 19.6932 10.3055 19.6932 10.2818C19.6932 10.2581 19.6878 10.2346 19.6774 10.2133C19.667 10.192 19.6519 10.1733 19.6332 10.1587V10.1587Z"
                                                                    fill="#4D585F"
                                                                />
                                                            </svg>

                                                            <p className=" text-dark2 ff-inter fs-15 fw-medium text-uppercase ls-2 mb-0">Log Out</p>
                                                        </div>
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.5234 5.90483L5.62031 0.781396C5.575 0.742334 5.51719 0.720459 5.45625 0.720459H4.07344C3.95781 0.720459 3.90469 0.864209 3.99219 0.939209L9.46406 5.68921H0.320312C0.251562 5.68921 0.195312 5.74546 0.195312 5.81421V6.75171C0.195312 6.82046 0.251562 6.87671 0.320312 6.87671H9.4625L3.99062 11.6267C3.90312 11.7033 3.95625 11.8455 4.07188 11.8455H5.50156C5.53125 11.8455 5.56094 11.8345 5.58281 11.8142L11.5234 6.66108C11.5775 6.61405 11.6209 6.55595 11.6506 6.49072C11.6803 6.42549 11.6957 6.35464 11.6957 6.28296C11.6957 6.21128 11.6803 6.14043 11.6506 6.0752C11.6209 6.00997 11.5775 5.95187 11.5234 5.90483V5.90483Z"
                                                                fill="#969EA3"
                                                            />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* / Top header */}

            {/* Header  */}
            <div className="navigation py-3 py-md-4 bg-white">
                <div className="container">
                    <div className="nav-grid-container d-flex d-md-block align-items-center justify-content-between gap-3">
                        <button className="btn btn-menu-toggle btn-default d-flex d-md-none align-items-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff5f50" className="bi bi-list" viewBox="0 0 16 16">
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </button>
                        <a href="index.html" className="brand-logo logo is-active-mobile d-md-none">
                            <img src={Logo} alt="img" className="img-fluid" />
                        </a>
                        <div className="navbar px-3 py-4 py-md-0 px-md-0">
                            <div className="navbar-header d-flex d-md-none align-items-center justify-content-between mb-4">
                                <NavLink to="/" className="brand-logo logo is-active-mobile d-md-none text-decoration-none">
                                    <img src={Logo} alt="img" className="img-fluid" />
                                </NavLink>
                                <button className="btn btn-menu-toggle btn-default d-flex d-md-none align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff5f50" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                            <ul id="menu" className="d-md-flex align-items-center justify-content-between m-0 p-0 gap-5 w-100">
                                <li>
                                    <Link to="/allevents" className=" ff-inter navLink">
                                        What's happening?
                                    </Link>
                                </li>
                                <li>
                                    <Link className="menuLink ff-inter navLink">Recommendations</Link>
                                </li>
                                <li className="d-none d-md-block">
                                    <NavLink to="/" className="logo text-decoration-none">
                                        <img src={Logo} alt="img" className="img-fluid" />
                                    </NavLink>
                                </li>
                                <li>
                                    <Link className="menuLink ff-inter navLink">Trading Post</Link>
                                </li>
                                <li>
                                    <Link className="menuLink ff-inter navLink">Challenges</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* / Header  */}

            {/* <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/feature">Feature</Link>
        </nav> */}
        </div>
    );
};

export default Header;
