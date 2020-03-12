import axios from 'axios';
import {FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS} from './types';
import qs from 'qs';
const JOB_ROOT_URL = 'https://authenticjobs.com/api/?';
const QUERY_PARAMS = {
    api_key: '0c5ffd991d9636b6ce898ade29e07501',
    format: 'json',
    method: 'aj.jobs.search'
}

const buildJobsUrl = ()=>{
    const query = qs.stringify(QUERY_PARAMS);
    return `${JOB_ROOT_URL}${query}`;

}
export const fetchJobs = (region, navigate)=> async (dispatch)=>{
    const url = buildJobsUrl();
    console.log(url);
    let {data} = await axios.get(url);
    dispatch({type: FETCH_JOBS, payload: data.listings});
    console.log({data});
    navigate();


}

export const likeJob = (job)=>{
    return {
        payload: job,
        type: LIKE_JOB
    }
}
export const clearLikedJobs = ()=>{
    return {
        type: CLEAR_LIKED_JOBS
    }
}
