import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

import { Input } from "./styles";
import Text from "./Text";
import NumberPad from "./NumberPad";

import QUESTIONS from "./questionBank";

export default class Answer extends Component {
	render() {
		const { inputType, showNext, nextPage, page } = this.props;

		let elem;

		switch (inputType) {
			case "text":
				elem = <Text showNext={showNext} nextPage={nextPage} />;
				break;
			case "date":
			case "social":
			case "phone":
				elem = (
					<NumberPad
						inputType={inputType}
						showNext={showNext}
						nextPage={nextPage}
						page={page}
					/>
				);
		}

		return elem || <div></div>;
	}
}
