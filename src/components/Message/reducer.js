const INFO_MSG = "INFO_MSG";
const WARNING_MSG = "WARNING_MSG";
const DANGER_MSG = "DANGER_MSG";
const ZERO_MSG = "ZERO_MSG";
const SEND_ED = "SEND_ED";
const FAIL_SENDING = "FAIL_SENDING";

const INITIAL_STATE = {
    info: '',
    warning: '',
    danger: ''
};

export const info = () => ({ type: INFO_MSG, payload: 'pobrano z API' })
export const warning = () => ({ type: WARNING_MSG, payload: 'uwaga' })
export const danger = () => ({ type: DANGER_MSG, payload: 'uwaga, zresetowano liste' })
export const to_zero = () => ({ type: ZERO_MSG })
export const sended = () => ({ type: SEND_ED, payload: 'wysłano dane'})
export const fail_send = () => ({ type: FAIL_SENDING, payload: 'nie udało się wysłać danych'})


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INFO_MSG:
            return {
                ...state,
                info: action.payload,
                warning: '',
                danger: ''
            };
        case WARNING_MSG:
            return {
                ...state,
                info: '',
                warning: action.payload,
                danger: ''
            };
        case DANGER_MSG:
            return {
                ...state,
                info: '',
                warning: '',
                danger: action.payload
            };
        case ZERO_MSG:
            return {
                ...state,
                info: '',
                warning: '',
                danger: ''
            }
        case SEND_ED:
            return {
                ...state,
                info: action.payload,
                warning: '',
                danger: ''
            }
        case FAIL_SENDING:
            return {
                ...state,
                info: '',
                warning: '',
                danger: action.payload
            }
        default:
            return state
    }
}