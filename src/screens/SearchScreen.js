import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm , setSearchTerm] = useState("")
    const [results , setResults] = useState([])

    const searchApi =  async () => {
        const response = await yelp.get('/search',{
            params : {
                limit : 50,
                term : searchTerm,
                location : 'san jose'
            }
        });
        setResults(response.data.businesses);
    };

  return (
    <View>
        <SearchBar 
            searchTerm = {searchTerm} 
            onTermChange = {(newTerm)=> setSearchTerm(newTerm)}
            onTermSubmit = {() => searchApi()}
        />
        <Text>{searchTerm}</Text>
        <Text>We have found {results.length} restaurants</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
