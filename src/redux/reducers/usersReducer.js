const initialState = {
    users:[],
    user:{},
    total:0
}

export const usersReducer = (state=initialState,action)=>{
    switch(action.type){
        case "getAllUsers":
            return{
                ...state,
                users:action.payload
            }

        case "registerNewUser":
            let newUsersList = state.users.push(action.payload);
            return{
                ...state,
                users:newUsersList
            }

        case "getUserData":
            return{
                ...state,
                user:action.payload
            }

        case"logoutUser":
        return {
            ...state,
            user:null
        }

        case "addNewOrderItem":
            let updateUser = {...state.user,orders:state.user.orders.push(action.payload)}
            return{
                ...state,
                user:updateUser
            }

        case "removeItemFromOrder":
            let filterdOrders = state.user.orders.filter(order=>order.itemId !== action.payload);
            let updateUser2 = {...state.user,orders:filterdOrders};
            return{
                ...state,
                user:updateUser2
            }

        
        case "getTotal":
            return{
                ...state,
                total:action.payload
            }


        case "updateQuantity":
            let updateOrders = [...state.user.orders];
            
            for(let i = 0; i<updateOrders.length;i++){
                if (updateOrders[i].itemId === action.payload.itemId){
                    if(action.payload.op === '+'){
                        updateOrders[i].quantity = updateOrders[i].quantity+1;
                    }
                    if(action.payload.op === '-' && updateOrders[i].quantity>1 ){
                        updateOrders[i].quantity = updateOrders[i].quantity-1;
                    }
                } 
            }
            return{
                ...state,
                user:{...state.user,orders:updateOrders}
            }

        default: return state;
    }
}