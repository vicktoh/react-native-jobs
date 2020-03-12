import React, { Component } from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {AppLoading} from 'expo';
import Slides from '../components/Slides';
import _ from 'lodash';


const SLIDE_DATA = [
    {text: "Welcome to JobApp", color: "#03A9f4"},
    {text: "Use this to get a job", color: "#009688"},
    {text: 'Set your location and Swipe away!!!!', color: "#03A9FA"}]

class WelcomeScreen extends Component{
    async componentWillMount() {
        //super(props);
       
            let token = await AsyncStorage.getItem('fb_token');
            if(token) {
                this.setState({token})
                this.props.navigation.navigate('map')
            }
            else this.setState({token: false})
        
    }
    
    static navigationOptions = ({navigation})=>{
        return {
            tabBarVisible: false
        }
    }

    state = {token: null}
    onSlideComplete(){
        this.props.navigation.navigate('auth');
    }
    render(){
        if(_.isNull(this.state.token)) return <AppLoading/>
        return (
                <Slides data = {SLIDE_DATA}
                onComplete = {this.onSlideComplete.bind(this)}
                
                />
            );
    }
}

export default WelcomeScreen