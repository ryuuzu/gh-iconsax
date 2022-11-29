import "./isaxstyle.css";
import IsaxIconList from "./Isax";

import React, { Component } from "react";

class App extends Component {
	render() {
		// map((cssName) =>
		// 	cssName
		// 		.split(" ")
		// 		.map((x) => (x.startsWith(".") ? x.substr(1) : x))
		// 		.join(" ")
		// );
		let cssNames = Array.from(document.styleSheets[2].cssRules).map(
			(cssRule) => cssRule.selectorText
		);
		const filteredCssNames = cssNames
			.filter((cssName) => cssName !== undefined)
			.map((cssName) => cssName.substring(1).split(":")[0])
			.filter((cssName) => cssName.split(" ").length === 1);
		filteredCssNames.splice(0, 1);
		return (
			<div className="App">
				<IsaxIconList iconsClassList={filteredCssNames} />
			</div>
		);
	}
}

export default App;
