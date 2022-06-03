import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm , setSearchTerm] = useState("");
    const [results , setResults] = useState([]);
    const [errorMessage , setErrorMessage] = useState("");

    const searchApi =  async () => {
        try{
            const response = await yelp.get('/search',{
                params : {
                    limit : 50,
                    term : searchTerm,
                    location : 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            setErrorMessage("Something went wrong please try again later");
        }
        
    };

  return (
    <View>
        <SearchBar 
            searchTerm = {searchTerm} 
            onTermChange = {(newTerm)=> setSearchTerm(newTerm)}
            onTermSubmit = {() => searchApi()}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} restaurants</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
