import React, { Component } from "react";

import styled, { css, ThemeProvider } from "styled-components";

import QUESTIONS from "./questionBank";

export default class Header extends Component {
	render() {
		const { progress } = this.props;
		const progressValue = progress * 100;
		const progressString = progressValue.toFixed(0);
    return (
			<div>
				<div style={{float: 'left'}}><img src="edc-logo-header.png" alt="Logo" width="150px"/></div>
				<div>
		      <div style={{width: 'calc(100% - 22px)', height: '30px', margin: '10px', border: '1px solid black', borderRadius: '5px'}}>
						<div style={{width: progressValue + '%', height: '100%', backgroundColor: 'lightblue'}}></div>
					</div>
					<div style={{margin: '10px'}}>{ progressString + '% complete'}</div>
				</div>
				<div style={{clear: 'both'}}></div>
			</div>
    );
	}
}
