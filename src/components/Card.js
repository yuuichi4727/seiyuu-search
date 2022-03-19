import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components'
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CardContainer = styled.div`
    background-color: #efefef;
    border-radius: 3px;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    
    &:hover {
        background-color: #E8F0FE;
    }
`

const fly1 = keyframes`
from {
  transform: translateY(0.1em);
 }

 to {
  transform: translateY(-0.1em);
 }

`

const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 150px;
    flex: 1;
`

const CardImgContainer = styled.div`
    width: 150px;
    height: 150px;
`

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #fff;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    flex: 1;
    justify-content: center;
`

const NameJP = styled.h2`
    font-family:  'Zen Maru Gothic', sans-serif;
    font-size: 25px;
    font-weight: bold;
`
const NameRomaji = styled.span`
    margin-bottom: 6px;
    color: #377D6A;
    font-style: italic;
    font-weight: 300;
`
const Birthday = styled.div`
    font-weight: 400;
`

const IconWrapper = styled.div``

const ButtonDetail = styled.button`
    margin-top: 16px;
    font-size: 20px;
    background: #4973ff;
    color: white;
    padding: 0.5em 2.5em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 3px;
    overflow: hidden;
    transition: all 0.2s;

    span {
        display: block;
        margin-left: 1.5em;
        transition: all 0.3s ease-in-out;
        font-weight: 300;
    }  
 
    svg {
        display: block;
        transform-origin: center center;
        transition: transform 0.3s ease-in-out;
    }

    &:hover ${IconWrapper} {
        animation: ${fly1} 0.6s ease-in-out infinite alternate;
    }

    &:hover svg {
        transform: translateX(4.3em)  scale(1.5);
    }

    &:hover span {
        transform: translateX(9em);
    }

    &:active {
        transform: scale(0.95);
    }
 `

const NameSocial = styled.div`
    display: flex;
    align-items: center;
`

const Twitter = styled.div`
    transform: scale(1.4);
    position: relative;
    top: -5px;
    left: 13px;
    color: #4973ff;
    cursor: pointer;
`





export default function Card({ seiyuu }) {
    const [twitterAccount, setTwitterAccount] = useState()
    
    AOS.init({
        duration: 2000
    })



    const handleLeave = (url) => {
        if (url !== 'No Data') {
            window.open(url)
        } else {
            toast.error('This person does not have Twitter', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }



    const getTwitter = (seiyuu) => {
        if (seiyuu.about !== null) {
            const twitterSplit = seiyuu.about.split(" ").filter(filterTwitter)

            if (twitterSplit.length !== 0) {
                const twitterSplitNew = twitterSplit.toString().split("\n")

                return `https://twitter.com/${twitterSplitNew[0].slice(1)}`
            } else {
                return 'No Data'
            }
        } else {
            return 'No Data'
        }
    }

    const filterTwitter = (item) => {
        return item.indexOf('@') === 0
    }

    useEffect(() => {
        setTwitterAccount(getTwitter(seiyuu))
        
    }, [seiyuu])




    return (
        <Col md={6} lg={3} className="mb-4">
            <CardContainer data-aos="fade-up">
                <CardTop>
                    <CardImgContainer>
                        <CardImg src={seiyuu.images.jpg.image_url}></CardImg>
                    </CardImgContainer>
                </CardTop>

                <CardInfo>
                    <NameSocial>
                        <NameJP>{seiyuu.family_name}{seiyuu.given_name}</NameJP>
                        <Twitter onClick={() => handleLeave(twitterAccount)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </Twitter>
                        
                    </NameSocial>
                    <NameRomaji>{seiyuu.name}</NameRomaji>
                    <Birthday>Birthday: {seiyuu.birthday === null ? 'Unknown' : (new Date(seiyuu.birthday)).toLocaleString().split(',')[0]} </Birthday>
                    <ButtonDetail onClick={() => handleLeave(seiyuu.url)}>
                        <IconWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </IconWrapper>
                        <span>View Detail</span>
                    </ButtonDetail>
                </CardInfo>
            </CardContainer>
        </Col>
    )
}
