import React from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "../navbar";
import { comicsList } from "./data.js";
import { useRouter } from "next/router";

export default function ComicPage() {
  const router = useRouter();
  const id = router.query;

  const currentComic = comicsList.find((comic) => comic.id === id.id);

  console.log("ID", id);
  // console.log('DATA', data)
  console.log("currentComic", currentComic);

  return (
    <div>
      <h1 className={styles.title}>ale rodriguez</h1>

      <div className={styles.layoutComics}>
        <Navbar />

        <h2>{currentComic.description}</h2>

        {currentComic.images.map((image) => {
          return (
            <div className={styles.containerComics}>
              <img src={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
