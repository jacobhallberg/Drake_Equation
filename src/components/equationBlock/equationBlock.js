import React, { Component } from 'react'
import Variable from '../variable/variable.js'
import { Multiplication, Equal } from '../operators/operators.js'
import './equationBlock.css'

class EquationBlock extends Component {
	constructor(props) {
		super(props);
        this.handleValueChange = this.handleValueChange.bind(this)
		this.variables = ["N", "R_★", "f_p", "n_e", "f_L", "f_i", "f_c", "L"]
		this.variable_infos = [
			"The number of civilizations in our galaxy with which communication is possible.",
			"The average rate of star formation per year in our galaxy.",
			"The fraction of those stars with planets.",
			"The average number of those planets that may develop an ecosystem.",
			"The fraction of those planets that succeed in developing life.",
			"The fraction of those planets with life that develop intelligent life.",
			"The fraction of those planets with intelligent life that develop interstellar communication.",
			"The average length of time such civilizations survive and continue to send communications."
        ]

        //todo: make cleaner w objects
        this.variable_defaults = [
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
        ]

        this.variable_min = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]

        this.variable_max = [
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
        ]

        var sliderValues = []
        for (var i = 0; i < this.variable_defaults.length; i++){
            sliderValues.push(this.variable_defaults[i])
        }

        this.state = {
            sliderValues: sliderValues,
        }
    }

    handleValueChange(newValue, idx){
        var newValues = this.state.sliderValues
        newValues[idx] = newValue
        this.setState({
            sliderValues: newValues
        })
    }

	render() {
        var product = 1
        for (var i = 0; i < this.state.sliderValues.length; i++){
            product *= this.state.sliderValues[i]
        }

		var variables = [
			<Variable variable={this.variables[0]} variable_info={this.variable_infos[0]} result={true} product={product}/>,
			<Equal />
		]
        
		for (var i = 1; i < this.variables.length; i++) {
			variables.push(
				<Variable
					variable={this.variables[i]}
                    variable_info={this.variable_infos[i]}
                    min={this.variable_min[i]}
                    max={this.variable_max[i]}
                    default={this.variable_defaults[i]}
                    handleValueChange={this.handleValueChange}
                    slider={true}
                    result={false}
                    index={i}
				/>
			)
			variables.push(<Multiplication/>)
		}
		return (
			<div id="backgroundDiv">
				<div className="equation">
					<table align="center">
						<tbody>
						<tr>

						{variables.slice(0, variables.length - 1)}

						</tr>
						</tbody>
					</table>

				</div>
			</div>
		)
	}
}

export default EquationBlock
