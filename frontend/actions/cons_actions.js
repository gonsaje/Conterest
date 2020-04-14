import * as ConUtil from '../util/con_util';

export const RECEIVE_CONS = 'RECEIVE_CONS';
export const RECEIVE_CON = 'RECEIVE_CON';
export const DELETE_CON = 'DELETE_CON';

const receiveCon = (con) => ({
  type: RECEIVE_CON,
  con
});

const receiveCons = (cons) => ({
  type: RECEIVE_CONS,
  cons
});

const deleteCon = conId => ({
  type: DELETE_CON,
  conId
});

export const fetchAllCons = () => dispatch => (
  ConUtil.fetchCons()
    .then(cons => dispatch(receiveCons(cons)))
);

export const fetchCon = (con) => dispatch => (
  ConUtil.fetchCon(con.id)
    .then(con => dispatch(receiveCon(con)))
);

export const newCon = (con) => dispatch => (
  ConUtil.createCon(con)
    .then(con => (dispatch(receiveCon(con))))
);

export const destroyCon = (con) => dispatch => (
  ConUtil.fetchCon(con)
    .then(con => (dispatch(deleteCon(con.id))))
);