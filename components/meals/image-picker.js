"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [imagePicked, setImagePicked] = useState();
  const imagePick = useRef();
  function handleImagePick() {
    imagePick.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) return;
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePicked(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!imagePicked && <p>No Image Picked Yet</p>}
            {imagePicked && <Image src={imagePicked} alt="picked image" fill />}
          </div>
          <input
            className={classes.input}
            id={name}
            name={name}
            type="file"
            accept="image/png image/jpeg"
            ref={imagePick}
            onChange={handleImageChange}
          />
          <button
            className={classes.button}
            type="button"
            onClick={handleImagePick}
          >
            Pick a Image
          </button>
        </div>
      </div>
    </>
  );
}
