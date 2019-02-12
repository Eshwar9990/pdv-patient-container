import apiSaga from "pdv-patient-list/lib/sagas/apiSaga";
import apiPdvDataSaga from "pdv-patient-data/lib/sagas/apiSaga";
import { fork, call, put } from 'redux-saga/effects'

export default function* rootSaga () {
    yield [
        fork(apiSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(apiPdvDataSaga),
    ];
}