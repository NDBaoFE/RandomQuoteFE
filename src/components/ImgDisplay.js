import React from "react";
import styled from "styled-components";
function ImgDisplay({
  img,
  text,
  author,
  handleChange,
  handlePng,
  handleJpeg,
  handleUpload,
  handleRandomImg,
  handleRandomQoute,
  handleChangeAuthor,
}) {
  return (
    <Container>
      <Result id="my-img">
        <div>
          <img
            src={img}
            className="img-fluid img-thumbnail"
            alt=""
            width="100%"
          />
        </div>
        <h2 className="topText">{text}</h2>
        <h3 className="author">{author}</h3>
      </Result>
      <Editor>
        <div className="upload-img">
          <h2>Upload Image Or Try Random Image</h2>
          <input
            onChange={handleUpload}
            type="file"
            className="custom-file-input"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            accept="image/x-png,image/gif,image/jpeg"
          />
          <Button
            type="button"
            className="btn btn-outline-info"
            onClick={handleRandomImg}
          >
            Random Img
          </Button>
        </div>
        <div className="adding-text">
          <h2>Adding Text</h2>
          <input
            className="form-control border-info mb-2"
            type="text"
            name="text"
            placeholder="Adding Author"
            value={author}
            onChange={handleChangeAuthor}
          />
          <h2>Adding Text</h2>
          <input
            className="form-control border-info mb-2"
            type="text"
            name="text"
            placeholder="Adding Text"
            value={text}
            onChange={handleChange}
          />
          <Button
            type="button"
            className="btn btn-outline-info"
            onClick={handleRandomQoute}
          >
            Random Qoute
          </Button>
        </div>
        <div className="dowload">
          <h2>Dowload</h2>
          <Button
            type="button"
            className="btn btn-outline-info"
            onClick={handlePng}
          >
            Download PNG
          </Button>
          <Button
            type="button"
            className="btn btn-outline-info"
            onClick={handleJpeg}
          >
            Download JPEG
          </Button>
        </div>
      </Editor>
    </Container>
  );
}

export default ImgDisplay;
const Container = styled.div`
  min-width: 60vw;
  min-height: 70vh;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgb(0 0 0 / 20%);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Result = styled.div`
  position: relative;
  div {
    width: 500px;
    height: 100%;
  }
  img {
    max-width: 100%;
    object-fit: contain;
    max-height: 100%;
  }
  h2 {
    color: #fff;
    padding: 8px;
    font-size: 50px;
    position: absolute;
    text-align: center;
    transform: translate(0, 0);
    width: 100%;
    top: -5%;
    font-family: "Caveat", cursive;
  }
  h3 {
    color: #fff;
    font-size: 25px;
    position: absolute;
    text-align: center;
    transform: translate(20%, -100%);
    width: 100%;
    top: 85%;
    font-family: "Caveat", cursive;
  }
  input {
    background: transparent;
    width: 200px;
    padding: 1em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;
const Editor = styled.div``;
const Button = styled.button`
  background: transparent;
  width: 150px;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 12px;
`;
