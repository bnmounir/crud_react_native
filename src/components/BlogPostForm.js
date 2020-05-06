import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function BlogPostForm({
    handleSubmit,
    initialValues = { title: '', content: '' },
}) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Post</Text>
            <Text style={styles.label}>Post Title</Text>
            <TextInput
                style={styles.title}
                value={title}
                onChangeText={(txt) => setTitle(txt)}
                maxLength={15}
            />
            <Text style={styles.label}>Content</Text>
            <TextInput
                style={styles.content}
                value={content}
                onChangeText={(txt) => setContent(txt)}
                multiline={true}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => handleSubmit(title, content)}
            >
                <Text style={styles.btnTxt}>Save Post</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 5,
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        marginVertical: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        margin: 20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'black',
        height: 40,
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 5,
    },
    content: {
        fontSize: 16,
        margin: 20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'black',
        height: 40,
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 5,
    },
    btn: {
        margin: 20,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        // width: 30,
        height: 40,
    },
    btnTxt: {
        color: 'white',
        fontSize: 18,
    },
});

export default BlogPostForm;
