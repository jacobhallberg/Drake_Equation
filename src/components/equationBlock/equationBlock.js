import React, { Component } from 'react'
import Variable from '../variable/variable.js'
import { Multiplication, Equal } from '../operators/operators.js'
import VariableObj from './variable_obj'
import './equationBlock.css'

class EquationBlock extends Component {
	constructor(props) {
		super(props);
        this.handleValueChange = this.handleValueChange.bind(this)
        this.product_variable = "N"
        this.product_info = "The number of civilizations in our galaxy with which communication is possible."

        this.variables = [
           new VariableObj("R_★", "The average rate of star formation per year in our galaxy.", 0, 20, 1),
           new VariableObj("f_p", "The fraction of those stars with planets.", 0, 20, 1),
           new VariableObj("n_e", "The average number of those planets that may develop an ecosystem.", 0, 20, 1),
           new VariableObj("f_L", "The fraction of those planets that succeed in developing life.", 0, 20, 1),
           new VariableObj("f_i", "The fraction of those planets with life that develop intelligent life.", 0, 20, 1),
           new VariableObj("f_c", "The fraction of those planets with intelligent life that develop interstellar communication.", 0, 20, 1),
           new VariableObj("L", "The average length of time such civilizations survive and continue to send communications.", 0, 20, 1),
        ]

        var sliderValues = []
        for (var i = 0; i < this.variables.length; i++){
            sliderValues.push(this.variables[i].defaultValue)
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
        console.log(this.state.sliderValues)
    }

	render() {
        var product = 1
        for (var i = 0; i < this.state.sliderValues.length; i++){
            product *= this.state.sliderValues[i]
        }

		var variables = [
			<Variable variable={this.product_variable} variable_info={this.product_info} result={true} product={product}/>,
			<Equal />
		]
        
		for (var i = 0; i < this.variables.length; i++) {
			variables.push(
				<Variable
					variable={this.variables[i].label}
                    variable_info={this.variables[i].info}
                    min={this.variables[i].min}
                    max={this.variables[i].max}
                    default={this.variables[i].defaultValue}
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

export default EquationBlock;
