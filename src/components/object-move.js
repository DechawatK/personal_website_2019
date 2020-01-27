import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/objectMove.scss";

export default class ObjectMove extends Component {

  componentDidMount() {
    this.moveObeject();
    setInterval(() => this.moveObeject(), 3000);
  }

  componentWillMount() {
    clearInterval(() => this.moveObeject(), 2000);
  }

  moveObeject = () => {
    const moveObject = this.refs.moveObject;
    console.log(moveObject)
    setTimeout(function() {
      moveObject.classList.add("move");
  }, 100);

  setTimeout(function() {
      moveObject.classList.remove("move");
    }, 1500);
  };

  render() {
    return (
      <div ref="moveObject" className="ui-object-movement">
          <div className="ui-stage__greet">
              <span>Hi, my name is</span>
            </div>
      </div>
    );
  }
}

ObjectMove.propTypes = {
  children: PropTypes.node.isRequired
};
