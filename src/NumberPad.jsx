import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

import { NumberInputLeft, NumberInputMid, NumberInputRight } from "./styles";

import QUESTIONS from "./questionBank";

const digits = {
	date: 6,
	social: 4,
	phone: 10
};

const Pad = styled.div`
	padding: 20px;
	text-align: center;
`;

export default class NumberPad extends Component {
	state = {
		numbers: []
	};

	constructor(props) {
		super(props);
		this.createNumberRefs();
	}

	createNumberRefs() {
		const { inputType, page } = this.props;
		const numberDigits = digits[inputType];

		for (let i = 0; i < numberDigits; i++) {
			this[`num_${i}_${page}`] = React.createRef();
		}
	}

	componentWillMount() {
		this.setupPad();
	}

	setupPad() {
		const { inputType, page } = this.props;
		const numberDigits = digits[inputType];
		const inputs = [];

		for (let i = 0; i < numberDigits; i++) {
			switch (i) {
				case 0:
					inputs.push(
						<NumberInputLeft
							ref={this[`num_${i}_${page}`]}
							key={i}
							type="number"
							placeholder="X"
						/>
					);
					break;
				case numberDigits - 1:
					inputs.push(
						<NumberInputRight
							ref={this[`num_${i}_${page}`]}
							key={i}
							type="number"
							placeholder="X"
						/>
					);
					break;
				default:
					inputs.push(
						<NumberInputMid
							ref={this[`num_${i}_${page}`]}
							key={i}
							type="number"
							placeholder="X"
						/>
					);
			}
		}

		this.setState({
			...this.state,
			numbers: inputs
		});
	}

	componentDidMount() {
		const { showNext, page, nextPage } = this.props;
		this[`num_0_${page}`].current.focus();

		const { numbers } = this.state;
		for (let i = 0; i < numbers.length; i++) {
			this[`num_${i}_${page}`].current.addEventListener("keypress", e => {
				showNext();

				const key = e.which || e.keyCode;
				if (key === 13) {
					nextPage();
				} else if (i + 1 !== numbers.length)
					this[`num_${i + 1}_${page}`].current.focus();
			});
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.page !== this.props.page) {
			this.setupPad();
		}
	}

	// todo submit button
	render() {
		const { numbers } = this.state;
		return <Pad ref={this.pad}>{numbers}</Pad>;
	}
}
