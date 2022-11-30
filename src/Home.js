import React, { Component } from "react";
import CodeComponent from "./CodeComponent";

class Home extends Component {
	render() {
		return (
			<div className="h-full w-full bg-inherit text-white">
				<h1 className="py-10 text-center text-5xl font-bold">
					Welcome to GH-Iconsax
				</h1>
				<div className="px-64 text-center text-xl">
					This is a website to list all the icons available in icons
					from{" "}
					<a
						href="https://vuesax.com/"
						target="_blank"
						className="underline transition-colors duration-300 hover:bg-white hover:text-dgreen hover:no-underline"
						rel="noreferrer"
					>
						vuesax
					</a>{" "}
					framework with their class names. The icon-pack name is{" "}
					<a
						href="http://iconsax.io/"
						target="_blank"
						rel="noreferrer"
						className="underline transition-colors duration-300 hover:bg-white hover:text-dgreen hover:no-underline"
					>
						iconsax
					</a>
					.
					<div className="mt-10 px-52 font-mono text-base">
						<CodeComponent code="<div>Test</div>" language="html" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
