import React, {useState, useEffect} from 'react';
import SuitFabricsForm from './SuitFabricsForm';
import ShirtFabricsForm from './ShirtFabricsForm';
import OvercoatFabricsForm from './OvercoatFabricsForm';
import OrderFormNav from './OrderFormNav';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderFabrics, changeOrderFormPage } from '../redux/actions/orderActions';
import '../styles/order_form.scss';
import '../styles/style_card.scss';

const OrderFormP3 = () => {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  const [hasSuit, setHasSuit] = useState(false);
  const [hasShirt, setHasShirt] = useState(false);
  const [hasOvercoat, setHasOvercoat] = useState(false);
  const [hasGolf, setHasGolf] = useState(false);

  const [selectedSuitFabric, setSelectedSuitFabric] = useState(null);
  const [selectedShirtFabric, setSelectedShirtFabric] = useState(null);
  const [selectedOvercoatFabric, setSelectedOvercoatFabric] = useState(null);

  // form validation variables
  const [errorList, setErrorList] = useState([]);
  const [nextWasClicked, setNextWasClicked] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  
  const [suitFabricError, setSuitFabricError] = useState(null);
  const [shirtFabricError, setShirtFabricError] = useState(null);
  const [overcoatFabricError, setOvercoatFabricError] = useState(null);


  useEffect(() => {
    const selectedPackage = globalState.order.package.name;
    switch(selectedPackage) {
      case "Full Suit Package (Jacket, Pants, Vest, Shirt)":
      case "Wedding Tuxedo (Jacket, Pants, Vest, Shirt":
        setHasSuit(true);
        setHasShirt(true);
        break;
      case "Pants and Jacket only":
      case "Ladies Clothes":
        setHasSuit(true);
        break;
      case "Shirts Only":
        setHasShirt(true);
        break;
      case "Golf Package (Shorts, Pants, Polo-Shirt) – $165":
        setHasGolf(true);
        setHasSuit(true);
        setHasShirt(true);
        break;
      case "Overcoat":
        setHasOvercoat(true);
        break;
      default:
        break;
    }
  }, []);

  const suitFabricsList = [
    "Black",
    "Grey",
    "Tan",
    "Red",
    "Maroon",
    "Dark Blue",
    "Light Blue",
    "Sky Blue",
    "Dark Grey",
    "Dark Tan",
    "Dark Purple",
    "Light Blue Pattern",
    "Green Pattern",
    "Red Pattern",
    "Dark Blue Pattern",
    "Dark Grey Pattern",
    "Light Grey Pattern",
    "Orange Pattern",
    "Grey & Light Blue Pattern",
    "Tan Pattern"
  ]

  const shirtFabricsList = [
    "Black",
    "Dark Blue",
    "Light Grey",
    "Dark Purple",
    "Light Pink",
    "Dark Grey",
    "White",
    "Blue",
    "Light Purple",
    "Red",
    "Light Blue",
    "Tan",
    "Light Green",
    "Very Dark Blue",
    "Dark Red/Maroon",
    "Brown",
    "Purple Checkered Pattern 1",
    "Purple White Blue Checkered Pattern 2",
    "Purple White Checkered Pattern 3",
    "Red Light Blue Checkered Pattern 4",
    "Blue Purple Checkered Pattern 5",
    "Yellow Blue Checkered Pattern 6",
    "Purple Dark Grey Checkered Pattern 7"
  ]

  const overcoatFabricsList = [
    "Tan",
    "Black",
    "Dark Blue",
    "Dark Grey",
    "Grey"
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
      dispatch(updateOrderFabrics({
        suitFabric: suitFabricsList[selectedSuitFabric],
        shirtFabric: shirtFabricsList[selectedShirtFabric],
        overcoatFabric: overcoatFabricsList[selectedOvercoatFabric],
      }));
      dispatch(changeOrderFormPage(4));
    }
  }, [isValidated])

  const generateErrors = () => {
    let tempErrorList = [];
    if (hasSuit && selectedSuitFabric == undefined) {
      if (hasGolf) {
        tempErrorList.push("You must choose a pants/shorts fabric");
      } else {
        tempErrorList.push("You must choose a suit fabric");
      }
      setSuitFabricError(true);
    }
    if (hasShirt && selectedShirtFabric == undefined) {
      if (hasGolf) {
        tempErrorList.push("You must choose a polo shirt color");
      } else {
        tempErrorList.push("You must choose a shirt fabric");
      }
      setShirtFabricError(true);
    }
    if (hasOvercoat && selectedOvercoatFabric == undefined) {
      tempErrorList.push("You must choose an overcoat fabric");
      setOvercoatFabricError(true);
    }
 
    setErrorList(tempErrorList); 
  }
    
  const handlePrevClick = () => {
    dispatch(changeOrderFormPage(2));
  }

  const handleNextClick = () => {
    setNextWasClicked(true);
    generateErrors();
  }

  return (
    <>
      <p className="progress-bar-text">Progress: 50%</p>
      <ProgressBar percentage={50} />
      <h2>Select Fabric/Color</h2>
      <p>If you don’t know exactly what you’re looking for, there is a place where you can upload a photo below to give us an example. Or you can contact us to get help from a fashion expert.</p>
      { !isValidated && errorList.map((error) => {
                          return <h4 style={{color: "red"}}>{error}</h4>
                        })}
      { !hasOvercoat && <OrderFormNav 
                          handlePrevClick={handlePrevClick}
                          handleNextClick={handleNextClick}
                        /> }
      { hasSuit && <SuitFabricsForm
                      list={suitFabricsList} 
                      selectedSuitFabric={selectedSuitFabric} 
                      setSelectedSuitFabric={setSelectedSuitFabric}
                      error={suitFabricError}
                      setError={setSuitFabricError}
                      isGolf={hasGolf}
                    /> }
      { hasShirt && <ShirtFabricsForm
                      list={shirtFabricsList} 
                      selectedShirtFabric={selectedShirtFabric} 
                      setSelectedShirtFabric={setSelectedShirtFabric}
                      error={shirtFabricError}
                      setError={setShirtFabricError}
                      isGolf={hasGolf}
                    /> }
      { hasOvercoat && <OvercoatFabricsForm
                        list={overcoatFabricsList} 
                        selectedOvercoatFabric={selectedOvercoatFabric} 
                        setSelectedOvercoatFabric={setSelectedOvercoatFabric}
                        error={overcoatFabricError}
                        setError={setOvercoatFabricError}
                      /> }
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

export default OrderFormP3