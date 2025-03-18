


import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {CoffeeCard} from '../../components/CoffeeCard';
import {fetchCoffees} from '../../api/coffeeApi';

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  justify-content: space-between;

`;

const SearchInput = styled.TextInput`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const FilterButton = styled.TouchableOpacity<{isSelected: boolean}>`
  background-color: ${({isSelected}) => (isSelected ? '#d9a57d' : 'lightgray')};
  padding: 10px 15px;
  border-radius: 20px;
  margin-right: 10px;
`;
const FilterText = styled.Text<{isSelected: boolean}>`
  color: ${({isSelected}) => (isSelected ? 'white' : 'black')};
`;
const CoffeeListScreen = ({navigation}) => {
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  console.log("first",filteredCoffees)
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoffees();
      setCoffees(data);
      setFilteredCoffees(data);
    };
    fetchData();
  }, []);

  const handleSearch = text => {
    setSearch(text);
    const filtered = coffees.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredCoffees(filtered);
  };

  const filterByCategory = category => {
    setSelectedCategory(category);
    const filtered = category
      ? coffees.filter(item => item.region === category)
      : coffees;
    setFilteredCoffees(filtered);
  };

  const categories = ['All', 'South Asia', 'Europe', 'America'];

  return (
    <Container>
      <SearchInput
        placeholder="Search coffee"
        value={search}
        onChangeText={handleSearch}
      />
      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category}
            isSelected={
              selectedCategory === category ||
              (category === 'All' && !selectedCategory)
            }
            onPress={() =>
              filterByCategory(category === 'All' ? '' : category)
            }>
            <FilterText
              isSelected={
                selectedCategory === category ||
                (category === 'All' && !selectedCategory)
              }>
              {category}
            </FilterText>{' '}
          </FilterButton>
        ))}
      </FilterContainer>
      <FlatList
        data={filteredCoffees}
        keyExtractor={item => item._id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}

        renderItem={({item}) => (
          <CoffeeCard
            coffee={item}
            onPress={() => navigation.navigate('CoffeeDetailsScreen', {coffee: item})}
          />
        )}
      />
    </Container>
  );
};

export default CoffeeListScreen;
