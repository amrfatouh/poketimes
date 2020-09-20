export const PostsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, { title: action.post.title, body: action.post.body, id: Math.random().toString() }];
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.id);
        default:
            return state;
    }
} 