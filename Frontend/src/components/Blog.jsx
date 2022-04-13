import React from "react";
import {Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Placeholder } from "react-bootstrap";
import { Figure } from "react-bootstrap";

function Blog() {
    return(
        <div>
            <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/envolveYT.png" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/envolveYT.png" />
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
            </div>

            <Figure>
            <Figure.Image
                // width={171}
                // height={180}
                // alt="171x180"
                src="/images/envolveYT.png"
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
            </Figure>
        </div>
    )
}

export default Blog;