import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
export default function SelectPlan() {
  const handleClickSwitch = (e) => {
    console.log(e.target.checked);
  };
  return (
    <>
      <div className="containerPlan">
        <h1>Select your plan</h1>
        <span>You have the option of monthly yearly billing</span>
        <div className="productsCards">
          <div className="cardPlan">
            <img className="arcadeImg"></img>
            <div>
              <h4>Aracde</h4>
              <span>$9/mo</span>
            </div>
          </div>
          <div className="cardPlan">
            <img className="advancedPic"></img>
            <h4>Advanced</h4>
            <span>$12/mo</span>
          </div>
          <div className="cardPlan">
            <img className="proPic"></img>
            <h4>Pro</h4>
            <span>$15/mo</span>
          </div>
        </div>
        <div className="monathlyOrYearlyContainer">
          <span>Monthly</span>
          <Switch onClick={handleClickSwitch} />
          <span>Yearly</span>
        </div>
        <div className="buttonsSelectPlan">
          <Link to={"/yourInfo"}>
            <button className="goBackBtn">Go back</button>
          </Link>
          <Link to={"/AddOns"}>
            <button className="nextButton">Next Step</button>
          </Link>
        </div>
      </div>
    </>
  );
}
