import "./Post.css";
import Question from "./Question";
import Article from "./Article";
import React, { useState } from "react";

function Post() {
  const [option, setOption] = useState(false);
  const toggleOption = () => setOption(!option);

  return (
    <div className="Post">
      <br></br>
      <body>
        <div class="radio-question">
          <form action="">
            <div>
              <h3>Choose</h3>
              <br />
              <label for="Question">Question</label>
              <input
                type="radio"
                name="option"
                id="title"
                value="{true}"
                onClick={toggleOption}
                defaultChecked
              />
              <label for="Article">Article</label>
              <input
                type="radio"
                name="option"
                id="title"
                value="{false}"
                onClick={toggleOption}
              />
            </div>
          </form>
        </div>
      </body>
      <br></br>
      {option ? <Article /> : <Question />}
    </div>
  );
}

export default Post;
