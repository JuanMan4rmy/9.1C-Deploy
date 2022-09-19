import InputExampleActionIconButton from "../Searchbox";
import "../HomeButton";
import "../App.css";
import HomeButton from "../HomeButton";
import { Outlet, Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <div class="box_2">
        <Link className="Link" to="/home">
          <label id="searchlabel">DEV@DEAKIN</label>
        </Link>

        <InputExampleActionIconButton />

        <div class="headerbutton">
          <Link className="link" to="/post">
            <HomeButton class="user buttons" type="submit">
              POST
            </HomeButton>
          </Link>
          <div className="divider"></div>
          <Link className="link" to="/question">
            <HomeButton class="user buttons" type="submit">
              QUESTIONS
            </HomeButton>
          </Link>
          <div className="divider"></div>
          <Link className="link" to="/login">
            <HomeButton class="user buttons" type="submit">
              LOGIN
            </HomeButton>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default NavigationBar;
