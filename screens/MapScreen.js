import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {MapView} from 'expo';
import {connect} from 'react-redux';
import * as actions from '../actions'

class MapScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Map',
            tabBarIcon: ({tintColor})=> { return <Icon name = "my-location" size = {30} color = {tintColor}/>; }
    
        }
    }
    state = {
        region:{
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }
    onRegionChangeComplete = (region)=>{
        console.log(region);
        this.setState({region});


    }
    onButtonPress (){
        this.props.fetchJobs(this.state.region, ()=> this.props.navigation.navigate('deck')); 
    }


    render(){
        console.log(this.props);
        return(
        <View style = {{flex: 1}}>
            <MapView 
            region = {this.state.region}
            style = {{flex:1}}
            onRegionChangeComplete = {this.onRegionChangeComplete}
            />
            <View sytles = {styles.buttonContainer}>
                <Button
                large 
                title = "Search This Area"
                backgroundColor= "#009688"
                icon = {{name: 'search'}}
                onPress = {this.onButtonPress.bind(this)}
                />
            </View>
            
        </View>);
    }
}

const styles = {
    buttonContainer:{
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    }
}

export default connect(null,actions)(MapScreen)