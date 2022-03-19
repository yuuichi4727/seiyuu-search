import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import Card from './Card';


const ListContainer = styled.div`
    margin-top: 1.5rem;
`

export default function List({ seiyuuList }) {

    return (
        <Container>
            <ListContainer>
                <Row >
                    {seiyuuList.map((seiyuu, index) => (
                        <Card key={index} seiyuu={seiyuu}/>
                    ))}
                </Row>
            </ListContainer>
        </Container>
    )
}
