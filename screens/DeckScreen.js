import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Button, Icon, Card } from 'react-native-elements';
import Swipe from '../components/Deck';
import * as actions from '../actions';


class DeckScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Jobs',
            tabBarIcon: ({tintColor})=> { return <Icon name = "description" size = {30} color = {tintColor}/>; }
    
        }
    }

    renderCard(job) {
        const companlat = job.company.location? job.company.location.lat : 52;
        const companlng = job.company.location ? job.company.location.lng : 52;
        const location = {
            longitude: parseFloat(companlng),
            latitude: parseFloat(companlat),
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return (
            <Card title={job.title} style = {{marginTop: 10}}>
                <View style={{ height: 300 }}>
                    <MapView 
                    style = {{flex: 1}}
                    scrollEnabled={false}
                    cacheEnabled = {true}
                    initialRegion = {location}
                    >
                    </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company.name}</Text>
                    <Text>{job.post_date}</Text>
                </View>

            </Card>
        )

    }
    renderNoCards() {
        return (
            <Card title="No more jobs"></Card>
        )
    }
    render() {
        return (
            <View>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoCards}
                    onSwipeRight = {(job)=>{this.props.likeJob(job)}}

                />
            </View>);
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
}
const mapStateToProps = ({ jobs }) => {
    return { jobs: jobs.listing };
}

export default connect(mapStateToProps, actions)(DeckScreen);