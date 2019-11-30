import React, { Component } from "react";
import Variable from "../variable/variable.js";
import { Multiplication, Equal } from "../operators/operators.js";
import "./equationBlock.css";

class EquationBlock extends Component {
    constructor(props) {
        super(props);

        this.variables = ["N", "R_★", "f_p", "n_e", "f_L", "f_i", "f_c", "L"];
        this.variable_infos = [
            "The number of civilizations in our galaxy with which communication is possible.",
            "The average rate of star formation per year in our galaxy.",
            "The fraction of those stars with planets.",
            "The average number of those planets that may develop an ecosystem.",
            "The fraction of those planets that succeed in developing life.",
            "The fraction of those planets with life that develop intelligent life.",
            "The fraction of those planets with intelligent life that develop interstellar communication.",
            "The average length of time such civilizations survive and continue to send communications."
        ];

        this.variable_objects = [
            <Variable
                variable={this.variables[0]}
                variable_info={this.variable_infos[0]}
            />,
            <Equal />
        ];

        for (var i = 1; i < this.variables.length; i++) {
            this.variable_objects.push(
                <Variable
                    variable={this.variables[i]}
                    variable_info={this.variable_infos[i]}
                    slider={true}
                />
            );
            this.variable_objects.push(<Multiplication />);
        }
        this.variable_objects = this.variable_objects.slice(
            0,
            this.variable_objects.length - 1
        );
    }

    render() {
        console.log(this.variable_objects[0].props.variable_info);
        return (
            <div id="backgroundDiv">
                <div className="equation">
                    <table align="center">
                        <tbody>
                            <tr>{this.variable_objects}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EquationBlock;
