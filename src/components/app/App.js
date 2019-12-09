import React, { Component } from "react";
import StarfieldAnimation from "react-starfield-animation";
import EquationBlock from "../equationBlock/equationBlock";
import galaxy from "../../assets/images/westerlund2.jpg";
import InformationBlock from "../informationBlock/informationBlock";
import "./App.css"


class App extends Component {
    render() {
        return (
            <div
                style={{
                    background: `url(${galaxy})`,
                    backgroundSize: "cover",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            >
                <StarfieldAnimation
                    numParticles={400}
                    depth={300}
                    style={{
                        position: "absolute",
                        zIndex: 1,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                />

                <div className="block">
                <EquationBlock></EquationBlock>
                <InformationBlock></InformationBlock>
                </div>

            </div>
        );
    }
}

export default App;
