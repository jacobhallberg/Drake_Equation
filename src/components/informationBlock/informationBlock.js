import React, { Component } from "react";
import "./informationBlock.css";

class informationBlock extends Component {
    render() {
        return (
            <div className="main_block">
                <table align="center">
                    <tbody>
                        <tr>
                            <td>
                                <div class="summary sub_block">
                                    <p>
                                        The Drake Equation is a probabilistic
                                        equation used to estimate the number of
                                        extraterrestrial civilizations capable
                                        of communication in the Milky Way
                                        galaxy. The equation was formulated by
                                        Dr. Frank Drake in 1961.
                                    </p>
                                    <p>
                                        Astronomers have used the equation for
                                        decades to examine the factors that
                                        influence the frequency of intelligent
                                        life in the galaxy. Our website is meant
                                        to provide a fun way to estimate the
                                        number of these intelligent
                                        civilizations using a range of
                                        reasonable values.
                                    </p>
                                    <p>
                                        While the equation has been criticized
                                        for its inclusion of a few unknown
                                        variables (the last four in particular),
                                        it is nonetheless very important to our
                                        Search for Life in the Universe. In
                                        fact, the inclusion of unknown variables
                                        effectively guides our research because
                                        it sparks discussions and projects that
                                        seek to better understand these
                                        variables. Once we are capable of making
                                        precise estimates for all the variables,
                                        the usefulness of the equation will be
                                        fully realized.
                                    </p>
                                </div>
                                <td className="image_container">
                                    <img
                                        id="drake"
                                        src="https://www.seti.org/sites/default/files/styles/medium/public/2018-09/frank-drake-400px.png?itok=DaB0i1TN"
                                    ></img>
                                </td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default informationBlock;
