import React from 'react';

import {Dimensions} from 'react-native';

import Carousel, { CarouselProperties } from 'react-native-snap-carousel';

import {Container, CarouselItemContainer, CarouselItemTitle, CarouselItemImage} from './styles';

const carouselItems = [
    {
        title: 'NOME1',
        image: 'https://i.pinimg.com/474x/7a/bd/82/7abd82bd66d1998e2345110b06619750.jpg'
    },
    {
        title: 'NOME2',
        image: 'https://i.pinimg.com/originals/16/73/63/1673638a65b037551aa2a507cbace553.jpg'
    },
    {
        title: 'NOME3',
        image: 'https://i.pinimg.com/originals/bc/c2/39/bcc2394f652ecb1afa83264eac6489d7.jpg'
    },
];

const RenderItem = ({item}) => {
    return (
        <CarouselItemContainer>
            <CarouselItemTitle>{item.title}</CarouselItemTitle>
            <CarouselItemImage source={{uri: `${item.image}`}} />
        </CarouselItemContainer>
    )
}

// interface CarouselProps {
//     title: string[];
//     image: string[];
// }

const Carrosel: React.FC = () => (

    <Container>
        <Carousel
            layout={'tinder'}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={600}
            renderItem={RenderItem}
        >
        </Carousel>
    </Container>
)

export default Carrosel;