import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import "./variable.css";
import "rc-slider/assets/index.css";

const Handle = Slider.Handle;

const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="bottom"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class Variable extends Component {
    constructor(props) {
        super(props);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.state = {
            sliderValue: this.props.default
        };
    }

    handleSliderChange(newSliderValue) {
        this.setState({
            sliderValue: newSliderValue
        });
        this.props.handleValueChange(newSliderValue, this.props.index);
    }

    render() {
        let slider;
        let num;
        if (this.props.result) {
            slider = <div style={{ "padding-bottom": "24px" }} />;
            num = <div className="outer" id="result">{this.props.product.toFixed(0)}</div>;
        } else {
            slider = (
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    defaultValue={this.props.default}
                    handle={handle}
                    onChange={this.handleSliderChange}
                    className={"slider"}
                    step={this.props.step}
                />
            );
            if (this.props.max >= 10000) {
                num = <div className="large_num">{this.state.sliderValue}</div>;
            } else {
                num = <div className="num">{this.state.sliderValue}</div>;
            }
        }

        return (
            <td>
                <div className="outer">
                    <p
                        className="variable"
                        data-tip
                        data-for={this.props.variable}
                    >
                        $$ {this.props.variable} $$
                    </p>

                    <ReactTooltip id={this.props.variable}>
                        <p> {this.props.variable_info} </p>
                    </ReactTooltip>

                    {num}
                    {slider}
                </div>
            </td>
        );
    }
}

export default Variable;
