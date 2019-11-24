import React, { Component } from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import EquationBlock from './equationBlock';
import galaxy from './westerlund2.jpg';


class App extends Component {
	render() {
		return (
			<div
				style={{
					background: `url(${galaxy})`,
					backgroundSize: 'cover',
					minHeight: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>

				<StarfieldAnimation
					numParticles={400}
					depth={300}
					style={{
						position: 'absolute',
						zIndex: 1,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0
					}}
				/>

                <EquationBlock></EquationBlock>
			</div>
		)
	}
}

export default App;
