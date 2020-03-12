import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderSlides() {
        console.log('render slides entered');
        console.log(this.props.data);
        return this.props.data.map((value, i) => {
            console.log(value.text)
            return (<View 
            style = {[styles.viewStyle, {backgroundColor: value.color}]}
             key={i}>
                <Text style = {styles.textStyle}>{value.text}</Text>
                {this.renderLastSlide(i)}

            </View>)
        });
    }
    renderLastSlide(index){
        if(index == this.props.data.length - 1){
            return(<Button 
                buttonStyle = {styles.buttonStyle} 
            title = "Get Started"
            onPress = {this.props.onComplete}
            />)
        }
    }


    render() {
        return (
            <ScrollView
                horizontal = {true}
                style={{ flex: 1 }}
                pagingEnabled>
                {
                    this.renderSlides()
                }
            </ScrollView>)
    }
}

const styles = {
    textStyle : {
        fontSize: 30,
        color: 'white',
        justifyContent: 'center'
    },
    viewStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15,
        borderRadius: 12

    }
}

export default Slides