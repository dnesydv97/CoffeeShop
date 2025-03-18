import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Typography from '../Typography';
import Row from '../Row';

const CardContainer = styled.TouchableOpacity`
  width: 49%;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const CoffeeImage = styled.Image`
  width: 90%;
  height: 150px;
  border-radius: 10px;
  align-self: center;
  margin-top: 4px;
`;

const CoffeeInfo = styled.View`
  padding: 10px;
`;

const CoffeeName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Price = styled.Text`
  font-size: 14px;
  color: #4caf50;
  margin-top: 5px;
`;
const Rating = styled.Text`
  font-size: 12px;
  color: #fff;
  padding: 5px 8px;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: 900;
`;

interface CoffeeCardProps {
  coffee: any;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({coffee}) => {
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={() => navigation.navigate('CoffeeDetailScreen', {coffee})}>
      <CoffeeImage
        source={{
          uri:
            coffee.image_url ||
            'https://www.milesteaandcoffee.com/userfiles/article/5e87182e3217a-coffee.jpg',
        }}
      />
      <Rating>⭐ {coffee.rating || ' 4.5'}</Rating>

      <CoffeeInfo>
        <CoffeeName>{coffee.name}</CoffeeName>
        <Typography title="with Chocolate" size="sm" color="greyLight" />
        <Row alignItems="center" justifyContent="space-between">
          <Price>${coffee.price}</Price>
          <Typography
            title="+"
            style={{
              backgroundColor: '#C67C4E',
              borderRadius: 10,
              paddingHorizontal: 12,
              padding: 4,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              textAlign: 'center',
              color: '#fff',
            }}
          />
        </Row>
      </CoffeeInfo>
    </CardContainer>
  );
};
