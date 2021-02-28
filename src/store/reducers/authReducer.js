const initialState = {
    token: null,
    username: null,
    userRole: null,
    loading: false,
    error: false
};

const authReducer = (state = initialState, action) =>{
    switch(action.type) {
        default: return state;
    }
}

export default authReducer;
