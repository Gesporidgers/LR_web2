import { Link, useParams } from "react-router-dom";
import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { Box, Button, CheckboxGroup, Em, Flex, Grid, Heading, Popover, Separator, Strong, Text } from "@radix-ui/themes";
import { ArrowLeftIcon, DropdownMenuIcon } from "@radix-ui/react-icons";
import Carousel from "../assets/carousel";
export default function TravelPage() {
    const { id } = useParams();
    var [itm, setItm] = useState({});
    var [pictures, setPictures] = useState([])
    var [properities,setPropes] = useState([])
    var [used,setUsed] = useState([]); 
    var [cost, setCost] =useState(0)
    useEffect(() => {
        axios.get('/api/travels/' + id).then(resp => {
            const allData = resp.data;
            setItm(allData);
            setPictures(allData.images);
            setPropes(allData.properties);
            setCost(allData.cost)
        }
        );
    }, [setItm,setPictures,setPropes]);
   
    const clickedCheckbox = (ittm=>{
        if (used.find(ittm)===undefined){
            setUsed([...used,ittm])
            setCost(c => c+ittm.property_price)
            console.log(used)
        }
        else{
            setUsed(used.filter(k => k.id != ittm.id))
            setCost(c => c-ittm.property_price)
            console.log(used)
        }
    })
    
    
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
                    <Text as="p" style={{fontSize:'14px', lineHeight:'16px'}}><Em>{itm.shortDesc}</Em></Text><br />
                    <Text as="p"><Em>Дополнительные услуги:</Em></Text>
                    <Popover.Root>
                        <Popover.Trigger>
                            <Button>Выберите <DropdownMenuIcon/></Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <CheckboxGroup.Root defaultValue={(used.map(i => i.id))}>
                                {properities.map(p => 
                                    <CheckboxGroup.Item value={p.id} onClick={(ittm=>{
                                        console.log(used.find(i => i.id == p.id))
                                        if (!used.find(i => i.id == p.id)){
                                            
                                            used.push(p)
                                            setCost(c => c+p.property_price)
                                            console.log(used.find(i => i.id == p.id))
                                        }
                                        else{
                                            setUsed(used.filter(k => k.id != ittm.id))
                                            setCost(c => c-p.property_price)
                                            console.log('j')
                                        }
                                    })}>{p.name}</CheckboxGroup.Item>
                                )}
                            </CheckboxGroup.Root>
                        </Popover.Content>
                    </Popover.Root>
                    <br /><br />
                    <Heading as="h4">{cost} руб.</Heading>
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

