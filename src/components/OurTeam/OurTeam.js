import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import team1 from '../../img/team-1.jpg'
import team2 from '../../img/team-2.jpg'
import team3 from '../../img/team-3.jpg'
import feature1 from '../../img/feature-1.jpg'
import feature2 from '../../img/feature-2.jpg'
import feature3 from '../../img/feature-3.jpg'
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div className='container '>
            <h3 className='bg-success p-2 m-2 text-info fw-bold'>Why Travel with Sun Tour India?</h3>
            <Row xs={1} md={3} className='p-3'>
                <Col>
                    <Card className='img-guider'>
                        <Card.Img className='img-guider' variant="top" src={feature1} />
                        <Card.Body>
                            <Card.Title>Merrie Lewis:
                                Tour Guide</Card.Title>
                            <Card.Text>
                                2000+ Our Worldwide Guide
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='img-guider'>
                        <Card.Img className='img-guider' variant="top" src={feature2} />
                        <Card.Body>
                            <Card.Title>Parks Missie:
                                Tour Guide</Card.Title>
                            <Card.Text>
                                100% Trusted Tour Agency
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='img-guider'>
                        <Card.Img className='img-guider' variant="top" src={feature3} />
                        <Card.Body>
                            <Card.Title>Mariana Buenos:
                                Tour Guide</Card.Title>
                            <Card.Text>
                                12+ Years of Travel Experience
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h3 className='bg-success p-2 m-2 text-info fw-bold'>Our Team Members</h3>
            <Row xs={1} md={3} className='p-3'>
                <Col>
                    <Card className='img-guider'>
                        <Card.Img className='img-guider' variant="top" src={team1} />
                        <Card.Body>
                            <Card.Title>Merrie Lewis:
                                Tour Guide</Card.Title>
                            <Card.Text>
                            Employees were also enthusiastic about the opportunities for relatively quick advancement in tourism. If you work hard, they said, you can move up to the next level faster than you could in many other sectors.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='img-guider'>
                        <Card.Img className='img-guider' variant="top" src={team2} />
                        <Card.Body>
                            <Card.Title>Parks Missie:
                                Tour Guide</Card.Title>
                            <Card.Text>
                            Another positive was the fact that your tourism skills are transferable all around the world. Once you have experience, employees said, you can work in many different parts of the world.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='img-guider'>
                        <Card.Img className='img-guider' variant="top" src={team3} />
                        <Card.Body>
                            <Card.Title>Mariana Buenos:
                                Tour Guide</Card.Title>
                            <Card.Text>
                            Many tourism employees were happy to supplement their income with tips. They enjoyed being able to influence their tip amount by providing good service.
                            different parts of the world
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OurTeam;