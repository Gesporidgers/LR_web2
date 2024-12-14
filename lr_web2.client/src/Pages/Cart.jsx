import { AlertDialog, Button, Grid, Heading, Strong, Table, Text } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Cart() {

    const { userid: user } = useParams();
    const [cart, setCart] = useState([]);
    console.log(user)
    useEffect(() => {
        axios.get('/api/Orders', user).then((resp) => setCart(resp.data));

    }, [setCart])

    const tt =
        <>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Название тура</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Цена</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cart.map((i =>
                        <Table.Row>
                            <Table.Cell>{getName(i.travelID)}</Table.Cell>
                            <Table.Cell>{i.travelPrice}</Table.Cell>
                        </Table.Row>)
                    )}
                </Table.Body>
            </Table.Root>
            <Grid pt='6' pl='3' columns='2' gap='2' maxWidth='250pt'>
                <AlertDialog.Root>
                    <AlertDialog.Trigger><Button onClick={() => {axios.delete('/api/Orders/' + user);}}>Оформить заказ</Button></AlertDialog.Trigger>

                    <AlertDialog.Content>
                        <AlertDialog.Title>Успех</AlertDialog.Title>
                        Заказ успешно оформлен!
                        <br /><br />
                        <AlertDialog.Cancel>
                            <Button variant="soft" onClick={()=>setCart([])}>
                                Отлично
                            </Button>
                        </AlertDialog.Cancel>
                    </AlertDialog.Content>

                </AlertDialog.Root>

                <Button variant='outline' color='crimson' onClick={() => {axios.delete('/api/Orders/' + user); setCart([])}}>Очистить корзину</Button> </Grid>
        </>;
    const emptyCart = <Text as='p'><Strong>Корзина пуста</Strong></Text>

    return (
        <>
            <Link to='/' style={{ padding: "0pt 10pt" }}><Button><ArrowLeftIcon /> Назад</Button></Link>
            <br />
            <Heading as='h1' size='7' style={{ padding: "0pt 10pt" }}>Корзина</Heading>
            <br />
            {cart.length == 0 ? emptyCart : tt}



        </>
    )
}

function getName(trId) {

    axios.get('/api/travels/' + trId + '/only').then(resp => {
        localStorage.setItem('name', resp.data);

    })

    return localStorage.getItem('name');
}