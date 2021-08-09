import {Container, Row, Carousel} from 'react-bootstrap';
import Technology from "./Technology";
import technologiesList from "../data/technologiesList.json";
import {useState} from "react";

const Technologies = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container>
            <Row>
                {
                    technologiesList.map(
                        data => (
                            <Technology technology={data} key={data.id}/>
                        )
                    )
                }
            </Row>
        </Container>
    )
}

export default Technologies