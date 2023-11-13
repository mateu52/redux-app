const INFO = "msg/INFO";
const WARNING = "msg/WARNING";
const DANGER = "msg/DANGER";

export const info = () => ({ type: INFO })
export const warning = () => ({ type: WARNING })
export const danger = () => ({ type: DANGER })

const INITIAL_STATE = {
    info: false,
    warning: false,
    danger: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INFO:
            return {
                ...state,
                info: true,
                warning: false,
                danger: false
            };
        case WARNING:
            return {
                info: false,
                warning: true,
                danger: false
            };
        case DANGER:
            return {
                info: false,
                warning: false,
                danger: true
            };
        default:
            return state
    }
}