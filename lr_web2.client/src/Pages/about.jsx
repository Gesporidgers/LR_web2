import { Text, Heading, Button, Separator, TabNav, Strong, Badge, Em } from '@radix-ui/themes';

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
            <Heading as='h2' size='7' style={{padding: "0pt 10pt"}}>О нас</Heading>
            <Text as='p' style={{padding: "0pt 10pt"}} size='4'>Туристическая компания <Strong>"Золотая Середина"</Strong> осуществляет туроператорскую деятельность с 2004 года.</Text>
            <Text as='p' style={{padding: "0pt 10pt"}} size='4'>Мы являемся официальным туроператором и внесены в <Em>Единый федеральный реестр туроператоров</Em> под номером <Badge variant='solid' radius='full' size='3'>РТО 006197</Badge></Text>
            <br />
            <Text as='p' style={{padding: "0pt 10pt"}} size='4'>Мы делаем экскурсии из Москвы и 30 городов Подмосковья. Экскурсии проводят профессиональные экскурсоводы. Для программы отбираются только самые интересные достопримечательности. Вы можете выбрать размещение, тип питания, место посадки в автобусе. Сервис и уровень обслуживания на очень высоком уровне!</Text>
        </>
    )
}