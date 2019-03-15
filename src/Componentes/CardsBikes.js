import React,{Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class CardsBikes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.bikess.picture} />
                    <CardBody>
                        <CardTitle>{this.props.bikess.title}</CardTitle>
                        <CardSubtitle>{this.props.bikess.subtitle}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Rentar</Button>
                    </CardBody>
                </Card>
            </div>
        );
    };
}

export default CardsBikes;