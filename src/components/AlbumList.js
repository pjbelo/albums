import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

    componentWillMount() {
        console.log('component will mount in AlbumList');
    }

    render() {
        return (
            <View>
                <Text>Album list!!!</Text>
            </View>
        );
    }
}

export default AlbumList;
