import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log(response));
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
