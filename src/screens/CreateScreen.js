import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

function CreateScreen({ navigation }) {
    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm
            handleSubmit={(title, content) =>
                addBlogPost(title, content, () => navigation.navigate('Index'))
            }
        />
    );
}

export default CreateScreen;
