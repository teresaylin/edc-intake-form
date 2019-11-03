import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

import { Input } from "./styles";

import QUESTIONS from "./questionBank";

export default class Text extends Component {
	inputBox = React.createRef();

	constructor(props) {
		super(props);

		const { showNext, nextPage } = this.props;

		// this.setFocus = this.setFocus.bind(this);
	}

	componentDidMount() {
		const { showNext, nextPage } = this.props;
		console.log("showNext");
		console.log(showNext);

		console.log(nextPage);
		// for Text input separated out
		// this.inputBox.current.setFocus();
		//
		this.inputBox.current.focus();
		this.inputBox.current.addEventListener("keypress", e => {
			showNext();
			// nextBtn.style.visibility = "visible";
			const key = e.which || e.keyCode;
			if (key === 13) {
				// 13 is enter
				// save information to state, flip to next page
				console.log("enter");
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

		// const { page } = this.state;
		// const { question, inputType } = QUESTIONS[page];
		// return (
		// 	<ThemeProvider theme={this.state}>
		// 		<Container>
		// 			<Question>{QUESTIONS[page].question}</Question>
		// 			<Input ref={this.inputBox} type={inputType} placeholder="type here" />
		// 			<Wrapper>
		// 				<Button
		// 					ref={this.nextBtn}
		// 					onClick={this.nextPage}
		// 					onMouseEnter={this.buttonHover}
		// 					onMouseLeave={this.buttonUnhover}
		// 				>
		// 					Next
		// 				</Button>
		// 			</Wrapper>
		// 		</Container>
		// 	</ThemeProvider>
		// );
	}
}
