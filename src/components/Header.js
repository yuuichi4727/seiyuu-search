import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const NavbarContainer = styled.div`
    padding: 50 0;

  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Logo = styled.img`
    height: 50%;
    position: relative;
    top: -11px;
`


const Title = styled.h1`
    color: #AAA;
    font-size: 36px;
    font-weight: 400;
`

const Strong = styled.span`
    color: #4973ff;
`

export default function Header() {
    return (
        <Container>
            <NavbarContainer>
                <Logo src="https://stickershop.line-scdn.net/stickershop/v1/sticker/15086610/android/sticker.png" />
                <Title> The<Strong>Pengus.</Strong>Database</Title>
            </NavbarContainer>
        </Container>
    )
}
