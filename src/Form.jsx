import React, { Component } from "react";

import { ThemeProvider } from "styled-components";

import {
	Question,
	Input,
	Container,
	Wrapper,
	Button,
	SelectButton,
	SkipButton,
	PreviousButton
} from "./styles";
import QUESTIONS from "./questionBank";

import Header from "./Header";
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

	previousPage = () => {
		const { page } = this.state;
		if (page === 0) return;
		this.setState({
			page: page - 1
		});
	};

	skipPage = () => {
		const { page } = this.state;
		if (QUESTIONS[page].required) return;

		// TODO: Mark question as skipped
		this.nextPage();
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
		const { question, inputType, options } =
			page < QUESTIONS.length ? QUESTIONS[page] : {};

		const progress = page < QUESTIONS.length ? page / QUESTIONS.length : 1;

		return (
			<ThemeProvider theme={this.state}>
				<Header progress={progress} />
				<Container>
					{progress < 1 ? (
						<Question>{QUESTIONS[page].question}</Question>
					) : (
						<Question>
							You have completed the form! Someone will be in touch with you
							soon.
						</Question>
					)}
					{progress < 1 && (
						<Answer
							inputType={inputType}
							showNext={this.showNext}
							nextPage={this.nextPage}
							page={page}
							options={options}
						/>
					)}
					{progress < 1 && (
						<Wrapper>
							{page !== 0 ? (
								<PreviousButton onClick={this.previousPage}>
									Previous
								</PreviousButton>
							) : null}
							<Button
								ref={this.nextBtn}
								onClick={this.nextPage}
								onMouseEnter={this.buttonHover}
								onMouseLeave={this.buttonUnhover}
							>
								Next
							</Button>
							{!QUESTIONS[page].required ? (
								<SkipButton onClick={this.onSkip}>Skip</SkipButton>
							) : null}
						</Wrapper>
					)}
				</Container>
			</ThemeProvider>
		);
	}
}
