import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

const Container = styled.div`
	text-align: center;
	background: papayawhip;
	height: 100vh;
`;

const Input = styled.input`
	padding: 10px;
	text-align: center;
	font-size: xx-large;
	border-radius: 10px;
	border-color: transparent;
	outline: none;
	width: 50%;
	margin: auto;
`;

const Question = styled.div`
	padding: 20px;
	text-align: center;
	font-size: x-large;
	border-color: transparent;
	outline: none;
	margin: auto;
`;
const Wrapper = styled.div`
	padding: 20px;
`;

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: large;
	visibility: hidden;
	outline: none;
	${props =>
		props.theme.primaryBtn &&
		css`
			background: palevioletred;
			color: white;
		`}
	${props =>
		props.theme.hoverBtn &&
		css`
			background: #edb6c8;
			color: white;
			border: 2px solid #edb6c8;
		`}
`;

export default class Form extends Component {
	inputBox = React.createRef();
	nextBtn = React.createRef();

	state = {
		page: 0,
		primaryBtn: false,
		hoverBtn: false
	};

	componentDidMount() {
		this.inputBox.current.focus();
		this.inputBox.current.addEventListener("keypress", e => {
			this.nextBtn.current.style.visibility = "visible";
			const key = e.which || e.keyCode;
			if (key === 13) {
				// 13 is enter
				// save information to state, flip to next page
				console.log("enter");
				this.nextPage();
			}
		});
	}

	nextPage = () => {
		const { page } = this.state;
		this.setState({
			...this.state,
			primaryBtn: true,
			page: page + 1,
			hoverBtn: false
		});
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
		return (
			<ThemeProvider theme={this.state}>
				<Container>
					<Question>Please tell us your name</Question>
					<Input ref={this.inputBox} type="text" placeholder="type here" />
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
