import styled, { css } from "styled-components";

export const Container = styled.div`
	text-align: center;
	background: white;
	height: 100vh;
`;

export const Input = styled.input`
	padding: 10px;
	text-align: center;
	font-size: xx-large;
	border-radius: 10px;
	border-color: transparent;
	outline: none;
	width: 50%;
	margin: auto;
`;

export const NumberInputLeft = styled(Input)`
	width: 40px;
	border-radius: 10px 0px 0px 10px;
`;

export const NumberInputMid = styled(Input)`
	width: 40px;
	border-radius: 0px;
`;

export const NumberInputRight = styled(Input)`
	width: 40px;
	border-radius: 0px 10px 10px 0px;
`;

export const Question = styled.div`
	padding: 20px;
	text-align: center;
	font-size: x-large;
	border-color: transparent;
	outline: none;
	margin: auto;
`;
export const Wrapper = styled.div`
	padding: 20px;
`;

export const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid #7093db;
	color: #7093db;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: large;
	visibility: hidden;
	outline: none;
	${props =>
		props.theme.primaryBtn &&
		css`
			background: #7093db;
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

export const SelectButton = styled(Button)`
	visibility: visible;
`;

export const SelectOptionButton = styled(Button)`
	visibility: visible;
	color: #70dbb8;
	font-size: x-large;
	border-radius: 10px;
	background: transparent;
	border: 2px solid #70dbb8;
`;

export const PreviousButton = styled(SelectButton)`
	color: white;
	background: palevioletred;
	border: 2px solid palevioletred;
`;

export const SkipButton = styled(SelectButton)`
	color: black;
	background: white;
	border: none;
`;
