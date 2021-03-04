const initialState = {
    products:[]
}


export const productsReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'getAllProducts':
            return {
                ...state,
                products:action.payload
            };
        
        case 'getProductsByCategory':
            return {
                ...state,
                products:action.payload
            }
        
        case 'addNewProduct':
            let updatedProducts = state.products.push(action.payload);
            return{
                ...state,
                products:updatedProducts
            }

        case 'deleteProduct':
            let filterProducts = state.products.filter(product=>product._id!== action.payload);
            return{
                ...state,
                products:filterProducts
            }

        default: 
            return state;
    }
}