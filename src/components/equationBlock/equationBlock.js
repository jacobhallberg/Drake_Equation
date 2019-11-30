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
                <h1 id="header">The Drake Equation</h1>
				<div className="equation">
					<table align="center">
						<tbody>
						<tr>

						{variables.slice(0, variables.length - 1)}

						</tr>
						</tbody>
					</table>
				</div>
                <div>
                    <div class="summary">
                        <p>  
                            The Drake Equation is a probabilistic equation used to estimate the number of extraterrestrial civilizations capable of communication in the Milky Way galaxy. The equation was formulated by Dr. Frank Drake in 1961.
                        </p>
                        <p>  
                            Astronomers have used the equation for decades to examine the factors that influence the frequency of intelligent life in the galaxy. Our website is meant to provide a fun way to estimate the number of these intelligent civilizations using a range of reasonable values.
                        </p>
                        <p>  
                            While the equation has been criticized for its inclusion of a few unknown variables (the last four in particular), it is nonetheless very important to our Search for Life in the Universe. In fact, the inclusion of unknown variables effectively guides our research because it sparks discussions and projects that seek to better understand these variables. Once we are capable of making precise estimates for all the variables, the usefulness of the equation will be fully realized.
                        </p>
                    </div>
                    <img id="drake" src="https://www.seti.org/sites/default/files/styles/medium/public/2018-09/frank-drake-400px.png?itok=DaB0i1TN"></img>
                </div>
			</div>
		)
	}
}

export default EquationBlock
