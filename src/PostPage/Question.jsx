import React from "react";
import "./Question.css";
import HomeButton from "./HomeButton";
import PostButton from "./PostButton";
import moment from "moment";

import { db } from "../utils/firebase";
import { useState, useEffect } from "react";
// import { storage } from "../utils/firebase";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function Question() {
  // const [imageUpload, setImageUpload] = useState(null);
  // const uploadImage = () => {
  //   if (imageUpload == null) return;
  // };
  const [questions, setQuestions] = useState([]);

  const [form, setForm] = useState({
    title: "",
    tags: "",
    desc: "",
    date: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.desc || !form.tags) {
      alert("Please fill in all fields");
      return;
    }

    addDoc(questionCollectionRef, form);
    setForm({
      title: "",
      tags: "",
      desc: "",
    });
    alert("Submitted successfully");
  };

  return (
    <body>
      <div class="radio-question">
        <form onSubmit={handleSubmit}>
          <br />
          <div class="form-group">
            <h3>What do you want to ask or share</h3>
          </div>
          <br />
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          {/* <div class="form-group">
            <label for="image">Add image</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button onClick={uploadImage} id="upload">
              Upload Image
            </button>
          </div> */}

          <div class="form-group">
            <label for="tags">Tags</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
          </div>

          <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>

          <div class="form-group">
            <label for="article-text">Describe Your Problem</label>
            <textarea
              name="article-text"
              id="article-text"
              cols="30"
              rows="10"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            ></textarea>
          </div>

          <PostButton />
          <HomeButton />
        </form>
        {/* {JSON.stringify(form)} */}
      </div>
    </body>
  );
}
export default Question;
