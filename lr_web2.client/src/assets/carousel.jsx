import { Button } from '@radix-ui/themes';
import './carousel.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Children, useEffect, useState } from 'react';

const Carousel = (props)=>{
    const {children} = props
    const [currentIndex, setCurrentIndex]=useState(0)
    const [length, setLength] = useState(children.length)
    useEffect(()=>{
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState=> prevState+1)
        }
    }

    const prev = () => {
        if (currentIndex > 0){
            setCurrentIndex(prevState=> prevState-1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <Button style={{position: 'absolute', zIndex: 1,left: '15px',top: '45%'}} radius='full' onClick={prev}><ArrowLeftIcon/></Button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                    style={{transform: 'translateX(-'+currentIndex*100+'%)'}}>
                    {children}
                    </div>
                </div>
                <Button style={{position: 'absolute', zIndex: 1, right: '15px', top:'45%'}}  radius='full' onClick={next}><ArrowRightIcon/></Button>
            </div>
        </div>
    )
}

export default Carousel