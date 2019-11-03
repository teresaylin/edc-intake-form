import React, { Component } from "react";

import { ThemeProvider } from "styled-components";

import { Question, Input, Container, Wrapper, Button } from "./styles";
import QUESTIONS from "./questionBank";

import Text from "./Text";
import NumberPad from "./NumberPad";
import Answer from "./Answer";

export default class Form extends Component {
	inputBox = React.createRef();
	nextBtn = React.createRef();

	state = {
		page: 0,
		primaryBtn: false,
		hoverBtn: false
	};

	componentDidMount() {
		// for Text input separated out
		// this.inputBox.current.setFocus();
		//
		// this.inputBox.current.focus();
		// this.inputBox.current.addEventListener("keypress", e => {
		// 	// this.nextBtn.current.style.visibility = "visible";
		// 	const key = e.which || e.keyCode;
		// 	if (key === 13) {
		// 		// 13 is enter
		// 		// save information to state, flip to next page
		// 		console.log("enter");
		// 		this.nextPage();
		// 	}
		// });
	}

	showNext = () => {
		this.nextBtn.current.style.visibility = "visible";
	};

	nextPage = () => {
		const { page } = this.state;
		this.setState({
			...this.state,
			hoverBtn: false,
			primaryBtn: true,
			page: page + 1
		});
		this.nextBtn.current.style.visibility = "hidden";
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

	// todo submit button
	render() {
		const { page } = this.state;
		const { question, inputType } = QUESTIONS[page];
		return (
			<ThemeProvider theme={this.state}>
				<Container>
					<Question>{QUESTIONS[page].question}</Question>
					<Answer
						inputType={inputType}
						showNext={this.showNext}
						nextPage={this.nextPage}
						page={page}
					/>
					<Wrapper>
						<Button
							ref={this.nextBtn}
							onClick={this.nextPage}
							onMouseEnter={this.buttonHover}
							onMouseLeave={this.buttonUnhover}
						>
							Next
						</Button>
					</Wrapper>
				</Container>
			</ThemeProvider>
		);
	}
}
