import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import './variable.css'

class Variable extends Component {
	render() {
		return (
			<td>
				<div class="circle">
					<p class="variable" data-tip data-for={this.props.variable}>
						$$ {this.props.variable} $$
					</p>

					<ReactTooltip id={this.props.variable}>
						<p> {this.props.variable_info} </p>
					</ReactTooltip>
				</div>
			</td>
		)
	}
}

export default Variable
