import React, { Component } from "react";
import "./hotspring.css";
import HotSpring from "../../assets/hotSpring.jpg";
import { Link } from "react-router-dom";

class CardHotSpring extends Component {
  render() {
    return (
      <div className="hikingContentWrapper">
        <div className="hikingContent">
          <div className="hikingImgWrapper">
            <img src={HotSpring} alt="hiking" />
            <Link to="/">
              <div className="backToHome">
                <h3>
                  <i class="fas fa-arrow-alt-circle-left"></i>
                </h3>
              </div>
            </Link>
          </div>
          <div className="hikingInfo">
            <div className="hikingInfoWrapper">
              <div className="cardTitle">
                <h1>Relax your body and enjoy into our beautiful hot spring</h1>
              </div>
              <div className="hikingBorderContent">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt, fugit praesentium. Aperiam fugiat alias autem quasi
                  natus voluptate ad? Corrupti doloribus aperiam debitis at
                  laborum placeat veniam asperiores reprehenderit odit. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="hikingButtonWrapper">
                <Link to="/signup">
                  <button className="hikingButton">
                    <h4>Relax Now!</h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardHotSpring;
