const initialState = {
    categories:[]
}


export const categoriesReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'getAllCategories':
            return {
                ...state,
                categories:action.payload
            };
        
        case 'deleteCategory':
            let filteredCategories = state.categories.filter(category=>category._id !== action.payload);
            return{
                ...state,
                categories:filteredCategories
            }

        case 'addNewCategory':
            let updatedCategories = state.categories.push(action.payload);
            return{
                ...state,
                categories:updatedCategories
            }

        default: 
            return state;
    }
}