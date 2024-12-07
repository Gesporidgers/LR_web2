import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Grid, Text, Heading, TextField, Button, Separator, TabNav, Card, Strong, Inset, Spinner } from '@radix-ui/themes';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Catalog() {
    const [travels, setTravels] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => { setSearchTerm(event.target.value); };
    useEffect(() => {
        axios.get('api/travels').then((resp) => {
            const allData = resp.data;
            setTravels(allData);
        })
            .catch((error => { setTravels([]) }));
    }, [setTravels]);
    
    useEffect(() => {
        if (travels === undefined) { setSearchResults(undefined)} else {
            if (searchTerm == '') { setSearchResults(undefined) } else {
                const results = travels.filter(itm => itm.name.toLowerCase().includes(searchTerm.toLowerCase()));
                setSearchResults(results);
            }
        }
        
        
    }, [searchTerm]);

    
    const content = <Grid columns='3' gap='3' pt='10pt' px='10pt' >
        {travels.length == 0? <Spinner size='3' /> :
            travels.map((item =>
                <Card key={item.id}>
                    <Inset clip="border-box" pb="current">
                        <img src={item.imgSrc} alt="" style={{ width: '100%', height: "150px", objectFit: "cover", display: "block" }} />
                    </Inset>
                    <Heading as='h2' style={{ paddingBottom: '3pt' }}>{item.name}</Heading>
                    <Text as='p'>{item.shortDesc}</Text>
                    <Separator orientation='horizontal' my="3" size='4' />
                    <Grid columns='2'>
                        <Text align='center' mt='auto'><Strong>{item.cost} руб.</Strong></Text>
                        <Link to={'/catalog/'+item.id}><Button variant='soft'>Узнать больше</Button></Link>
                    </Grid>

                </Card>
            ))}
    </Grid>;

    const searcContent = <Grid columns='3' gap='3' pt='10pt' px='10pt' >
        {searchResults === undefined ? <></> :searchResults.map((item =>
                <Card key={item.id}>
                    <Inset clip="border-box" pb="current">
                        <img src={item.imgSrc} alt="" style={{ width: '100%', height: "150px", objectFit: "cover", display: "block" }} />
                    </Inset>
                    <Heading as='h2' style={{ paddingBottom: '3pt' }}>{item.name}</Heading>
                    <Text as='p'>{item.shortDesc}</Text>
                    <Separator orientation='horizontal' my="3" size='4' />
                    <Grid columns='2'>
                        <Text align='center' mt='auto'><Strong>{item.cost} руб.</Strong></Text>
                        <Link to={'/catalog/'+item.id}><Button variant='soft'>Узнать больше</Button></Link>
                    </Grid>

                </Card>
            ))}
    </Grid>;

    return (
        <>
            <TabNav.Root>
                <TabNav.Link href='/'>Главная</TabNav.Link>
                <TabNav.Link active>Каталог</TabNav.Link>
                <TabNav.Link href='buy'>Как купить</TabNav.Link>
                <TabNav.Link href='about'>О нас</TabNav.Link>
                <TabNav.Link href='contact'>Контакты</TabNav.Link>
            </TabNav.Root>
            <br />
            <Heading as='h2' style={{ padding: "0 10pt" }} size='7'>Каталог</Heading>
            <br />
            <TextField.Root variant='soft' placeholder='Поиск по каталогу' value={searchTerm} onChange={handleChange}>
                <TextField.Slot>
                    <MagnifyingGlassIcon />
                </TextField.Slot>
            </TextField.Root>
            {searchResults===undefined ? content : searcContent}
            <br /><br /><br />
        </>
    )
}