export const UPDATE_QUERY = 'UPDATE_QUERY';
export const updateQuery = (query) => ({
    type: UPDATE_QUERY,
    query
});

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const updateLocation = (location) => ({
    type: UPDATE_LOCATION,
    location
});

export const TOGGLE_FORM_SUBMISSION = 'TOGGLE_FORM_SUBMISSION';
export const toggleFormSubmission = (formWasSubmitted) => ({
    type: TOGGLE_FORM_SUBMISSION,
    formWasSubmitted
});

export const UPDATE_PLACES = 'UPDATE_PLACES';
export const updatePlaces = (places) => ({
    type: UPDATE_PLACES,
    places
});

export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const toggleLoader = (showLoader) => ({
    type: TOGGLE_LOADER,
    showLoader
});

export const UPDATE_RESULTS = 'UPDATE_RESULTS';
export const updateResults = (results) => ({
    type: UPDATE_RESULTS,
    results
});

export const UPDATE_HOVER_MARKER_ID = 'UPDATE_HOVER_MARKER_ID';
export const updateHoverMarkerId = (hoveredMarkerId) => ({
    type: UPDATE_HOVER_MARKER_ID,
    hoveredMarkerId
});

export const UPDATE_HOVER_CARD_ID = 'UPDATE_HOVER_CARD_ID';
export const updateHoverCardId = (hoveredCardId) => ({
    type: UPDATE_HOVER_CARD_ID,
    hoveredCardId
});

export const CLICK_MAPMARKER = 'CLICK_MAPMARKER';
export const clickMapMarker = (clickedMarkerDetails) => ({
    type: CLICK_MAPMARKER,
    clickedMarkerDetails
});