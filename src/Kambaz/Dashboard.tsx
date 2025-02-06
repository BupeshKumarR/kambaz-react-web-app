import { Link } from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/4208/Home">
                                <Card.Img variant="top" src="/images/algo.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS4208 Intro to Algorithms</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/3141/Home">
                                <Card.Img variant="top" src="/images/dbms.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3141 Intro to Database Management</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Analyst</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/5101/Home">
                                <Card.Img variant="top" src="/images/python.jpeg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5101 Python</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Analyst</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/6500/Home">
                                <Card.Img variant="top" src="/images/stats.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">STAT6500 Advanced Statistics</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Analyst</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/2101/Home">
                                <Card.Img variant="top" src="/images/pshycho.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">PSYCH2101 - Introduction to Psychology</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Psychology</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kambaz/Courses/2001/Home">
                                <Card.Img variant="top" src="/images/microecon.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">ECON2001 Principles of Microeconomics</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Economics</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
}
