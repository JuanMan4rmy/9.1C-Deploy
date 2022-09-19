import React, { useRef } from "react";
import "./Article.css";
import HomeButton from "./HomeButton";
import PostButton from "./PostButton";
import { useState, useEffect } from "react";
import { storage } from "../utils/firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { v4 } from "uuid";

import { db } from "../utils/firebase";
// import { storage } from "../utils/firebase";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function Article() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");
  const uploadImage = (event) => {
    event.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded");
    });
  };

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {

  //       });
  //     });
  //   });
  // }, []);

  const [articles, setArticles] = useState([]);

  const [form, setForm] = useState({
    title: "",
    abstract: "",
    tags: "",
    text: "",
  });

  const articleCollectionRef = collection(db, "articles");
  useEffect(() => {
    onSnapshot(articleCollectionRef, (snapshot) => {
      setArticles(
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
    if (!form.title || !form.text || !form.tags || !form.abstract) {
      alert("Please fill in all fields");
      return;
    }

    addDoc(articleCollectionRef, form);
    setForm({
      title: "",
      abstract: "",
      tags: "",
      text: "",
    });
    alert("Submitted successfully");
  };

  const [url, setUrl] = useState();

  // useEffect(() => {
  //   const func = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, {imageUpload.name + v4()});
  //     await getDownloadURL(reference).then((x) => {
  //       setUrl(x);
  //     });
  //   };
  // }, []);

  return (
    <body>
      <div class="radio-article">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <h3>What do you want to ask or share</h3>
          </div>

          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div class="form-group">
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
          </div>

          <div class="form-group">
            <label for="abstract">Abstract</label>
            <input
              type="text"
              value={form.abstract}
              onChange={(e) => setForm({ ...form, abstract: e.target.value })}
            />
          </div>

          <div class="form-group">
            <label for="tags">Tags</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
          </div>

          <div class="form-group">
            <label for="article-text">Article Text</label>
            <textarea
              name="article-text"
              id="article-text"
              cols="30"
              rows="10"
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
            ></textarea>
          </div>

          <PostButton />
          <HomeButton />
        </form>
      </div>
    </body>
  );
}
export default Article;
