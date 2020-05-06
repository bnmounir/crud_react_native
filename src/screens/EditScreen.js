import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen({ navigation }) {
    const { editBlogPost, state } = useContext(Context);
    const blogPost = state.find(
        (blog) => blog.id === navigation.getParam('id')
    );

    return (
        <BlogPostForm
            initialValues={{ ...blogPost }}
            handleSubmit={(title, content) =>
                editBlogPost(title, content, blogPost.id, () =>
                    navigation.pop()
                )
            }
        />
    );
}

export default EditScreen;
