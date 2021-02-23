const React = require("react");
const fs = require("fs");
const Markdown = require("ink-markdown").default;

/* const content = `

- ...`; */

const Info = ({ topic }) => {
	const content = fs.readFileSync(
		__dirname + `/../content/${topic}.md`,
		"utf-8"
	);
	return <Markdown>{content}</Markdown>;
};

module.exports = Info;
