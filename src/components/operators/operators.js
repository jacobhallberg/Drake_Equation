import React, { Component } from "react";
import "./operators.css";

class Multiplication extends Component {
    render() {
        return (
            <td>
                <p className="operator outer">$$ * $$</p>
                <p className="operator outer">$$ * $$</p>
            </td>
        );
    }
}

class Equal extends Component {
    render() {
        return (
            <td>
                <p className="operator outer">$$ = $$</p>
                <p className="operator outer">$$ = $$</p>
            </td>
        );
    }
}

export { Multiplication, Equal };
