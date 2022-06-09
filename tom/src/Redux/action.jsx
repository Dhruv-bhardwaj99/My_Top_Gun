//actionType.js
export const GET_DATA = "GET_DATA";

//Action Creaters
export const addData = (data) =>({
    type: GET_DATA,
    payload: data
});

