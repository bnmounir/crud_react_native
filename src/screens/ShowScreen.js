import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

function ShowScreen({ navigation }) {
    const { state } = useContext(Context);
    const blogPost = state.find(
        (blog) => blog.id === navigation.getParam('id')
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{blogPost.title}</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <Text style={styles.header}>{blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Edit', {
                        id: navigation.getParam('id'),
                    })
                }
            >
                <FontAwesome
                    style={styles.addIcon}
                    size={30}
                    name='pencil-square-o'
                />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginTop: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        alignSelf: 'center',
    },
    header: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    },
    addIcon: {
        marginHorizontal: 10,
    },
});

export default ShowScreen;
