import React, { Component } from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions'


class AuthScreen extends Component{
    static navigationOptions = ({navigation})=>{
        return {
            tabBarVisible: false
        }
    }
    
    componentDidMount = () => {
        this.props.facebookLogin();
        this.onAuthComplete(this.props);
        //AsyncStorage.removeItem('fb_token');
        
    }
    onAuthComplete(props){
        if(props.token){
            this.props.navigation.navigate('map');
        }
    }
    componentWillReceiveProps = (nextProps) => {
      this.onAuthComplete(nextProps);
    };
    
    render(){
        return(
        <View>
            <Text>AuthScreen</Text>
            <Text>AuthScreen</Text>
            <Text>AuthScreen</Text>
            <Text>AuthScreen</Text>
        </View>);
    }
}

const mapStateToProps = ({auth})=>{
    return {
        token: auth.token
    }
}

export default connect(mapStateToProps, actions)(AuthScreen);