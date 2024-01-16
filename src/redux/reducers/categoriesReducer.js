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
            return{
                ...state,
                categories:state.categories.filter(category=>category._id !== action.payload)
            }

        case 'addNewCategory':
            let updatedCategories = [...state.categories];
            updatedCategories.push(action.payload);
            return{
                ...state,
                categories:updatedCategories
            }

        default: 
            return state;
    }
}