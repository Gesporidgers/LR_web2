import { Grid, Text, Heading, Box, TextField, Link, Button, Separator, Dialog } from '@radix-ui/themes';
import axios from 'axios';
import { Formik } from 'formik';
export default function LoginForm() {

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => axios.post('api/Auth/login', { id: 'str', name: 'nm', email: values.email, password: values.password })
                .then((resp) => {
                    localStorage.setItem('token', resp.data.token)
                    localStorage.setItem('userID',resp.data.id)
                    localStorage.setItem('exptime',resp.data.expirationTime)
                    console.log(resp.data)
                })
            }
        >
            {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) =>
                <form onSubmit={handleSubmit}>
                    <Heading as='h2'>Login</Heading>
                    <Box maxWidth="250px" style={{
                        margin: "5pt auto"
                    }}>
                        <TextField.Root size="2" radius='full' placeholder="Email" type='email' name='email' value={values.email} onChange={handleChange} />
                    </Box>
                    <Box maxWidth="250px" style={{
                        margin: "5pt auto"
                    }}>
                        <TextField.Root size="2" radius='full' placeholder="Password" name='password' type='password' value={values.password} onChange={handleChange} />
                    </Box>

                    <></>
                    <Button radius='full' type='submit' style={{ padding: "0pt 7%", marginLeft: "10%" }}>Войти</Button>
                    <br />
                    <Text style={{ paddingRight: '5px' }}>Нет аккаунта?</Text>
                    <Dialog.Root>
                        <Dialog.Trigger><Link>Зарегистрируйтесь</Link></Dialog.Trigger>
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
                                    <Button radius='full'>Регистрация</Button>
                                </Dialog.Close>
                                <Dialog.Close>
                                    <Button radius='full' variant='soft'>Закрыть</Button>
                                </Dialog.Close>
                            </Grid>

                        </Dialog.Content>

                    </Dialog.Root>
                </form>
            }

        </Formik>

    )

}
