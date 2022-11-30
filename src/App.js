import "./isaxstyle.css";
import IsaxIconList from "./Isax";
import Home from "./Home";

import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "Home",
		};
		this.changePageToHome = this.changePageToHome.bind(this);
		this.changePageToIcons = this.changePageToIcons.bind(this);
	}

	changePageToHome() {
		const { currentPage } = this.state;

		if (currentPage === "Home") {
			return;
		} else {
			this.setState({ currentPage: "Home" });
		}
	}
	changePageToIcons() {
		const { currentPage } = this.state;

		if (currentPage === "Icons") {
			return;
		} else {
			this.setState({ currentPage: "Icons" });
		}
	}

	render() {
		// map((cssName) =>
		// 	cssName
		// 		.split(" ")
		// 		.map((x) => (x.startsWith(".") ? x.substr(1) : x))
		// 		.join(" ")
		// );

		const { currentPage } = this.state;

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
				<nav className="flex items-center justify-between pt-10 pb-3 text-4xl font-bold text-white">
					<div className="mx-10 w-2/3">GH-Iconsax</div>
					<ul className="flex w-1/3 justify-evenly">
						<li
							className={
								currentPage === "Home"
									? "active page-title"
									: "page-title"
							}
							onClick={this.changePageToHome}
						>
							Home
						</li>
						<li
							className={
								currentPage === "Icons"
									? "active page-title"
									: "page-title"
							}
							onClick={this.changePageToIcons}
						>
							Icons
						</li>
					</ul>
				</nav>
				{currentPage === "Icons" ? (
					<IsaxIconList iconsClassList={filteredCssNames} />
				) : (
					<Home />
				)}
			</div>
		);
	}
}

export default App;
