import {LOAD_PEOPLE,SELECT_PERSON, FETCH_KEYWORDS} from './actionTypes';

const initialState = {
    people: []
};

export default function(state = initialState,action){
    switch (action.type) {
        case LOAD_PEOPLE:
            return{
                ...state,
                people : action.people
            };
        case SELECT_PERSON:
            return{
                ...state,
                selectedPerson: action.people
            };
        case FETCH_KEYWORDS:
            return {
                ...state,
                keywords : action.keywords
            } 
        default:
            return state;
    }
}