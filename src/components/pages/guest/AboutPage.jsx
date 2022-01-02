import React from 'react'
import {Col, Container, Jumbotron, Row} from "react-bootstrap"
import NavigationBar from "../../common/NavigationBar"
import Footer from "../../common/Footer"

function AboutPage() {
    return (
        <div>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={{marginTop: "20px"}}>
                        <Jumbotron className="bg-dark text-white">
                            ABOUT PAGE
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );

}

export default AboutPage