import {all, fork, call, put, take} from 'redux-saga/effects';
import axios from 'axios';

//import { backUrl } from "../config/config";


axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

export default function* rootSaga() { // gen 함수 rootSaga.next() 를 해야 실행
    yield all([

    ]);
}




