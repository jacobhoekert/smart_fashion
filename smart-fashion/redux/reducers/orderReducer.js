import { 
  UPDATE_ORDER_PACKAGE, 
  UPDATE_ORDER_STYLES, 
  UPDATE_ORDER_FABRICS,
  UPDATE_ORDER_DETAILS,
  CHANGE_ORDER_FORM_PAGE,
  CHANGE_MEASUREMENT_FORM_PAGE,
  SET_FORM_DISPLAYED
} from '../actions/orderActions';

const initialState = {
  currentPage: 0,
  currentMeasurementPage: 0,
  formDisplayed: null
}

function orderReducer(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case UPDATE_ORDER_PACKAGE:
      return {
        ...state,
        package: payload
      }
    case UPDATE_ORDER_STYLES:
      return {
        ...state,
        styles: payload
      }
    case UPDATE_ORDER_FABRICS:
      return {
        ...state,
        fabrics: payload
      }
    case UPDATE_ORDER_DETAILS:
      return {
        ...state,
        details: payload
      }
    case CHANGE_ORDER_FORM_PAGE:
      return {
        ...state,
        currentPage: payload
      }
    case CHANGE_MEASUREMENT_FORM_PAGE:
      return {
        ...state,
        currentMeasurementPage: payload
      }
    case SET_FORM_DISPLAYED:
      return {
        ...state,
        formDisplayed: payload
      }
    default:
      return state
  }
}

export default orderReducer;