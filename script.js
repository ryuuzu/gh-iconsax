const domparse = new DOMParser();
let cssNames = Array.from(document.styleSheets[0].cssRules).map(
	(cssRule) => cssRule.selectorText
);
cssNames = cssNames.filter((cssName) => cssName !== undefined);
cssNames = cssNames.map((cssName) => cssName.substring(1).split(":")[0]);
cssNames = cssNames.filter((cssName) => cssName.split(" ").length === 1);
cssNames.splice(0, 1);

function getElement(toParse, classNames) {
	let iIcon = domparse
		.parseFromString(toParse, "text/html")
		.querySelector("i");
	iIcon.classList.add(...classNames);
	return iIcon;
}

function addIcons() {
	let iconsDisplay = document.querySelector(".icons-display");
	cssNames.forEach((cssName) => {
		let iconTagHolder = document.createElement("div");
		iconTagHolder.classList.add("icon-holder");
		let iconTag = `<i class="isax ${cssName}"></i>`;

		iconTagHolder.appendChild(getElement(iconTag, ["icon"]));

		let iconTagCodeHolder = document.createElement("div");
		iconTagCodeHolder.classList.add("icon-code");
		iconTagCodeHolder.textContent = iconTag;

		iconTagHolder.appendChild(iconTagCodeHolder);

		iconsDisplay.appendChild(iconTagHolder);
	});
}

addIcons();
