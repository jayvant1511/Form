const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return state.concat([action.userData]);
        case 'DELETE':
            return state.filter((user) => user.id !== action.id);
        case 'EDIT':
            state.map((user) => {
                if (action.id === user.id) {
                    user.edit = 1;
                }
            })
            // console.log(state);
            return state;
        case 'UPDATE':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        FirstName: action.data.FirstName,
                        LastName: action.data.LastName,
                        Age : action.data.Age,
                        edit: 0
                    }
                } else return post;
            })
        default:
            return state;
    }
}

export default postReducer;