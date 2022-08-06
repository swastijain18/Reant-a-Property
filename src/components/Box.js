import React from "react";
import "../Styles/Box.css"


import { Card, Row, Col } from "react-bootstrap"
import { BiBed, BiBath, BiArea, BiHeart } from "react-icons/bi"


function Box(props) {
    return (
        <div>
            <Card className="box-container">
                <Card.Img variant="top" src={props.img} height={200} />
                <Card.Body style={{ padding: "1.5rem" }}>

                    <Row>
                        <Col>
                            <Card.Title style={{ color: "#7065EF" }}>{props.price}/month</Card.Title>
                        </Col>
                        <Col ><BiHeart style={{ float: "right" }} /></Col>
                    </Row>

                    <Row>
                        <Card.Title>{props.name}</Card.Title>
                    </Row>
                    <Row style={{ color: "#7e7c7f" }}>
                        <Card.Text>{props.addr}</Card.Text>
                    </Row>
                    <hr />


                    <Row style={{ color: "#7e7c7f", fontSize: "13px" }}>
                        <Col><BiBed />{props.noOfBeds} Beds</Col>
                        <Col><BiBath />{props.noOfBathroom} Bathroom</Col>
                        <Col><BiArea />{props.area} mSq.</Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Box;