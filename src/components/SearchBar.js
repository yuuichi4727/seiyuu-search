import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import styled, { keyframes } from 'styled-components';


const FormStyled = styled.form`
    display: flex;
`

const InputStyled = styled.input`
  width: 100%;
  padding: 10px 0 10px 15px;
  font-weight: 400;
  color: #377D6A;
  background: #efefef;
  border: 0;
  /* border-radius: 3px; */
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  outline: 0;
  transition: all .3s ease-in-out;

  
`
const animate = keyframes`
0% {
  transform: translate(-50%, -75%) rotate(0deg);
 }

 100% {
  transform: translate(-50%, -75%) rotate(360deg);
 }
`

const Liquid = styled.div`
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 200px;
    background: #4973ff;
    transition: .5s;

    &::after, &::before {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #fff;
    }

    &::before {
    border-radius: 45%;
    background: rgba(239, 239, 239, 1);
    animation: ${animate} 5s linear infinite;
    }

    &::after {
    border-radius: 40%;
    background: rgba(239, 239, 239, .5);
    animation: ${animate} 10s linear infinite;
    }
`

const ButtonStyled = styled.button`
    position: relative;
    padding: 19px 36px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    /* border-radius: 3px; */
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: none;

    span {
    position: relative;
    color: #fff;
    letter-spacing: 8px;
    z-index: 1;
    }

    &:hover ${Liquid} {
        top: -120px;
    }
`



export default function SearchBar(props) {
    return (
        <Container>
            <FormStyled onSubmit={props.handleSearch} >
                <InputStyled
                    id="search"
                    placeholder="Input your favorite Seiyuu here"
                    value={props.search}
                    onChange={e => props.setSearch(e.target.value)} />
                <ButtonStyled onClick={props.handleSearch}>
                    <span>Search</span>
                    <Liquid />
                </ButtonStyled>
            </FormStyled>
        </Container>
    )
}
