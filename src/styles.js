import styled, { css } from "styled-components";

export const Container = styled.div`
	text-align: center;
	background: papayawhip;
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

export const SelectButton = styled(Button)`
	visibility: visible;
	color: #70dbb8;
	border: 2px solid #70dbb8;
	font-size: x-large;
	border-radius: 10px;
	background: transparent;
`;

// ${props =>
// 		props.theme.primaryBtn &&
// 		css`
// 			background: #70dbb8;
// 			color: white;
// 		`}

// 	${props =>
// 		props.theme.hoverBtn &&
// 		css`
// 			background: #70dbb8;
// 			color: white;
// 		`}
