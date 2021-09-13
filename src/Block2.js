import React from "react";
import "./Block2.css";

import image1 from "./block-1-img-1.png";
import image2 from "./block-2-img.png";
import image3 from "./block-3-img.png";

export default function Block2() {
  return (
    <div className="container-2">
      <div className="block-1">
        <div className="block-1-left">
          <h2 className="block-2-h2">1. Project management</h2>
          <p className="block-2-p">Add new project and tasks in Kanban board</p>
        </div>
        <div className="block-1-right">
          <img className="block-1-img" src={image1} />
        </div>
      </div>

      <div className="block-2">
        <div className="block-2-left">
          <img className="block-2-img" src={image2} />
        </div>
        <div className="block-2-right">
          <h2 className="block-2-h2">2. Chat</h2>
          <p className="block-2-p">
            communicate in real time and share documents
          </p>
        </div>
      </div>

      <div className="block-3">
        <div className="block-3-left">
          <h2 className="block-2-h2">3. Track productivity</h2>
          <p className="block-2-p">
            Build in dashboard to see team productivity and analytics
          </p>
        </div>
        <div className="block-3-right">
          <img className="block-3-img" src={image3} />
        </div>
      </div>
    </div>
  );
}
