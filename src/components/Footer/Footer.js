import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import social from '../../assets/images/social1.svg'
import social2 from '../../assets/images/social2.svg'
import social3 from '../../assets/images/social3.svg'
import social4 from '../../assets/images/social4.svg'
const Footer = () => {
  return (
    <div>

        
            <div className="footer bg-dark pt-5">
                <div className="footer-top">
                    <div className="container py-5">

                        <div className="row footer-grid">
                            <div className="col-6 col-xl-3 col-md-3 grid-item">
                                <div className="footer-widget mb-4 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="200ms">
                                    <h6 className="text-white mb-4 fs-24 fw-semiBold">Global Life</h6>
                                    <ul className="list-unstyled mb-0">
                                      <li className="mb-2"><Link to="/">About</Link> </li>
                                      <li className="mb-2"><Link to="/">career</Link> </li>
                                      <li className="mb-2"><Link to="/">Contact</Link> </li>
                                      <li className="mb-2"><Link to="/">Terms & Conditions</Link> </li>
                                      <li className="mb-2"><Link to="/">Privacy Policy</Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-xl-3 col-md-4 grid-item">
                                <div className="footer-widget mb-4 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="300ms">
                                    <h6 className="text-white mb-4 fs-24 fw-semiBold">Explore</h6>
                                    <ul className="list-unstyled mb-0">
                                      <li className="mb-2"><Link to="/">What's happening?</Link> </li>
                                      <li className="mb-2" ><Link to="/">Recommendations</Link> </li>
                                        <li className="mb-2"><Link to="/">Trading Post</Link> </li>
                                        <li className="mb-2"><Link to="/">Challenges</Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-xl-3 col-md-4 grid-item">
                                <div className="footer-widget mb-4 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="400ms">
                                    <h6 className="text-white mb-4 fs-24 fw-semiBold">Stay Connected</h6>
                                    <ul className="list-unstyled mb-0">
                                      <li className="mb-2"><span><img src={social} className="img-fluid pe-2" alt="social" /></span><Link to="/"> Facebook </Link> </li>
                                      <li className="mb-2"><span><img src={social2} className="img-fluid pe-2" alt="social" /></span><Link to="/"> Twitter </Link> </li>
                                      <li className="mb-2"><span><img src={social3} className="img-fluid pe-2" alt="social" /></span><Link to="/"> Instagram </Link> </li>
                                      <li className="mb-2"><span><img src={social4} className="img-fluid pe-2" alt="social" /></span><Link to="/"> LinkedIn </Link> </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-xl-3 col-md-4 grid-item">
                                <div className="footer-widget mb-4 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="500ms">
                                    <h6 className="text-white mb-5 fs-24 fw-semiBold">Newsletter Signup</h6>
                                    <ul className="list-unstyled mb-0 NewsletterWrapper">
                                        <li className="mb-1">
                                            <input type="email" placeholder="Email" className="emailControl ff-inter text-white" />
                                        </li>
                                    </ul>
                                    <button type="subscribe" className="subscribe d-flex align-items-center justify-content-center mt-4 ls-1 text-white fs-12 fw-semiBold ff-inter text-uppercase border-0">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom py-4">
                    <div className="container">

                        <p className="mb-0 ff-14 fw-medium text-dark4 text-center  mb-4 mb-xl-0 text-center ff-inter w-100 d-flex justify-content-center">
                            <small>© 2022 Global Life. All rights reserved.</small>
                        </p>


                    </div>
                </div>
        </div>
</div >

  )
}

export default Footer