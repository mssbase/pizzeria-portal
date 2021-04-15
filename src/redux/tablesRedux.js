import Axios from 'axios';
import { api } from './../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateTable = payload => ({ payload, type: UPDATE_TABLE });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateTableAPI = (tableID, tableStatus) => {
  return (dispatch, getState) => {

    Axios
      .patch(`${api.url}/api/${api.tables}/${tableID}`, { status: tableStatus })
      .then(res => {
        dispatch(updateTable({ tableID, tableStatus }));
      })
      .catch(err => {
        console.log('error');
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_TABLE: {
      return {
        ...statePart,
        data: statePart.data.map((table) => {
          if (
            table.id === action.payload.tableID
          )
            return {
              ...table, status: action.payload.tableStatus,
            };
          else return table;
        }),
      };
    }
    default:
      return statePart;
  }
}
