import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from './components/Header';
import List from './components/List';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blank from './components/Blank';
import Loading from './components/Loading'
import Footer from './components/Footer';
import styled from 'styled-components';

const TopButton = styled.div`
    cursor: pointer;
    background-color: #4973ff;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 4px;
    position: fixed;
    bottom: 50px;
    right: 30px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    .bi-arrow-up {
        transform: scale(1.3);
        color: #fff;
        
    }
    

`

function App() {
    const [goToTop, setGoToTop] = useState(false)
    const [loading, setLoading] = useState(false)
    const [seiyuuList, setSeiyuuList] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(!loading)
        fetchSeiyuu(search)
    }

    const fetchSeiyuu = async (query) => {
        try {
            const temp = await fetch(`https://api.jikan.moe/v4/people/?q=${query}`)
                .then(res => res.json());
            setSeiyuuList(temp.data)
            setLoading(false)
        } catch (e) {
            console.log('error')
        }
    }

    const handleGoToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setGoToTop(true)
            } else {
                setGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    return (
        <div className="App">
            <Header />
            <SearchBar
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
            />
            {seiyuuList.length == 0
                ? <Blank />
                : (loading ? <Loading /> : <List seiyuuList={seiyuuList} loading={loading} />)
            }

            {goToTop && (
                <TopButton onClick={handleGoToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                    </svg>
                </TopButton>
            )}

            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
