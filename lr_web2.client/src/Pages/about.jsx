import { Grid, Text, Heading, Box, TextField, Link, Button, Separator, TabNav, Card, ScrollArea } from '@radix-ui/themes';

export default function About() {
    return (
        <>
            <TabNav.Root>
                <TabNav.Link href='/'>Главная</TabNav.Link>
                <TabNav.Link href='/catalog'>Каталог</TabNav.Link>
                <TabNav.Link href='/buy'>Как купить</TabNav.Link>
                <TabNav.Link active>О нас</TabNav.Link>
            </TabNav.Root>
            <br />
            <Heading as='h2'>О нас</Heading>
        </>
    )
}