import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Button, Em, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Carousel from "../assets/carousel";
export default function TravelPage() {
    const { id } = useParams();
    var [itm, setItm] = useState({});
    var [pictures, setPictures] = useState([])
    useEffect(() => {
        axios.get('/api/travels/' + id).then(resp => {
            const allData = resp.data;
            setItm(allData);
            setPictures(allData.images)
        }
        );
    }, [setItm]);
    return (
        <>
            <Link to='/catalog' style={{padding: "0pt 10pt"}}><Button><ArrowLeftIcon/> Назад</Button></Link>
            <Heading as="h2" size='7' style={{ padding: "0 10pt" }}>{itm.name}</Heading>
            <br />
            <Grid columns='2' px='10pt' gap='3'>
                <Carousel>
                    <img src={'/' + itm.imgSrc } alt="" style={{ borderRadius: 10 }} />
                    {pictures.map(pic =>
                        <img src={'/' + pic.path } alt="" style={{ borderRadius: 10 }} />
                    )}
                    
                </Carousel>
                <Box>
                    <Text as="p" style={{fontSize:'14px', lineHeight:'16px'}}><Em>{itm.shortDesc}</Em></Text>
                    <br />
                    <Heading as="h4">{itm.cost} руб.</Heading>
                    <br />
                    <Button style={{ padding: "0pt 15pt" }} radius="full">КУПИТЬ</Button>
                </Box>
            </Grid>
            <br />
            <Separator orientation='horizontal' size='4' />
            <br />
            <Text as="p"  style={{ padding: "0pt 10pt", paddingBottom:'20pt', textAlign: 'justify', fontSize: '16px', lineHeight: '24px' }}>{itm.longDesc}</Text>
        </>


    );
}