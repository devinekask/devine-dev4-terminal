"use strict";
const React = require("react");
const { Text, Box, render } = require("ink");
const importJsx = require("import-jsx");

const Test = importJsx("./components/Test.js");
const Menu = importJsx("./components/Menu.js");
const Info = importJsx("./components/Info.js");
const Punten = importJsx("./components/Punten.js");

const Showcase = importJsx("./components/Showcase.js");

const BigText = require("ink-big-text");
const { useState } = require("react");

const App = ({ name = "Stranger" }) => {
	const [route, setRoute] = useState("home");

	const showView = (route) => {
		switch (route) {
			case "briefing":
				return <Info topic="briefing" />;
			case "tips":
				return <Info topic="tips" />;
			case "showcase":
				return <Showcase />;
			case "punten":
				return <Punten />;
			default:
				return <Menu onRouteChange={(route) => setRoute(route)} />;
		}
	};

	return (
		<>
			<Box margin="1">
				<BigText text="DEV4 - Terminal" font="chrome" />
			</Box>
			{showView(route)}
		</>
	);
};

module.exports = App;
