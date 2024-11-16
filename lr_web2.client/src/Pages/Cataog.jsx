import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Grid, Text, Heading, Box, TextField, Link, Button, Separator, TabNav, Card, ScrollArea, DropdownMenu, Inset} from '@radix-ui/themes';

export default function Catalog() {
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
            <Box maxWidth='350px'>
                <Card>
                    <Inset clip="border-box" pb="current">
                        <img src="marocco.jpeg" alt="" srcset="" style={{width:'100%',height:"150px",objectFit:"cover", display:"block"}}/>
                    </Inset>
                    <Text as='p'>Hello my lovely world</Text>
                </Card>
            </Box>
        </>
    )
}