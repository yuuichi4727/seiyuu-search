import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const FooterContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #AAA;
    font-weight: 200;

`


export default function Footer() {
    return (
        <Container>
            <FooterContainer>
                All the information is provided by Jikan API.
            </FooterContainer>

        </Container>
    )
}
