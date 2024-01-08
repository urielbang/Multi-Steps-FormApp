import { Link, Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div className="card">
      <div id="sidebar">
        <nav>
          <ul className="listLinks">
            <li className="buttonChoose">
              <Link to={`/yourInfo`}>
                <button>1</button>
              </Link>
              <div className="txtChoose">
                <span>STEP 1</span>
                <p>YOUR INFO</p>
              </div>
            </li>
            <li className="buttonChoose">
              <Link to={`/SelectPlan`}>
                <button>2</button>
              </Link>
              <div className="txtChoose">
                <span>STEP 2</span>
                <p>SELECT PLAN</p>
              </div>
            </li>
            <li className="buttonChoose">
              <Link to={`AddOns`}>
                <button>3</button>
              </Link>
              <div className="txtChoose">
                <span>STEP 3</span>
                <p>ADD-ONS</p>
              </div>
            </li>
            <li className="buttonChoose">
              <Link to={`/Summary`}>
                <button>4</button>
              </Link>
              <div className="txtChoose">
                <span>STEP 4</span>
                <p>SUMMARY</p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
