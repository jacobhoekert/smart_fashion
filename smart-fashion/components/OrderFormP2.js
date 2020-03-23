import React, {useState, useEffect} from 'react';
import SuitStylesForm from './SuitStylesForm';
import ShirtStylesForm from './ShirtStylesForm';
import CuffStylesForm from './CuffStylesForm';
import CollarStylesForm from './CollarStylesForm';
import OvercoatStylesForm from './OvercoatStylesForm';
import LadiesStylesForm from './LadiesStylesForm';
import OrderFormNav from './OrderFormNav';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderStyles, changeOrderFormPage } from '../redux/actions/orderActions';
import '../styles/order_form.scss';
import '../styles/style_card.scss';

const OrderFormP2 = () => {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  // selected package variables
  const [hasSuit, setHasSuit] = useState(false);
  const [hasShirt, setHasShirt] = useState(false);
  const [hasGolf, setHasGolf] = useState(false);
  const [hasOvercoat, setHasOvercoat] = useState(false);
  const [hasLadies, setHasLadies] = useState(false);

  // selected styles 
  const [selectedSuitStyle, setSelectedSuitStyle] = useState(null);
  const [selectedShirtStyle, setSelectedShirtStyle] = useState(null);
  const [selectedCuffStyle, setSelectedCuffStyle] = useState(null);
  const [selectedCollarStyle, setSelectedCollarStyle] = useState(null);
  const [selectedOvercoatStyle, setSelectedOvercoatStyle] = useState(null);
  const [selectedLadiesStyle, setSelectedLadiesStyle] = useState(null);

  // form validation variables
  const [errorList, setErrorList] = useState([]);
  const [nextWasClicked, setNextWasClicked] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const [suitStyleError, setSuitStyleError] = useState(null);
  const [shirtStyleError, setShirtStyleError] = useState(null);
  const [cuffStyleError, setCuffStyleError] = useState(null);
  const [collarStyleError, setCollarStyleError] = useState(null);
  const [overcoatStyleError, setOvercoatStyleError] = useState(null);
  const [ladiesStyleError, setLadiesStyleError] = useState(null);

  // set which type of style forms to display
  useEffect(() => {
    const selectedPackage = globalState.order.package.name;
    switch(selectedPackage) {
      case "Full Suit Package (Jacket, Pants, Vest, Shirt)":
      case "Wedding Tuxedo (Jacket, Pants, Vest, Shirt":
        setHasSuit(true);
        setHasShirt(true);
        break;
      case "Pants and Jacket only":
        setHasSuit(true);
        break;
      case "Shirts Only":
        setHasShirt(true);
        break;
      case "Golf Package (Shorts, Pants, Polo-Shirt) – $165":
        setHasGolf(true);
        break;
      case "Overcoat":
        setHasOvercoat(true);
        break;
      case "Ladies Clothes":
        setHasLadies(true);
        break;
      default:
        break;
    }
  }, []);

  const suitStylesList = [
    "one-button",
    "two-button",
    "three-button",
    "double-breasted"
  ]

  const shirtStylesList = [
    "regular-fit",
    "tailored-fit",
    "slim-fit"
  ]

  const cuffStylesList = [
    "single-cuff",
    "double-cuff"
  ]

  const collarStylesList = [
    "classic",
    "button-down",
    "wing"
  ]

  const overcoatStylesList = [1,2,3,4,5,6];

  const ladiesStylesList = [
    "Business Suit",
    "Blouse & Skirt",
    "Dress"
  ]

  // Form starts invalidated. Only if the next button was clicked and there are no errors, form is validated
  useEffect(() => {
    if (nextWasClicked && errorList.length < 1) {
      setIsValidated(true);
    }
  }, [errorList])

  // Once form is validated (next clicked and no errors), change page and dispatch selections
  useEffect(() => {
    if (isValidated) {
      dispatch(updateOrderStyles({
        suitStyle: suitStylesList[selectedSuitStyle],
        shirtStyle: shirtStylesList[selectedShirtStyle],
        cuffStyle: cuffStylesList[selectedCuffStyle],
        collarStyle: collarStylesList[selectedCollarStyle],
        overcoatStyle: overcoatStylesList[selectedOvercoatStyle],
        ladiesStyle: ladiesStylesList[selectedLadiesStyle]
      }));
      dispatch(changeOrderFormPage(3));
    }
  }, [isValidated])

  const generateErrors = () => {
    let tempErrorList = [];
    if (hasSuit && selectedSuitStyle == undefined) {
      tempErrorList.push("You must choose a suit style");
      setSuitStyleError(true);
    }
    if (hasShirt) {
      if (selectedShirtStyle == undefined) {
        tempErrorList.push("You must choose a shirt style");
        setShirtStyleError(true);
      }
      if (selectedCuffStyle == undefined) {
        tempErrorList.push("You must choose a cuff style");
        setCuffStyleError(true);
      }
      if (selectedCollarStyle == undefined) {
        tempErrorList.push("You must choose a collar style");
        setCollarStyleError(true);
      }
    }
    if (hasOvercoat && selectedOvercoatStyle == undefined) {
      tempErrorList.push("You must choose an overcoat style");
      setOvercoatStyleError(true);
    }
    if (hasLadies && selectedLadiesStyle == undefined) {
      tempErrorList.push("You must choose a ladies style");
      setLadiesStyleError(true);
    }

    setErrorList(tempErrorList); 
  }

  const handlePrevClick = () => {
    dispatch(changeOrderFormPage(1));
  }

  const handleNextClick = () => {
    setNextWasClicked(true);
    generateErrors();
  }

  return (
    <>
      <p className="progress-bar-text">Progress: 25%</p>
      <ProgressBar percentage={25} />
      <h2>Select Style</h2>
      <p>If you don’t know exactly what you’re looking for, there is a place where you can upload a photo below to give us an example. Or you can contact us to get help from a fashion expert.</p>
      { !isValidated && errorList.map((error) => {
                          return <h4 style={{color: "red"}}>{error}</h4>
                        })}
      { hasSuit && hasShirt && 
                      <OrderFormNav 
                        handlePrevClick={handlePrevClick}
                        handleNextClick={handleNextClick}
                      /> }
      { hasSuit && <SuitStylesForm
                      list={suitStylesList} 
                      selectedSuitStyle={selectedSuitStyle} 
                      setSelectedSuitStyle={setSelectedSuitStyle}
                      error={suitStyleError}
                      setError={setSuitStyleError}
                    /> }
      { hasShirt && <>
                      <ShirtStylesForm
                        list={shirtStylesList} 
                        selectedShirtStyle={selectedShirtStyle} 
                        setSelectedShirtStyle={setSelectedShirtStyle}
                        error={shirtStyleError}
                        setError={setShirtStyleError}
                      /> 
                      <CuffStylesForm 
                        list={cuffStylesList} 
                        selectedCuffStyle={selectedCuffStyle} 
                        setSelectedCuffStyle={setSelectedCuffStyle}
                        error={cuffStyleError}
                        setError={setCuffStyleError}
                      />
                      <CollarStylesForm 
                        list={collarStylesList} 
                        selectedCollarStyle={selectedCollarStyle} 
                        setSelectedCollarStyle={setSelectedCollarStyle}
                        error={collarStyleError}
                        setError={setCollarStyleError}
                      />
                    </> }
      { hasOvercoat && <OvercoatStylesForm
                        list={overcoatStylesList} 
                        selectedOvercoatStyle={selectedOvercoatStyle} 
                        setSelectedOvercoatStyle={setSelectedOvercoatStyle}
                        error={overcoatStyleError}
                        setError={setOvercoatStyleError}
                      /> }
      { hasLadies && <LadiesStylesForm
                      list={ladiesStylesList} 
                      selectedLadiesStyle={selectedLadiesStyle} 
                      setSelectedLadiesStyle={setSelectedLadiesStyle}
                      error={ladiesStyleError}
                      setError={setLadiesStyleError}
                    /> }
      { hasGolf && <p>The golf package only has 1 style. Click next to go to the fabrics and colors.</p>}
      { !isValidated && errorList.map((error) => {
                          return <h4 style={{color: "red"}}>{error}</h4>
                        })}
      <OrderFormNav 
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </>
  )
}

export default OrderFormP2