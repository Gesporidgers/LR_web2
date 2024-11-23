import { Box, Button, TextArea, TextField } from "@radix-ui/themes";

export default function Contact() {
    return (
        <>
            <h1>Контакты</h1>
            <table border="1pt">
                <tr>
                    <td><b>Единый центр бронирования</b></td>
                    <td>8(495)223-92-76 (с 9 до 19 ч. пн-пт)</td>
                </tr>
                <tr>
                    <td><b>Мы в социальных сетях</b></td>
                    <td>Мы в Инстаграм: @rutravelexpert<br />Мы Вконтакте: @rutravelexpert </td>
                </tr>
                <tr>
                    <td><b>Email</b></td>
                    <td><a href="mailto:zakaz.goldenmiddle@mail.ru  ">zakaz.goldenmiddle@mail.ru </a></td>
                </tr>
                <tr>
                    <td><b>Реквизиты</b></td>
                    <td><b>ООО "Золотая середина"</b><br />
                        Генеральный директор: Мохнаткина Екатерина Витальевна<br />
                        Адрес: БЦ Лотос, 117638, г. Москва, ул. Одесская д. 2, пом. 1/2
                        <br />
                        ИНН 7727741484 <br />
                        КПП 772701001 <br />
                        Р/С: 40702810331030000091 <br />
                        ФИЛИАЛ "Центральнный" БАНКА ВТБ (ПАО) г. Москва. <br />
                        К/с: 30101810145250000411
                        БИК 044525411 <br />
                        ОГРН 1117746112461
                    </td>
                </tr>
            </table>
            <hr />
            <h2>Напишите нам</h2>
            <Box>
                <Box maxWidth="250px">
                    <TextField.Root type="text" id="form" placeholder="Имя" /></Box>
                    <Box maxWidth="250px">
                <TextField.Root type="email" id="form" placeholder="Email" /></Box>
                <Box maxWidth="250px"> <TextField.Root type="text" id="form" placeholder="Тема обращения" /></Box>
                <Box maxWidth="250px"><TextArea resize='vertical' placeholder='Напишите тут своё сообщение'/></Box>
                
                <Box maxWidth="250px"><Button type="submit" onClick={(event) => event.preventDefault()}>Отправить</Button></Box>
                
            </Box>

        </>
    );
};