import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Context } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen({ navigation }) {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();
    }, [state]);

    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={(blog) => blog.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Show', { id: item.id })
                            }
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Feather style={styles.icon} name='trash' />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather style={styles.addIcon} size={30} name='plus-circle' />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    row: {
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        margin: 5,
    },
    icon: {
        fontSize: 30,
        // margin: 5,
    },

    addIcon: {
        marginHorizontal: 10,
    },
});
