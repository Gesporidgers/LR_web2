
import { Grid, Text, Heading, Box, TextField, Link, Button, Separator, TabNav, Card, ScrollArea } from '@radix-ui/themes';
import "./App.css"
import MainPage from './Pages/MainPage';
import Catalog from './Pages/Cataog';
import Buy from './Pages/buy';
import About from './Pages/about';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TravelPage from './Pages/TravePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: 'catalog',
        element: <Catalog/>,
    },
    {
        path: 'buy',
        element: <Buy/>,
    },
    {
        path: 'about',
        element: <About/>,
    },
    {
        path: 'catalog/:id',
        element: <TravelPage/>
    }
])

function App() {
    return (
        <>
            <Grid columns="3" gap="1" width="auto" >
                <img src="/logo.svg" alt="logo" width="100%" height='100%' style={{display:'block', objectFit:'contain'}}/>
                
                <Heading as="h1" align="center" style={{
                    margin: "auto", fontSize: "36pt"
                }}>Золотая середина</Heading>

                <form action="" method="post" style={{
                    backgroundColor: "lightgrey",
                    paddingBlock: "3pt",
                    margin: "0 2rem",
                    textAlign: "center",
                    borderRadius: "10px"
                }
                }>
                    <Heading as='h2'>Login</Heading>
                    <Box maxWidth="250px" style={{
                        margin: "5pt auto"
                    }}>
                        <TextField.Root size="2" radius='full' placeholder="Email" type='email' />
                    </Box>
                    <Box maxWidth="250px" style={{
                        margin: "5pt auto"
                    }}>
                        <TextField.Root size="2" radius='full' placeholder="Password" type='password' />
                    </Box>

                    <Button radius='full' variant='outline' href=''>Забыли пароль</Button>
                    <Button radius='full' style={{ padding: "0pt 7%", marginLeft: "10%" }}>Войти</Button>
                    <br />
                    <Text>Нет аккаунта? <Link>Зарегистрируйтесь</Link> </Text>
                    
                </form>

            </Grid>
            <Separator my="3" size="4" />
            <RouterProvider router={router}/>
        </>


    );
}

export default App;