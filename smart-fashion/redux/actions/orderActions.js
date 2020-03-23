export const UPDATE_ORDER_PACKAGE = "UPDATE_ORDER_PACKAGE";
export const UPDATE_ORDER_STYLES = "UPDATE_STYLES";
export const UPDATE_ORDER_FABRICS = "UPDATE_FABRICS";
export const UPDATE_ORDER_DETAILS = "UPDATE_DETAILS";
export const CHANGE_ORDER_FORM_PAGE = "CHANGE_ORDER_FORM_PAGE";
export const CHANGE_MEASUREMENT_FORM_PAGE = "CHANGE_MEASUREMENT_FORM_PAGE";
export const SET_FORM_DISPLAYED = "SET_FORM_DISPLAYED";

export const updateOrderPackage = (orderPackage) => {
  return {
    type: UPDATE_ORDER_PACKAGE,
    payload: orderPackage
  };
};

export const updateOrderStyles = (styles) => {
  return {
    type: UPDATE_ORDER_STYLES,
    payload: styles
  };
};

export const updateOrderFabrics = (fabrics) => {
  return {
    type: UPDATE_ORDER_FABRICS,
    payload: fabrics
  };
};

export const updateOrderDetails = (details) => {
  return {
    type: UPDATE_ORDER_DETAILS,
    payload: details
  };
};

export const changeOrderFormPage = (page) => {
  return {
    type: CHANGE_ORDER_FORM_PAGE,
    payload: page
  }
}

export const changeMeasurementFormPage = (page) => {
  return {
    type: CHANGE_MEASUREMENT_FORM_PAGE,
    payload: page
  }
}

export const setFormDisplayed = (form) => {
  return {
    type: SET_FORM_DISPLAYED,
    payload: form
  }
}

