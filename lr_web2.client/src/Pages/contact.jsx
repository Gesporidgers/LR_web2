import { Box, Button, TextArea, TextField, TabNav, Table, Strong, Text } from "@radix-ui/themes";

export default function Contact() {
    return (
        <>
            <TabNav.Root>
                <TabNav.Link href='/'>Главная</TabNav.Link>
                <TabNav.Link href='catalog'>Каталог</TabNav.Link>
                <TabNav.Link href='buy'>Как купить</TabNav.Link>
                <TabNav.Link href='about'>О нас</TabNav.Link>
                <TabNav.Link active>Контакты</TabNav.Link>
            </TabNav.Root>
            <h1 style={{ paddingLeft: '10px' }}>Контакты</h1>
            <Table.Root variant='surface' style={{ maxWidth: '500px', marginLeft: '10px' }}>
                <Table.Row>
                    <Table.RowHeaderCell><Text as="p"><Strong>Единый центр бронирования</Strong></Text></Table.RowHeaderCell>
                    <Table.Cell>8(495)223-92-76 (с 9 до 19 ч. пн-пт)</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.RowHeaderCell><Text as="p"><Strong>Мы в социальных сетях</Strong></Text></Table.RowHeaderCell>
                    <Table.Cell>Мы в Инстаграм: @rutravelexpert<br />Мы Вконтакте: @rutravelexpert </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.RowHeaderCell><Text as="p"><Strong>Email</Strong></Text></Table.RowHeaderCell>
                    <Table.Cell><a href="mailto:zakaz.goldenmiddle@mail.ru  ">zakaz.goldenmiddle@mail.ru </a></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.RowHeaderCell><Text as="p"><Strong>Реквизиты</Strong></Text></Table.RowHeaderCell>
                    <Table.Cell><b>ООО "Золотая середина"</b><br />
                        Генеральный директор: Мохнаткина Екатерина Витальевна<br />
                        Адрес: БЦ Лотос, 117638, г. Москва, ул. Одесская д. 2, пом. 1/2
                        <br />
                        ИНН 7727741484 <br />
                        КПП 772701001 <br />
                        Р/С: 40702810331030000091 <br />
                        ФИЛИАЛ "Центральнный" БАНКА ВТБ (ПАО) г. Москва. <br />
                        К/с: 30101810145250000411
                        БИК 044525411 <br />
                        ОГРН 1117746112461</Table.Cell>
                </Table.Row>
            </Table.Root>

            <hr />
            <h2 style={{ marginLeft: '10px' }}>Напишите нам</h2>
            <Box px='10px'>
                <Box maxWidth="250px" mb='2'>
                    <TextField.Root type="text" id="form" placeholder="Имя" /></Box>
                <Box maxWidth="250px" mb='2'>
                    <TextField.Root type="email" id="form" placeholder="Email" />
                </Box>
                <Box maxWidth="250px" mb='2'>
                    <TextField.Root type="text" id="form" placeholder="Тема обращения" />
                </Box>
                <Box maxWidth="250px" mb='2'>
                    <TextArea resize='vertical' placeholder='Напишите тут своё сообщение' />
                </Box>

                <Box maxWidth="250px" mb='2'>
                    <Button type="submit" onClick={(event) => event.preventDefault()}>Отправить</Button>
                </Box>

            </Box>
            <br />
        </>
    );
};