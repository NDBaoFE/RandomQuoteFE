import React from "react";

import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import productApi from "../utils/ProductApi";
import ImgDisplay from "../components/ImgDisplay";
import { useState } from "react";
function QouteGen() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(
    "https://assets.imgix.net/unsplash/motorbike.jpg"
  );
  const [author, setAuthor] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setText(`${value}`);
  };
  const handleChangeAuthor = (event) => {
    const { value } = event.target;
    setAuthor(`${value}`);
  };
  const getRandomImg = async () => {
    const path = await productApi.getImg();
    setImg(path.data.urls.full);
  };
  const getRandomQoute = async () => {
    const path = await productApi.getQoute();
    let index = Math.floor(Math.random() * 102);
    setText(`"${path.data.quotes[index].quote}"`);
    setAuthor(`${path.data.quotes[index].author}`);
  };

  //Add local image
  const handleUpload = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const uploadFile = URL.createObjectURL(files[0]);
    setImg(uploadFile);
  };

  //Add random image
  const handleRandom = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allTextImgs.length);
    const randTextImg = this.state.allTextImgs[randNum].url;
    this.setState({ randomImg: randTextImg });
  };

  //Download PNG image
  const handlePng = () => {
    htmlToImage
      .toPng(document.getElementById("my-img"))
      .then(function (dataUrl) {
        download(dataUrl, "your-great-img.png");
      });
  };

  // Download JPEG image
  const handleJpeg = () => {
    htmlToImage
      .toJpeg(document.getElementById("my-img"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "your-great-img.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <ImgDisplay
      handleChange={handleChange}
      handleRandom={handleRandom}
      handlePng={handlePng}
      handleJpeg={handleJpeg}
      handleUpload={handleUpload}
      handleRandomImg={getRandomImg}
      handleChangeAuthor={handleChangeAuthor}
      handleRandomQoute={getRandomQoute}
      text={text}
      img={img}
      author={author}
    />
  );
}

export default QouteGen;
