import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
export default function TravelPage() {
    const { id } = useParams();
    var [itm, setItm] = useState({});
    useEffect(() => {
        axios.get('/api/travels/' + id).then(resp => {
            const allData = resp.data;
            setItm(allData);
        }
        );
    }, [setItm]);
    console.log(itm);
    return (
        <>
            <Heading as="h2" size='7' style={{ padding: "0 10pt" }}>{itm.name}</Heading>
            <br />
            <Grid columns='2' px='10pt'>
                <img src={'/' + itm.imgSrc} alt="" style={{ borderRadius: 10 }} />
                <Box>
                    <Text as="p">{itm.shortDesc}</Text>
                    <br />
                    <Heading as="h4">{itm.cost} руб.</Heading>
                    <br />
                    <Button style={{ padding: "0pt 15pt" }} radius="full">КУПИТЬ</Button>
                </Box>
            </Grid>
            <br />
            <Separator orientation='horizontal' size='4' />
            <br />
            <Text as="p" style={{ padding: "0 10pt" }}>{itm.longDesc}</Text>
        </>


    );
}