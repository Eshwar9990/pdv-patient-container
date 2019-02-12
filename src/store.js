import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";

import patientDataReducer from 'pdv-patient-list/lib/reducers/patientDataReducer';
import apiReducer from  'pdv-patient-list/lib/reducers/apiReducer';
import pageReducer from  'pdv-patient-list/lib/reducers/pageReducer';
import apiPdvDataReducer from "pdv-patient-data/lib/reducers/apiPdvDataReducer";
import notificationReducer from "./reducers/notificationReducer";
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({patientDataReducer, apiReducer, pageReducer, apiPdvDataReducer, notificationReducer}), 
    {}, 
    applyMiddleware(createLogger(), sagaMiddleware)
); 

sagaMiddleware.run(rootSaga);