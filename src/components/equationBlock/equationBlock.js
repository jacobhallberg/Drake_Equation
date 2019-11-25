import React, { Component } from 'react'
import Variable from '../variable/variable.js'
import { Multiplication, Equal } from '../operators/operators.js'
import './equationBlock.css'

class EquationBlock extends Component {
	constructor(props) {
		super(props);

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
	}

	render() {

		var variables = [
			<Variable variable={this.variables[0]} variable_info={this.variable_infos[0]} />,
			<Equal />
		]
		for (var i = 1; i < this.variables.length; i++) {
			variables.push(
				<Variable
					variable={this.variables[i]}
					variable_info={this.variable_infos[i]}
				/>
			)
			variables.push(<Multiplication />)
		}

		return (
			<div id="backgroundDiv">
				<div class="equation">
					<table align="center">

						{variables.slice(0, variables.length - 1)}

					</table>

				</div>
			</div>
		)
	}
}

export default EquationBlock
