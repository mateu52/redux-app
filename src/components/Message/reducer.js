const INFO = "INFO";
const WARNING = "WARNING";
const DANGER = "DANGER";

export const info = () => ({ type: INFO, payload: 'pobrano z API' })
export const warning = () => ({ type: WARNING, payload: 'uwaga, dodano użytkownika' })
export const danger = () => ({ type: DANGER, payload: 'uwaga, zresetowano liste' })

const INITIAL_STATE = {
    info: '',
    warning: '',
    danger: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INFO:
            return {
                ...state,
                info: action.payload
            };
        case WARNING:
            return {
                ...state,
                warning: action.payload
            };
        case DANGER:
            return {
                ...state,
                danger: action.payload
            };
        default:
            return state
    }
}