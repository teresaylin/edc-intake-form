import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

import { Input } from "./styles";
import Text from "./Text";
import NumberPad from "./NumberPad";
import Select from "./Select";

import QUESTIONS from "./questionBank";

export default class Answer extends Component {
	render() {
		const { inputType, showNext, nextPage, page, options } = this.props;

		console.log("Answer options: ", options);
		let elem;

		switch (inputType) {
			case "text":
				elem = <Text key={page} showNext={showNext} nextPage={nextPage} />;
				break;
			case "date":
			case "social":
			case "phone":
				elem = (
					<NumberPad
						key={page}
						inputType={inputType}
						showNext={showNext}
						nextPage={nextPage}
						page={page}
					/>
				);
				break;

			case "select":
				elem = <Select options={options} nextPage={nextPage} />;
		}

		return elem || <div></div>;
	}
}
