
import { Grid, Text, Heading, Box, TextField, Link, Button, Separator, Dialog } from '@radix-ui/themes';
import "./App.css"
import MainPage from './Pages/MainPage';
import Catalog from './Pages/Cataog';
import Buy from './Pages/buy';
import About from './Pages/about';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TravelPage from './Pages/TravePage';
import Contact from './Pages/contact';

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
        element: <Contact/>,
    }
])

function App() {
    return (
        <>
            <Grid columns="3" gap="1" width="auto" >
                <img src="/logo.svg" alt="logo" width="100%" height='100%' style={{ display: 'block', objectFit: 'contain' }} />

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

                    <Button radius='full' variant='outline' onClick={(event) => event.preventDefault()}>Забыли пароль</Button>
                    <Button radius='full' onClick={(event) => event.preventDefault()} style={{ padding: "0pt 7%", marginLeft: "10%" }}>Войти</Button>
                    <br />
                    <Text>Нет аккаунта?</Text>
                    <Dialog.Root>
                        <Dialog.Trigger><a className='btn-reg'>Зарегистрируйтесь</a></Dialog.Trigger>
                        <Dialog.Content maxWidth='450px'>
                            <Dialog.Title>Регистрация</Dialog.Title>

                            <Box maxWidth="250px" style={{
                                margin: "5pt auto"
                            }}>
                                <TextField.Root size="2" radius='full' placeholder="Имя" type='text' />
                            </Box>
                            <Box maxWidth="250px" style={{
                                margin: "5pt auto"
                            }}>
                                <TextField.Root size="2" radius='full' placeholder="Email" type='email' />
                            </Box>
                            <Box maxWidth="250px" style={{
                                margin: "5pt auto"
                            }}>
                                <TextField.Root size="2" radius='full' placeholder="Пароль" type='password' />
                            </Box>
                            <Grid columns='2' gap='2'>
                                <Dialog.Close>
                                    <Button>Регистрация</Button>
                                </Dialog.Close>
                                <Dialog.Close>
                                    <Button variant='soft'>Закрыть</Button>
                                </Dialog.Close>
                            </Grid>

                        </Dialog.Content>

                    </Dialog.Root>


                </form>

            </Grid>
            <Separator my="3" size="4" />
            <RouterProvider router={router} />
            <footer>&copy; Все права защищены</footer>
        </>


    );
}

export default App;