
import { Grid, Text, Heading, Box, TextField, Link, Button, Separator, TabNav, Card, ScrollArea } from '@radix-ui/themes';
import { News } from '../assets/data/news';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { Cities } from '../assets/data/cities';
export default function MainPage(){
    return (
        <>
            <TabNav.Root>
                <TabNav.Link active>Главная</TabNav.Link>
                <TabNav.Link href='catalog'>Каталог</TabNav.Link>
                <TabNav.Link href='buy'>Как купить</TabNav.Link>
                <TabNav.Link href='about'>О нас</TabNav.Link>
            </TabNav.Root>
            <br />
            <Heading as='h2' style={{ padding: "0 10pt" }} size='8'>Новости</Heading> <br />
            <Grid gap="1" columns="3" px="10pt">
                {News.map(article =>
                    <Card>
                        <Text as="div" size="3" weight="bold">
                            {article.title}
                        </Text>
                        <Text color='gray' size="1">{article.date}</Text>
                        <Text as="div" color="gray" size="2">
                            {article.text}
                        </Text>
                    </Card>
                )}
            </Grid>
            <br />
            <Heading as='h3' style={{ padding: "0 10pt" }}>Список городов отправления</Heading> <br />
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 180, padding: "0 10pt" }}>
                {Cities.map(ct =>
                    <Text as='div' size="5"><DotFilledIcon />{ct}</Text>
                )}
            </ScrollArea>
        </>
    );
}