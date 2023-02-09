import React, { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import MyProfileModal from "../myProfileModal/MyProfileModal";
import ProfileInformation from "../profileInformation/ProfileInformation";
import Security from "../security/Security";
import "./ProfileTab.scss";

const ProfileTab = () => {

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  
  return (
      <div className="profileTab">
          <Container>
              {/* <Row> */}
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                      <Col md={3}>
                          <Nav variant="pills" className="flex-column tab-nav">
                              <Nav.Item>
                                  <Nav.Link eventKey="first" className="tab-nav-link">
                                      <span>Profile information</span>
                                      <span>
                                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M14.9727 6.52734L7.59375 0.123047C7.53711 0.0742186 7.46484 0.046875 7.38867 0.046875H5.66016C5.51563 0.046875 5.44922 0.226562 5.55859 0.320312L12.3984 6.25781H0.96875C0.882813 6.25781 0.8125 6.32812 0.8125 6.41406V7.58594C0.8125 7.67188 0.882813 7.74219 0.96875 7.74219H12.3965L5.55664 13.6797C5.44727 13.7754 5.51367 13.9531 5.6582 13.9531H7.44531C7.48242 13.9531 7.51953 13.9395 7.54688 13.9141L14.9727 7.47266C15.0403 7.41386 15.0945 7.34124 15.1316 7.2597C15.1688 7.17816 15.188 7.0896 15.188 7C15.188 6.9104 15.1688 6.82184 15.1316 6.7403C15.0945 6.65876 15.0403 6.58614 14.9727 6.52734V6.52734Z"
                                                  fill="#969EA3"
                                              />
                                          </svg>
                                      </span>
                                  </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="second" className="tab-nav-link">
                                      <span>Interests</span>
                                      <span>
                                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M14.9727 6.52734L7.59375 0.123047C7.53711 0.0742186 7.46484 0.046875 7.38867 0.046875H5.66016C5.51563 0.046875 5.44922 0.226562 5.55859 0.320312L12.3984 6.25781H0.96875C0.882813 6.25781 0.8125 6.32812 0.8125 6.41406V7.58594C0.8125 7.67188 0.882813 7.74219 0.96875 7.74219H12.3965L5.55664 13.6797C5.44727 13.7754 5.51367 13.9531 5.6582 13.9531H7.44531C7.48242 13.9531 7.51953 13.9395 7.54688 13.9141L14.9727 7.47266C15.0403 7.41386 15.0945 7.34124 15.1316 7.2597C15.1688 7.17816 15.188 7.0896 15.188 7C15.188 6.9104 15.1688 6.82184 15.1316 6.7403C15.0945 6.65876 15.0403 6.58614 14.9727 6.52734V6.52734Z"
                                                  fill="#969EA3"
                                              />
                                          </svg>
                                      </span>
                                  </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="third" className="tab-nav-link">
                                      <span>Login and security</span>
                                      <span>
                                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M14.9727 6.52734L7.59375 0.123047C7.53711 0.0742186 7.46484 0.046875 7.38867 0.046875H5.66016C5.51563 0.046875 5.44922 0.226562 5.55859 0.320312L12.3984 6.25781H0.96875C0.882813 6.25781 0.8125 6.32812 0.8125 6.41406V7.58594C0.8125 7.67188 0.882813 7.74219 0.96875 7.74219H12.3965L5.55664 13.6797C5.44727 13.7754 5.51367 13.9531 5.6582 13.9531H7.44531C7.48242 13.9531 7.51953 13.9395 7.54688 13.9141L14.9727 7.47266C15.0403 7.41386 15.0945 7.34124 15.1316 7.2597C15.1688 7.17816 15.188 7.0896 15.188 7C15.188 6.9104 15.1688 6.82184 15.1316 6.7403C15.0945 6.65876 15.0403 6.58614 14.9727 6.52734V6.52734Z"
                                                  fill="#969EA3"
                                              />
                                          </svg>
                                      </span>
                                  </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="fourth" className="tab-nav-link">
                                      <span>Notifications settings</span>
                                      <span>
                                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M14.9727 6.52734L7.59375 0.123047C7.53711 0.0742186 7.46484 0.046875 7.38867 0.046875H5.66016C5.51563 0.046875 5.44922 0.226562 5.55859 0.320312L12.3984 6.25781H0.96875C0.882813 6.25781 0.8125 6.32812 0.8125 6.41406V7.58594C0.8125 7.67188 0.882813 7.74219 0.96875 7.74219H12.3965L5.55664 13.6797C5.44727 13.7754 5.51367 13.9531 5.6582 13.9531H7.44531C7.48242 13.9531 7.51953 13.9395 7.54688 13.9141L14.9727 7.47266C15.0403 7.41386 15.0945 7.34124 15.1316 7.2597C15.1688 7.17816 15.188 7.0896 15.188 7C15.188 6.9104 15.1688 6.82184 15.1316 6.7403C15.0945 6.65876 15.0403 6.58614 14.9727 6.52734V6.52734Z"
                                                  fill="#969EA3"
                                              />
                                          </svg>
                                      </span>
                                  </Nav.Link>
                              </Nav.Item>
                          </Nav>
                          <div className="text-center mt-4">
                              <MyProfileModal show={show} handleClose={handleClose} handleShow={handleShow} />
                          </div>
                      </Col>

                      <Col md={{ span: 6, offset: 1 }}>
                          <div></div>
                          <Tab.Content>
                              <Tab.Pane eventKey="first">
                                  <ProfileInformation handleShow={handleShow} />
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                  <h3>This Feature Not Added Yet.</h3>
                              </Tab.Pane>
                              <Tab.Pane eventKey="third">
                                  <Security />
                              </Tab.Pane>
                              <Tab.Pane eventKey="fourth">
                                  <h3>This Feature Not Added Yet.</h3>
                              </Tab.Pane>
                          </Tab.Content>
                      </Col>
                  </Row>
              </Tab.Container>
              {/* </Row> */}
          </Container>
      </div>
  );
};

export default ProfileTab;
