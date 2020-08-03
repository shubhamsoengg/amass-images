import React, { Component } from "react";
import "./styles/ImagesPanel.css";

export default class ImagesPanel extends Component {
  render() {
    return (
      <div className="images-panel">
        {this.props.images.map((image) => {
          return (
            <div
              className="thumbnail-image-container"
              key={image.id}
              onClick={() => this.props.getImage(image)}
            >
              <img src={image.src} className="thumbnail-image" />
            </div>
          );
        })}
      </div>
    );
  }
}
