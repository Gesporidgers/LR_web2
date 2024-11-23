import { Text, Heading, TabNav, DataList, Strong } from '@radix-ui/themes';

export default function Buy() {
    return (
        <>
            <TabNav.Root>
                <TabNav.Link href='/'>Главная</TabNav.Link>
                <TabNav.Link href='catalog'>Каталог</TabNav.Link>
                <TabNav.Link active>Как купить</TabNav.Link>
                <TabNav.Link href='about'>О нас</TabNav.Link>
                <TabNav.Link href='contact'>Контакты</TabNav.Link>
            </TabNav.Root>
            <br />
            <Heading as='h2' style={{ padding: "0 10pt" }} size='7'>Как купить</Heading>
            <Text as='p' style={{ padding: "0 10pt" }}>Чтобы поехать на сборные 1-дневные экскурсии  или и многодневные туры на 2 и более дней нужно записаться на сайте или по телефону, внести предоплату и дождаться звонка менеджера накануне выезда с информацией о номере автобуса и мест в автобусе. Оплатить поездку можно любым удобным для Вас способом.</Text>
            <Text as='p' style={{ padding: "0 10pt" }}><Strong>1. Оплата по счету в любом банке вашего города или переводом от организации.</Strong></Text>
            <Text as='p' style={{ padding: "0 15pt" }}>ООО «Золотая середина» <br /> 117042, г. Москва, Чечёрский пр-д, д. 24, пом. 1, комн. 2, оф. 56</Text>
            <DataList.Root style={{padding: "0 15pt"}}>
                <DataList.Item>
                    <DataList.Label minWidth="88px">ИНН</DataList.Label>
                    <DataList.Value>7727741484</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">КПП</DataList.Label>
                    <DataList.Value>772701001</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">Р/С</DataList.Label>
                    <DataList.Value>40702810331030000091</DataList.Value>
                </DataList.Item>
            </DataList.Root>
            <Text as='p' style={{padding:"0 15pt"}} color='gray'>ФИЛИАЛ "Центральный" БАНКА  ВТБ (ПАО) г. Москва.</Text>
            <DataList.Root style={{padding: "0 15pt"}}>
                <DataList.Item>
                    <DataList.Label minWidth="88px"> К/с</DataList.Label>
                    <DataList.Value>30101810145250000411</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">БИК</DataList.Label>
                    <DataList.Value>044525411</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">ОГРН</DataList.Label>
                    <DataList.Value>1117746112461</DataList.Value>
                </DataList.Item>
            </DataList.Root>
            <Text as='p' style={{padding: "0 10pt"}}><Strong>2. Оплата банковской картой через плажную систему Юkassa: Visa, MasterCard, МИР, ЮMoney, Qiwi и другими способами.</Strong> </Text>
            <Text as='p' style={{padding: "0 15pt"}}>Это самая надежная система переводов от Сбербанка, каждый платеж проверяется внутренней системой безопасности банка. Удобно для оплаты из любого города России.</Text>
            <Text as='p' style={{padding: "0 10pt"}}><Strong>3. Оплата через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем: МИР, VISA International, Mastercard Worldwide, JCB.</Strong></Text>
            <Text as='p' style={{padding: "0 15pt"}}>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа также может потребоваться ввод специального пароля.</Text>
        </>
    )
}