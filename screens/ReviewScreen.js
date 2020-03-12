import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';


class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            tabBarIcon: ({tintColor})=> { return <Icon name = "heartbeat" size = {30} color = {tintColor}/>; },
            headerRight: (<Button
                title="Settings"
                onPress={() => { navigation.navigate('settings') }}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0, 122, 255, 1)" />),
            headerTitleStyle: {
                color: "rgba(0, 122, 255, 1)"
            }
        }
    }
    renderLikedJobs() {
        return this.props.likes.map((job, index) => {
            const companlat = job.company.location ? job.company.location.lat : 52;
            const companlng = job.company.location ? job.company.location.lng : 52;
            const location = {
                longitude: parseFloat(companlng),
                latitude: parseFloat(companlat),
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }
            return (
                <Card key={job.id} title={job.title}>
                    <View style={{ height: 200 }}>
                        <MapView
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.os == 'Android'}
                            scrollEnabled={false}
                            initialRegion={location}
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{job.company.name}</Text>
                            <Text style={styles.italics}>{job.post_date}</Text>
                        </View>
                        <Button
                            title="Apply Now!"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(job.apply_url)} />
                    </View>
                </Card>
            )
        })
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.renderLikedJobs()}
                </ScrollView>
            </View>);
    }
}

const styles = {
    detailWrapper: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
}
const mapStateToProps = ({ likes }) => {
    return { likes }
}

export default connect(mapStateToProps)(ReviewScreen)