import { Link } from "react-router-dom";
function yourInfo() {
  return (
    <div>
      <h1>Personal info</h1>
      <span> Please provide your name, email address, and phone number.</span>
      <form className="formInfo">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="e.g. Stephen King"></input>
        <label htmlFor="emailInput">Email Address</label>
        <input
          id="emailInput"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        ></input>
        <label htmlFor="phoneInput">Phone Number</label>
        <input
          id="phoneInput"
          type="number"
          placeholder=" e.g. +1 234 567 890"
        ></input>
      </form>
      <div className="containerNextButton">
        <Link to={"/SelectPlan"}>
          <button className="nextButton">Next Step</button>
        </Link>
      </div>
    </div>
  );
}
export default yourInfo;
