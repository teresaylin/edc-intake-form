import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

import { Input } from "./styles";

import QUESTIONS from "./questionBank";

export default class Text extends Component {
	inputBox = React.createRef();

	componentDidMount() {
		const { showNext, nextPage } = this.props;

		this.inputBox.current.focus();
		this.inputBox.current.addEventListener("keypress", e => {
			showNext();
			const key = e.which || e.keyCode;
			if (key === 13) {
				// 13 is enter
				nextPage();
			}
		});
	}

	setFocus = () => {
		this.inputBox.current.focus();
	};

	// todo submit button
	render() {
		return <Input ref={this.inputBox} type="text" placeholder="type here" />;
	}
}
