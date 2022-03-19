import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
    content: " ";
    display: block;
    width: 80px;
    height: 80px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #4973ff transparent #4973ff transparent;
    animation: ${animate} 1.2s linear infinite; 
    }
}
`

export default function Loading() {
    return (
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh'}}>
            <Loader /> 
        </Container>
    )
}
