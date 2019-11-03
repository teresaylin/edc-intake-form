import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

import { SelectOptionButton } from "./styles";

export default class Select extends Component {
	inputBox = React.createRef();

	state = {
		primaryBtn: false,
		hoverBtn: false
	};

	buttonHover = () => {
		this.setState({
			...this.state,
			hoverBtn: true,
			primaryBtn: false
		});
	};

	buttonUnhover = () => {
		this.setState({
			...this.state,
			hoverBtn: false,
			primaryBtn: false
		});
	};

	hover(index) {
		const elem = this[`btn_${index}`].current;
		if (elem) {
			elem.style.background = "#70dbb8";
			elem.style.color = "white";
		}
	}

	unhover(index) {
		const elem = this[`btn_${index}`].current;
		if (elem) {
			elem.style.background = "transparent";
			elem.style.color = "#70dbb8";
		}
	}

	// constructor(props) {
	// 	super(props);

	// }

	createRefs() {
		const { options } = this.props;
		options.forEach((option, index) => {
			this[`btn_${index}`] = React.createRef();
		});
	}

	componentDidMount() {
		this.createRefs();
	}

	componentDidUpdate() {
		this.createRefs();
	}

	// todo submit button
	render() {
		const { options, nextPage } = this.props;

		return (
			<ThemeProvider theme={this.state}>
				{options.map((o, index) => (
					<SelectOptionButton
						ref={this[`btn_${index}`]}
						onMouseEnter={() => this.hover(index)}
						onMouseLeave={() => this.unhover(index)}
						onClick={nextPage}
						key={index}
					>
						{o}
					</SelectOptionButton>
				))}
			</ThemeProvider>
		);
	}
}
