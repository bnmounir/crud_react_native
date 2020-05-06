import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_posts':
            return action.payload;
        case 'edit_post':
            return state.map((blog) =>
                blog.id === action.payload.id ? action.payload : blog
            );

        case 'delete_post':
            return state.filter((blog) => blog.id !== action.payload);
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => async () => {
    const { data } = await jsonServer.get('/blog_posts');
    dispatch({ type: 'get_posts', payload: data });
};

const addBlogPost = (dispatch) => async (title, content, callback) => {
    await jsonServer.post('/blog_posts', { title, content });
    callback();
};

const editBlogPost = (dispatch) => async (title, content, id, callback) => {
    await jsonServer.patch(`/blog_posts/${id}`, { title, content });
    dispatch({ type: 'edit_post', payload: { title, content, id } });
    callback();
};

const deleteBlogPost = (dispatch) => async (id) => {
    await jsonServer.delete(`/blog_posts/${id}`);
    dispatch({ type: 'delete_post', payload: id });
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);
