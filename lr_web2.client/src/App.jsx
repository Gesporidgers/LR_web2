
import { Grid, Text, Heading, Box, TextField, Link, Button, Separator, Dialog } from '@radix-ui/themes';
import "./App.css"
import MainPage from './Pages/MainPage';
import Catalog from './Pages/Cataog';
import Buy from './Pages/buy';
import About from './Pages/about';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TravelPage from './Pages/TravePage';
import Contact from './Pages/contact';
import LoginForm from './assets/loginform';
import Cabinet from './assets/cabinet';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: 'catalog',
        element: <Catalog />,
    },
    {
        path: 'buy',
        element: <Buy />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'catalog/:id',
        element: <TravelPage />
    },
    {
        path: 'contact',
        element: <Contact />,
    }
])

function App() {
    var token = localStorage.getItem('token')
    console.log(token)
    var userID = localStorage.getItem('userID')
    
    return (
        <>
            <Grid columns="3" gap="1" width="auto" >
                <img src="/logo.svg" alt="logo" width="100%" height='100%' style={{ display: 'block', objectFit: 'contain' }} />

                <Heading as="h1" align="center" style={{
                    margin: "auto", fontSize: "36pt"
                }}>Золотая середина</Heading>

                <Box style={{
                    backgroundColor: "lightgrey",
                    paddingBlock: "3pt",
                    margin: "0 2rem",
                    textAlign: "center",
                    borderRadius: "10px"
                }
                }>
                    {token?<Cabinet userID={userID}/>:<LoginForm/>}

                </Box>

            </Grid>
            <Separator my="3" size="4" />
            <RouterProvider router={router} />
            <footer>&copy; Все права защищены</footer>
        </>


    );
}

export default App;