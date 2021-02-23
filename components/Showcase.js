const React = require("react");
const { Text, Box, Newline } = require("ink");
const { useEffect, useState } = require("react");
const fetch = require("node-fetch");

const Showcase = () => {
	const keyword = "devine-dev4-terminal";
	const [results, setResults] = useState();

	useEffect(() => {
		fetch(`https://api.npms.io/v2/search?q=keywords:${keyword}`)
			.then((r) => r.json())
			.then((d) => setResults(d.results));
	});

	return (
		<Text>
			<Text>Listing {keyword} projects</Text>
			<Newline />

			{results &&
				results.map((result) => (
					<Text key={result.package.name}>
						<Text>{result.package.links.npm}</Text>
						<Newline />
					</Text>
				))}
		</Text>
	);
};

module.exports = Showcase;
