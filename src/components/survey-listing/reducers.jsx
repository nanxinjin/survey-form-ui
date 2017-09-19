export const SurveyActionReducer = (state={}, action) => {
    switch (action.type) {
        case 'SURVEY_SELECT_ACTION':
            return  {
                ...state,
                survey: action.survey
            };
        case 'ADMIN_LOGIN_ACTION':
            return  {
                ...state,
                session: action.session
            };
        default:
            return state
    }
};