import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const SearchBar = ({searchTerm, onTermChange, onTermSubmit}) => {
  return (
    <View style = {styles.backgroundStyle}>
        <FontAwesome name = "search" style = {styles.iconStyle}/>
        <TextInput 
            autoCapitalize='none'
            autoCorrect = {false}
            style = {styles.inputStyle} 
            placeholder='Search'
            value={searchTerm}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop : 15,
        backgroundColor : "#F0EACA",
        height : 50,
        borderRadius : 5,
        marginHorizontal : 15,
        flexDirection : 'row'
    },
    inputStyle :{
        flex :1,
        fontSize : 20
    },
    iconStyle :{
        fontSize : 35,
        alignSelf : 'center',
        marginHorizontal : 15
    }
});

export default SearchBar;
