import {combineReducers} from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reducer';
import likes from './like_job';

export default combineReducers({
    auth, jobs, likes
})