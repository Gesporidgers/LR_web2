import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Grid, Text, Heading, Box, TextField, Button, Separator, TabNav, Card, Strong, Inset} from '@radix-ui/themes';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Catalog() {
    var [travels, setTravels] = useState([]);
    useEffect(()=>{
        axios.get('api/travels').then((resp)=>{
            setTravels(resp.data);
        }).catch((err)=>console.log(err));
    });
    return (
        <>
            <TabNav.Root>
                <TabNav.Link href='/'>Главная</TabNav.Link>
                <TabNav.Link active>Каталог</TabNav.Link>
                <TabNav.Link href='buy'>Как купить</TabNav.Link>
                <TabNav.Link href='catalog'>О нас</TabNav.Link>
            </TabNav.Root>
            <br />
            <Heading as='h2'>Каталог</Heading>
            
            <TextField.Root variant='soft' placeholder='Поиск по каталогу'>
                <TextField.Slot>
                    <MagnifyingGlassIcon/>
                </TextField.Slot>
            </TextField.Root>
            
                <Card>
                    <Inset clip="border-box" pb="current">
                        <img src="marocco.jpeg" alt="" srcset="" style={{width:'100%',height:"150px",objectFit:"cover", display:"block"}}/>
                    </Inset>
                    <Heading as='h2'>Marocco</Heading>
                    <Text as='p'>Lorem ipsum. Hello world!</Text>
                    <Separator orientation='horizontal' my="3" size='4'/>
                    <Grid columns='2'>
                        <Text align='center' mt='auto'><Strong>4500 rub</Strong></Text> 
                        <Button variant='soft'>More</Button>
                    </Grid>
                    
                </Card>
            
        </>
    )
}