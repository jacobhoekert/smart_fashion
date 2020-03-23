import React, {useState, useEffect} from 'react';
import DropDownMenu from './DropDownMenu';
import OrderFormNav from './OrderFormNav';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector} from 'react-redux';
import { updateOrderPackage, changeOrderFormPage } from '../redux/actions/orderActions';
import '../styles/order_form.scss';
import '../styles/style_card.scss';

const OrderFormP1 = () => {
  const [hasSuit, setHasSuit] = useState(false);
  const [hasTuxedo, setHasTuxedo] = useState(false);
  const [hasPantsJacket, setHasPantsJacket] = useState(false);
  const [hasShirt, setHasShirt] = useState(false);
  const [hasOvercoat, setHasOvercoat] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState(0);
  const [selectedSuitQuality, setSelectedSuitQuality] = useState(0);
  const [selectedTuxedoQuality, setSelectedTuxedoQuality] = useState(0);
  const [selectedPantsJacketQuality, setSelectedPantsJacketQuality] = useState(0);
  const [selectedShirtQuality, setSelectedShirtQuality] = useState(0);
  const [selectedOvercoatQuality, setSelectedOvercoatQuality] = useState(0);
  const [selectedFinalQuality, setSelectedFinalQuality] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  const packageList = [
    "Full Suit Package (Jacket, Pants, Vest, Shirt)",
    "Wedding Tuxedo (Jacket, Pants, Vest, Shirt",
    "Pants and Jacket only",
    "Shirts Only",
    "Golf Package (Shorts, Pants, Polo-Shirt) – $165",
    "Overcoat",
    "Ladies Clothes"
  ]

  const suitQualityList = [
    "Normal – $247",
    "Premium – $314",
    "Luxury – $480"
  ]

  const tuxedoQualityList = [
    "Normal – $314",
    "Premium – $415",
    "Luxury – $612"
  ]

  const pantsJacketQualityList = [
    "Normal – $167",
    "Premium – $247",
    "Luxury – $380"
  ]

  const shirtQualityList = [
    "Normal Cotton – $32",
    "Premium Italian Cotton – $49",
    "Luxury Pure Silk – $82"
  ]

  const overcoatQualityList = [
    "Pure Wool (Starting at $132)",
    "Pure Cashmere (Starting at $182)"
  ]

  const quantityList = [ 1,2,3,4,5 ];

  const handlePrevClick = () => {
    dispatch(changeOrderFormPage(0));
  }

  const handleNextClick = () => {
    dispatch(updateOrderPackage({
      name: packageList[selectedPackage],
      fabricQuality: selectedFinalQuality,
      quantity: quantityList[selectedQuantity]
    }));
    dispatch(changeOrderFormPage(2));
  }

  useEffect(() => {
    console.log(selectedPackage);
    switch(selectedPackage) {
      case 0: // Full Suit Package (Jacket, Pants, Vest, Shirt)
        setHasSuit(true);
        setHasTuxedo(false);
        setHasPantsJacket(false);
        setHasShirt(false);
        setHasOvercoat(false);
        break;
      case 1: // Wedding Tuxedo (Jacket, Pants, Vest, Shirt)
        setHasSuit(false);
        setHasTuxedo(true);
        setHasPantsJacket(false);
        setHasShirt(false);
        setHasOvercoat(false);
        break;
      case 2: // Pants and Jacket only
        setHasSuit(false);
        setHasTuxedo(false);
        setHasPantsJacket(true);
        setHasShirt(false);
        setHasOvercoat(false);
        break;
      case 3:// Shirts Only:
        setHasSuit(false);
        setHasTuxedo(false);
        setHasPantsJacket(false);
        setHasShirt(true);
        setHasOvercoat(false);
        break;
      case 5: // Overcoat
        setHasSuit(false);
        setHasTuxedo(false);
        setHasPantsJacket(false);
        setHasShirt(false);
        setHasOvercoat(true);
        break;
      default:
        setHasSuit(false);
        setHasTuxedo(false);
        setHasPantsJacket(false);
        setHasShirt(false);
        setHasOvercoat(false);
        break;
    }
  }, [selectedPackage])
  

  return (
    <>
      <p className="progress-bar-text">Progress: 0%</p>
      <ProgressBar percentage={0} />
      <h2>Select Package, Fabric, and Quantity</h2>
      <div className="label"><strong>What Would You Like?</strong></div>
      <DropDownMenu 
        list={packageList}
        selectedItem={selectedPackage}
        setSelectedItem={setSelectedPackage}
      />
      { hasSuit && <>
                    <div className="label"><strong>Full Suit Fabric Quality</strong></div>
                    <DropDownMenu 
                      list={suitQualityList}
                      selectedItem={selectedSuitQuality}
                      setSelectedItem={setSelectedSuitQuality}
                      selectedFinalQuality={selectedFinalQuality}
                      setSelectedFinalQuality={setSelectedFinalQuality}
                    /> 
                  </>}
      { hasTuxedo && <>
                      <div className="label"><strong>Tuxedo Fabric Quality</strong></div>
                      <DropDownMenu 
                        list={tuxedoQualityList}
                        selectedItem={selectedTuxedoQuality}
                        setSelectedItem={setSelectedTuxedoQuality}
                        selectedFinalQuality={selectedFinalQuality}
                        setSelectedFinalQuality={setSelectedFinalQuality}
                        /> 
                    </>}           
      { hasPantsJacket && <>
                        <div className="label"><strong>Pants & Jacket Fabric Quality</strong></div>
                        <DropDownMenu 
                          list={pantsJacketQualityList}
                          selectedItem={selectedPantsJacketQuality}
                          setSelectedItem={setSelectedPantsJacketQuality}
                          selectedFinalQuality={selectedFinalQuality}
                          setSelectedFinalQuality={setSelectedFinalQuality}
                        /> 
                      </> } 
      { hasShirt && <>
                      <div className="label"><strong>Shirt Fabric Quality</strong></div>
                      <DropDownMenu 
                        list={shirtQualityList}
                        selectedItem={selectedShirtQuality}
                        setSelectedItem={setSelectedShirtQuality}
                        selectedFinalQuality={selectedFinalQuality}
                        setSelectedFinalQuality={setSelectedFinalQuality}
                      /> 
                    </> }
      { hasOvercoat && <>
                        <div className="label"><strong>Overcoat Fabric Quality</strong></div>
                        <DropDownMenu 
                          list={overcoatQualityList}
                          selectedItem={selectedOvercoatQuality}
                          setSelectedItem={setSelectedOvercoatQuality}
                          selectedFinalQuality={selectedFinalQuality}
                          setSelectedFinalQuality={setSelectedFinalQuality}
                        /> 
                        <p>The price is based on the length of the coat. We will work with you once we figure out the style.</p>
                      </> }                
      <div className="label"><strong>Quantity</strong></div>
      <DropDownMenu 
        list={quantityList}
        selectedItem={selectedQuantity}
        setSelectedItem={setSelectedQuantity}
      />
      <OrderFormNav 
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </>
  )
}

export default OrderFormP1