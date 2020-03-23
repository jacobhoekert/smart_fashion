import React, { useState, useEffect } from "react";
import OrderFormNav from "./OrderFormNav";
import ProgressBar from './ProgressBar';
import { useDispatch } from "react-redux";
import { updateOrderDetails, changeOrderFormPage } from "../redux/actions/orderActions";
import "../styles/order_form.scss";
import "../styles/style_card.scss";
import "../styles/order_personal_form.scss";

const OrderFormP4 = () => {
  const dispatch = useDispatch();

  const [isValidated, setIsValidated] = useState(false);
  const [nextWasClicked, setNextWasClicked] = useState(false);
  const [errors, setErrors] = useState({});

  const countryList = [
    "Select a Country",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressL1: "",
    addressL2: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Form starts invalidated. Only if the next button was clicked and there are no errors, form is validated
  useEffect(() => {
    if (nextWasClicked && Object.keys(errors).length < 1) {
      setIsValidated(true);
    }
  }, [errors]);

  // Once form is validated (next clicked and no errors), change page and dispatch form
  useEffect(() => {
    if (isValidated) {
      dispatch(updateOrderDetails(form));
      dispatch(changeOrderFormPage(5));
    }
  }, [isValidated]);

  const generateErrors = () => {
    let tempErrorList = {};
    for (let field in form) {
      if (form[field] == "" && field != "addressL2") {
        tempErrorList[field] = true;
      } 
    }
    setErrors(tempErrorList);
  };

  const handlePrevClick = () => {
    dispatch(changeOrderFormPage(3));
  };

  const handleNextClick = () => {
    setNextWasClicked(true);
    generateErrors();
  };

  return (
    <>
      <p className="progress-bar-text">Progress: 75%</p>
      <ProgressBar percentage={75} />
      <h2>Fill Out Personal Details</h2>
      <p>
        You're almost done! After you fill out this info, we will recieve your
        order and get in contact with you shortly to confirm it. 
      </p>
      <form id="contact-form">
        <div id="questions">
          <div id="names" className="short-fields">
            <input
              className="short-input"
              name="firstName"
              value={form.firstName}
              onChange={e => updateForm(e)}
              placeholder="First Name"
              style={errors.firstName && {border: "1px solid red"}}
            />
            <input
              className="short-input"
              name="lastName"
              value={form.lastName}
              onChange={e => updateForm(e)}
              placeholder="Last Name"
              style={errors.lastName && {border: "1px solid red"}}
            />
          </div>
          <input
            id="contact-email"
            name="email"
            value={form.email}
            onChange={e => updateForm(e)}
            placeholder="Email Address"
            style={errors.email && {border: "1px solid red"}}
          />
          <input
            id="address-line-1"
            name="addressL1"
            value={form.addressL1}
            onChange={e => updateForm(e)}
            placeholder="Address Line 1"
            style={errors.addressL1 && {border: "1px solid red"}}
          />
          <input
            id="address-line-2"
            name="addressL2"
            value={form.addressL2}
            onChange={e => updateForm(e)}
            placeholder="Address Line 2"
          />
          <div id="city-state" className="short-fields">
            <input
              className="short-input"
              name="city"
              value={form.city}
              onChange={e => updateForm(e)}
              placeholder="City"
              style={errors.city && {border: "1px solid red"}}
            />
            <input
              className="short-input"
              name="state"
              value={form.state}
              onChange={e => updateForm(e)}
              placeholder="State/Province/Region"
              style={errors.state && {border: "1px solid red"}}
            />
          </div>
          <div id="zip-country" className="short-fields">
            <input
              id="postal-code"
              name="postalCode"
              value={form.postalCode}
              onChange={e => updateForm(e)}
              placeholder="Postal Code"
              style={errors.postalCode && {border: "1px solid red"}}
            />
            <select
              id="country"
              name="country"
              value={form.country}
              onChange={e => updateForm(e)}
              style={errors.country && {border: "1px solid red"}}
            >
              {countryList.map(country => {
                return <option value={country}>{country}</option>;
              })}
            </select>
          </div>
        </div>
      </form>
      <OrderFormNav
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        isSubmit={true}
      />
    </>
  );
};

export default OrderFormP4;
