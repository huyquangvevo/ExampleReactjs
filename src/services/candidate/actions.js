import {LOAD_PEOPLE,SELECT_PERSON,FETCH_KEYWORDS} from './actionTypes';
import {fetchGet, fetchPost} from '../utils/api'

export const loadPeople = () => dispatch => {
    return fetchGet('/people')
        .then(result => {
                return dispatch({
                    type : LOAD_PEOPLE,
                    people : result
                })
            }
        );
};

export const selectPerson = person => dispatch => {
    return dispatch({
        type : SELECT_PERSON,
        people : person
    })
};

export const fetchKeywords = person => dispatch => {
    console.log(person);
    return fetchPost('/people',{'person_id':person})
        .then(result => {
            console.log(result);
            return dispatch({
                type : FETCH_KEYWORDS,
                keywords : result
            })
        })
};

