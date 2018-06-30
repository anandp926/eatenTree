/**
 * Created by rozer on 6/29/2018.
 */
export const FETCH_FOOD = "FETCH_FOOD"

export const fetchFood = (food) => ({
    type:FETCH_FOOD,
    food
});
