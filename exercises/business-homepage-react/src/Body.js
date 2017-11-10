import React from "react";

function Body(){
  const styles = {
    height: "330px",
    width: "400px",
    fontSize: "1.5em",
    fontFamily: "serif",
    color: "black",
    fontWeight: "bolder",
    display: "inline-block"
  }
  return(
    <div>
      <h1>Welcome to Your View!
        <img style={styles} src="https://i.ytimg.com/vi/78xRP7z-zGg/maxresdefault.jpg"></img>
      </h1>
          <p>We want to know what you can see from your window.</p>
          <p>The View from each window is unique and we want to know what's your view?</p>
          <p>Take a picture and upload it so we can share it for you.</p>
          <p className="right">We offer several items to help you get the best picture:</p>
          <p className="right">Nikon Coolpix</p>
          <img style={styles} src="https://static.beachcamera.com/Assets/Product/imagesnw400/A0139D0E6D7D4DCA9A22D004189012FA.jpg">
          </img>

          <img style={styles} src="http://cdn2.expertreviews.co.uk/sites/expertreviews/files/2017/10/best_camera_2017_canon_g7_x_mark_2.jpg?itok=GelhQW_b"></img>
          <p className="right">Canon G7 X</p>
  </div>
)};
export default Body;
