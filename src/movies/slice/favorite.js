import { createSlice } from "@reduxjs/toolkit";


const favoiteSlice = createSlice({
    name: "favorite",
    initialState: { favorite: [] },
    reducers: {
        changefavorite: function (state, action) {
            state.favorite = action.payload
        },
        pushfav:function(state, action ){
            let edit={...action.payload}
            edit.isfav=true
            state.favorite.push( edit)


        },
        removfav:function(state, action ){
            let newfav=[]
            for (const fav of state.favorite) {
                if (fav.id==action.payload){
                     continue
                }
                else{
                    newfav.push(fav)
                }

            }
            state.favorite= [...newfav]

        },
        // isfav:function(state, action ){
        //     for (const fav of state.favorite) {
        //         if (fav.id==action.payload.id){
        //              fav.isfav=true
        //         }
            

        //     }
        //     // return false

        // }

    }
})

export const {changefavorite,pushfav,removfav }=favoiteSlice.actions
export default favoiteSlice.reducer