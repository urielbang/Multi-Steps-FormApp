export default function SelectPlan() {
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
      </div>
    </>
  );
}
