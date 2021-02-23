const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const { Text, Box } = require("ink");

const Punten = () => {
	return (
		<Box>
			<Text>Staat dit op punten?</Text>
			<Gradient name="rainbow">
				<BigText text="NO" />
			</Gradient>
		</Box>
	);
};

module.exports = Punten;
