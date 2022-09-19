//make sure to change db if it does not work
import { db } from "../utils/firebase";
import { useState, useEffect } from "react";
import "./QuestionPage.css";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { BiRefresh } from "react-icons/bi";

function QuestionPage() {
  const [questions, setQuestions] = useState([]);

  const questionCollectionRef = collection(db, "questions");
  useEffect(() => {
    onSnapshot(questionCollectionRef, (snapshot) => {
      setQuestions(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  const handleView = (id) => {
    const questionClone = [...questions];
    questionClone.forEach((question) => {
      if (question.id === id) {
        question.viewing = !question.viewing;
      } else {
        question.viewing = false;
      }
    });
    setQuestions(questionClone);
  };

  const removeQuestion = (id) => {
    deleteDoc(doc(db, "questions", id));
  };

  const [search, SetSearch] = useState("");
  const SearchQuestion = (e) => {
    e.preventDefault();
    setQuestions(
      questions.filter(
        (question) =>
          question.title.toLowerCase().includes(search.toLowerCase()) ||
          question.tags.toLowerCase().includes(search.toLowerCase()) ||
          question.date.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="QuestionPage">
      <h1>Questions Page</h1>
      <form onSubmit={SearchQuestion}>
        <input
          onChange={(e) => {
            SetSearch(e.target.value);
          }}
        />
        <div className="divider"></div>
        <button className="search" type="submit">
          Search
        </button>
        <div className="divider"></div>
        <button className="search" onClick={refreshPage}>
          <BiRefresh />
        </button>
      </form>
      <div className="questions">
        {questions.map((question, i) => (
          <div className="question" key={question.id}>
            <h3>{question.title}</h3>
            {question.viewing && (
              <div>
                <p dangerouslySetInnerHTML={{ __html: question.desc }}></p>
              </div>
            )}

            <h4>{question.tags}</h4>
            <h4>{question.date}</h4>
            <div className="QPbuttons">
              <button onClick={() => handleView(question.id)}>
                View {question.viewing ? "less" : "more"}
              </button>
              <div onClick={() => removeQuestion(question.id)}>
                <button className="remove">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuestionPage;
