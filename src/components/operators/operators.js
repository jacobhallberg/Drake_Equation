import React, { Component } from "react";
import "./operators.css";

class Multiplication extends Component {
    render() {
        return (
            <td>
                <p className="operator">$$ * $$</p>
                <p className="operator">$$ * $$</p>
            </td>
        );
    }
}

class Equal extends Component {
    render() {
        return (
            <td>
                <p className="operator">$$ = $$</p>
                <p className="operator">$$ = $$</p>
            </td>
        );
    }
}

export { Multiplication, Equal };