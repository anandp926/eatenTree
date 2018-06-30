/**
 * Created by rozer on 6/29/2018.
 */
import { FETCH_FOOD } from '../action'

function food(state = {food:[]}, action) {
    switch(action.type){
        case FETCH_FOOD:
            return {
                ...state,
                food:action.food
            }
        default:
            return state
    }
}

export default food
