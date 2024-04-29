import UndecidedImage from '../Images/Undecided.jpg';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap';

export default function Help() {

    return (
        <div className='container'>
            <h1>CAN'T DECIDE ???</h1>
            <Card
                style={{
                    width: '25rem'
                }}
            >
                <img
                    alt="Confused woman"
                    src={UndecidedImage}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        So many options, we know
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        You can never go wrong with PIZZA
                    </CardSubtitle>
                    <CardText>
                        Hot, Fresh, Chessy pizza with all the toppings.
                    </CardText>
                    <Button>
                        Get your pizza here
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
