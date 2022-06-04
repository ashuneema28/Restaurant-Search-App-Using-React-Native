import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

const ResultsDetails = ({result}) => {
    return <View style = {styles.contsiner}>
        <Image style = {styles.image} source={{uri : result.image_url}}/>
        <Text style = {styles.name}> {result.name} </Text>
        <Text> {result.rating} Stars, {result.review_count} Reviews </Text>
    </View>
}

const styles = StyleSheet.create({
    contsiner : {
        marginLeft : 15
    },  
    image : {
        width : 220,
        borderRadius : 4,
        height : 140,
        marginBottom : 5
    },
    name : {
        fontWeight : 'bold',
        fontSize : 14
    }
})

export default ResultsDetails;