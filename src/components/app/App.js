import React, { Component } from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import EquationBlock from '../equationBlock/equationBlock';
import galaxy from '../../assets/images/westerlund2.jpg';
import Header from '../header/header';

class App extends Component {
	render() {
		return (
			<div
				style={{
					background: `url(${galaxy})`,
					backgroundSize: 'cover',
					minHeight: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10px',
                    zIndex: -2,
				}}
			>

				<StarfieldAnimation
					numParticles={400}
					depth={300}
					style={{
						position: 'absolute',
						zIndex: 0,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0
                    }}
				/>

                <Header></Header>
                <EquationBlock></EquationBlock>
			</div>
		)
	}
}

export default App;
