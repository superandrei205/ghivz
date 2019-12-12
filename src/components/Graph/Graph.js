import React, { Component } from "react";
import "./Graph.css";

import Column from "../Column/Column";
import Line from "../Line/Line";
import Markers from "../Markers/Markers";
import BarTextContent from "../BarTextContent/BarTextContent";

class Graph extends Component {
  renderLines() {
    return Array(11)
      .fill("")
      .map((el, i) => <Line top={i * 10} key={i} />);
  }

  getColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let opacity = Math.random() * 7;
    let color = `rgba(${red} , ${green} , ${blue},${opacity})`;
    return color;
  }

  renderColumn() {
    let widthColumn = this.props.data.length;
    return this.props.data.map((el, i) => (
      <Column
        key={i}
        height={(el * 100) / this.props.max}
        color={this.getColor()}
        width={100 / widthColumn - 1}
      />
    ));
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <div className="graph-wrapper">
          <Markers />
          <div>
            <div className="graph">
              {this.renderLines()}
              <div className="columns-position">{this.renderColumn()}</div>
            </div>
            <BarTextContent columnCounter={data.length} />
          </div>
        </div>
      </>
    );
  }
}

export default Graph;
