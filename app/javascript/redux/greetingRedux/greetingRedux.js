import axios from 'axios';

const GET_DATA = 'GET_DATA';
const API = 'http://127.0.0.1:3000/api/greetings';


const initialState = [];

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const getDataAction = () => (dispatch) => {
  axios.get(API).then((resonse) => {
    const {data} = resonse;
    dispatch({ type: GET_DATA, payload: data[0] })
  });
};

export default greetingReducer;