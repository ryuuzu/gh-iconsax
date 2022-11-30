import React, { Component } from "react";

class Navbar extends Component {
	render() {
		const { currentPage } = this.props;
		return (
			<nav>
				<ul className="flex w-full justify-evenly px-44 py-10 text-4xl font-bold text-white">
					<li
						className={
							currentPage === "Home"
								? "active page-title"
								: "page-title"
						}
					>
						Home
					</li>
					<li
						className={
							currentPage === "Icons"
								? "active page-title"
								: "page-title"
						}
					>
						Icons
					</li>
				</ul>
			</nav>
		);
	}
}
