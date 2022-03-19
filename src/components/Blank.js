import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components'
import Container from 'react-bootstrap/Container';


const ImgContainer = styled.div`
    margin-top: 40vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const Text = styled.span`
    font-size: 30px;
    color: #aaa;
    font-weight: 300;
`

const Img = styled.img`
    height: 100px;
    background-repeat: no-repeat;
`

export default function Blank() {
    return (
        <Container>
            <ImgContainer>
                <Text>Nothing to show here</Text>
                <Img src="https://i.imgur.com/e0PWjtf.png" />
            </ImgContainer>
        </Container>
    )
}
