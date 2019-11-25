import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import Tooltip from 'rc-tooltip'
import Slider, { Range } from 'rc-slider'
import './variable.css'
import 'rc-slider/assets/index.css';

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={true}
      placement="bottom"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

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
				<Slider min={0} max={20} defaultValue={3} handle={handle} className={"slider"}/>
			</td>
		)
	}
}

export default Variable
