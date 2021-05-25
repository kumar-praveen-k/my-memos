
const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FATCH_ALL':
            return posts;
        case 'CREATE':
            posts = [...posts, action.payload]
            return posts;
        default:
            return posts;
    }
}

export default reducer;