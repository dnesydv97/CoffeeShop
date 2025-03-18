import React, {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Image, Text, TouchableOpacity} from 'react-native';
import {
  Column,
  Row,
  SpacerColumn,
  SpacerRow,
  Typography,
} from '../../components';
import navigation from '../../utils/navigation';
import {Separator} from '../../components/Separator';

type CoffeeDetailRouteProp = RouteProp<
  {CoffeeDetail: {coffee: any}},
  'CoffeeDetail'
>;

export const CoffeeDetailScreen: React.FC = () => {
  const route = useRoute<CoffeeDetailRouteProp>();
  const {coffee} = route.params;
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [price, setPrice] = useState<number>(coffee.price || 5.99); // Default price
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLongText, setIsLongText] = useState(false);
  const handleTextLayout = (event: any) => {
    if (event.nativeEvent.lines.length > 3) {
      setIsLongText(true);
    }
  };
  const sizePrices = {
    S: coffee.price * 0.8 || 4.99, // Example: Small price 20% less
    M: coffee.price || 5.99, // Default Medium price
    L: coffee.price * 1.2 || 6.99, // Example: Large price 20% more
  };
  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
    setPrice(sizePrices[size]);
  };

  return (
    <Container>
      <Row justifyContent="space-between" style={{marginBottom: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <Typography title="Details" />
        <Image
          source={require('../../assets/Heart.png')}
          style={{height: 20, width: 20}}
        />
      </Row>

      <CoffeeImage
        source={{
          uri:
            coffee.image_url ||
            'https://www.milesteaandcoffee.com/userfiles/article/5e87182e3217a-coffee.jpg',
        }}
        
      />

      <Content>
        <Title>{coffee.name}</Title>
        <Subtitle>with Chocolate</Subtitle>

        <Row justifyContent="space-between" alignItems="center">
          <Row>
            <Typography title= '⭐'/>
            <SpacerRow size={0.5}/>
            <Typography title={ coffee.rating || '4.8'} fontWeight={900}/>
            <Typography title='(230)' size='md' color='greyLight' fontWeight={700}/>
          </Row>
          <Row>
            <Image
              source={require('../../assets/Frame19.png')}
              style={{height: 40, width: 40}}
            />
            <SpacerRow size={2} />
            <Image
              source={require('../../assets/Frame20.png')}
              style={{height: 40, width: 40}}
            />
          </Row>
        </Row>
        <SpacerColumn size={2} />
        <Separator />
        <SpacerColumn size={2} />
        <Typography title="Description" fontWeight={900} />
        <SpacerColumn size={1.5} />

        <Description
          numberOfLines={showFullDescription ? undefined : 3}
          onTextLayout={handleTextLayout}>
          {coffee.description}
        </Description>
        {isLongText && !showFullDescription && (
          <ReadMoreButton onPress={() => setShowFullDescription(true)}>
            <ReadMoreText>Read More</ReadMoreText>
          </ReadMoreButton>
        )}
        <SpacerColumn size={1.5} />

        <SizeTitle>Size</SizeTitle>
        <SizeContainer>
          {['S', 'M', 'L'].map(size => (
            <SizeButton key={size} isSelected={selectedSize === size} onPress={() => handleSizeSelection(size)}>
            <SizeText isSelected={selectedSize === size}>{size}</SizeText>
          </SizeButton>
          ))}
        </SizeContainer>
        <Separator style={{height: 0.7}} />
        <SpacerColumn size={2}/>
        <Footer>
          <Column>
            <Typography title="Price" size="md" color="grey" />
            <PriceText>${price.toFixed(2)}</PriceText>
          </Column>
          <BuyButton>
            <BuyText>Buy Now</BuyText>
          </BuyButton>
        </Footer>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #F9F9F9;
  padding: 20px;
`;



const CoffeeImage = styled.Image`
  width: 92%;
  height: 200px;
  border-radius: 10px;
  align-self: center;
  
`;

const Content = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

const RatingText = styled.Text`
  font-size: 14px;
  color: #444;
`;
const ReadMoreButton = styled.TouchableOpacity`
  margin-top: 4px;
`;

const ReadMoreText = styled.Text`
  font-size: 16px;
  color: #ff9800;
  font-weight: bold;
`;
const Description = styled.Text`
  font-size: 12px;
  color: #555;
  margin-bottom: 10px;
`;

const SizeTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SizeContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const SizeButton = styled.TouchableOpacity<{isSelected: boolean}>`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  background-color: ${({isSelected}) => (isSelected ? '#FFF5EE' : '#FFFFFF')};
  margin: 0 5px;
  border-color: ${({isSelected}) => (isSelected ? '#C67C4E' : '#DEDEDE')};
  border-width: 1px;
`;

const SizeText = styled.Text<{isSelected: boolean}>`
  color: ${({isSelected}) => (isSelected ? '#C67C4E' : '#333')};
  font-weight: bold;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const PriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #d9a57d;
`;

const BuyButton = styled.TouchableOpacity`
  background-color: #d9a57d;
  padding: 12px 80px;
  border-radius: 10px;
`;

const BuyText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
