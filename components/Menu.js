const React = require("react");
const SelectInput = require("ink-select-input").default;

const Menu = ({ onRouteChange }) => {
	const handleSelect = (item) => {
		onRouteChange(item.value);
	};

	const items = [
		{
			label: "Briefing",
			value: "briefing",
		},
		{
			label: "Tips",
			value: "tips",
		},
		{
			label: "Staat dit op punten?",
			value: "punten",
		},
		{
			label: "Showcase",
			value: "showcase",
		},
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

module.exports = Menu;
