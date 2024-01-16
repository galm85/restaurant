const initialState = {
    orders:[],
    cart:[],
    
}

export const ordersReducer = (state=initialState,action)=>{
    switch(action.type){
        case "getAllUsers":
            return{
                ...state,
                orders:action.payload
            }

        case "addNewOrder":
            let newOrdersList = state.orders.push(action.payload);
            return{
                ...state,
                orders:newOrdersList
            }

        case "removeOrder":
            let newOrders = state.orders.filter(order=> order._id!== action.payload);
            return{
                ...state,
                orders:newOrders
            }

        case "getCart":
            return{
                ...state,
                cart:action.payload
            }

        case "getHistory":
            return{
                ...state,
                orders:action.payload
            }
        

        default: return state;
    }
}