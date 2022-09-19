import React from "react";
import city from "../City.jpg";
import CardList from "../Cardlist";
import CardList2 from "../Cardlist_2";
import Footer from "../Footer/Footer";
import "../HomeButton";
import "../App.css";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

function Homepage() {
  // const [user, setUser] = useState(null);
  // const auth = getAuth();
  // useEffect(() => {
  //   setUser(auth.currentUser);
  // }, []);

  return (
    <div className="App">
      <body>
        <div>
          <img src={city} alt="Website Background" width="1920" height="500" />
        </div>
        <div className="LoggedInUser">
          <h1 className="UserText">Welcome</h1>
        </div>

        <div className="HomeBody">
          <br></br>
          <br></br>
          <div>
            <h1>Featured Articles</h1>
          </div>

          <br></br>
          <br></br>

          <div id="center">
            <CardList />
          </div>

          <br></br>
          <br></br>

          <div class="form-box">
            <button class="buttons" type="submit" id="centre">
              See More Articles
            </button>
          </div>

          <br></br>
          <br></br>

          <div>
            <h1>Featured Tutorials</h1>
          </div>

          <br></br>
          <br></br>

          <div id="center">
            <CardList2 />
          </div>

          <br></br>
          <br></br>

          <div class="form-box">
            <button class="buttons" type="submit" id="centre">
              See More Tutorials
            </button>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div class="box">
          <label>SIGN UP FOR OUR DAILY INSIDER</label>
          <form
            action="/sendemail"
            id="contact-form"
            method="POST"
            onsubmit="setTimeout(function(){window.location.reload();},500);"
          >
            <div class="form-box">
              <input type="email" name="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>

        <Footer />
      </body>
    </div>
  );
}
export default Homepage;
