import * as actions from '../actions';

const initialState = {
    query: 'Fun Places',
    location: 'New York, NY',
    radius: '',
    formWasSubmitted: false,
    results: [],
    showLoader: true,
    results: {},
    places: [],
    hoveredMarkerId: "",
    hoveredCardId: "",
    clickedMarkerDetails: {}
};

export const reducer = (state = initialState, action) => {
    if (action.type === actions.UPDATE_QUERY) {
        return Object.assign({}, state, {
            query: action.query
        })
    } else if (action.type === actions.UPDATE_LOCATION) {
        return Object.assign({}, state, {
            location: action.location
        })
    } else if (action.type === actions.TOGGLE_FORM_SUBMISSION) {
        return Object.assign({}, state, {
            formWasSubmitted: action.formWasSubmitted
        })
    } else if (action.type === actions.TOGGLE_LOADER) {
        return Object.assign({}, state, {
            showLoader: action.showLoader
        })
    } else if (action.type === actions.UPDATE_RESULTS) {
        console.log('results action called!: ', action.results)
        return Object.assign({}, state, {
            results: action.results
        })
    } else if (action.type === actions.UPDATE_PLACES) {
        return Object.assign({}, state, {
            places: action.places
        }) 
    } else if (action.type === actions.UPDATE_HOVER_MARKER_ID) {
        return Object.assign({}, state, {
            hoveredMarkerId: action.hoveredMarkerId
        })
    } else if (action.type === actions.UPDATE_HOVER_CARD_ID) {
        return Object.assign({}, state, {
            hoveredCardId: action.hoveredCardId
        })
    } else if (action.type === actions.CLICK_MAPMARKER) {
        return Object.assign({}, state, {
            clickedMarkerDetails: action.clickedMarkerDetails
        })
    }
    console.log('state: ', state)
    return state;

}