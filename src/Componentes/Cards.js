import React,{Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class CardsComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.carss.picture} />
                    <CardBody>
                        <CardTitle>{this.props.carss.title}</CardTitle>
                        <CardSubtitle>{this.props.carss.subtitle}</CardSubtitle>
                        <CardText></CardText>
                        <Button>Rentar</Button>
                    </CardBody>
                </Card>
            </div>
        );
    };
}

export default CardsComponent;