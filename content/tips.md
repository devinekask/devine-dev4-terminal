# Tips

Maak gebruik van de online documentatie op <https://github.com/vadimdemedes/ink> en <https://github.com/vadimdemedes/create-ink-app>

## Installatie

Er is een create app beschikbaar, gebruik deze

```bash
mkdir my-ink-cli
cd my-ink-cli
npx create-ink-app
```

Reminder: Je app kan je dan runnen als volgt, binnen de `my-ink-cli` directory:
`node cli.js`

## CommonJS / ESM

Het bovenstaande project werkt via CommonJS. We zijn echter de ES Modules (ESM) manier gewoon in de Create React App.

Concreet gaan we dependencies moeten **requiren** ipv te **importeren**.

### Import

ESM

```js
import React from "react";
```

CommonJS

```js
const React = require("react");
```

### Export

ESM

```js
export default MyComponent;
```

CommonJS

```js
module.exports = MyComponent;
```

Bekijk het startproject van Create Ink App, daar vind je dit ook terug:

```js
const React = require("react");
const { Text } = require("ink");
```

Met Create React App zouden we dit namelijk als volgt gedaan hebben:

```js
import React from "react";
import { Text } from "ink";
```

Een Menu component zal je bijvoorbeeld met `module.exports = Menu;` moeten exporteren (ipv `export Menu;` in Create React App)

## Import-jsx

We kunnen niet zomaar components importeren en gebruiken. Een component kan je importeren met `import-jsx` (deze dependency werd met Create Ink App mee geïnstalleerd) als volgt:

```js
const importJsx = require("import-jsx");
const MyComponent = importJsx("./components/MyComponent.js");
```

**Ter info:** [Import JSX](https://github.com/vadimdemedes/import-jsx) zal JSX code on the fly transpilen (omzetten naar "gewone" JavaScript). We zouden ook gebruik kunnen maken van Babel (in combinatie met Webpack) om onze JSX te transpilen maar dit is buiten de scope van deze les.

## Fetch

Wil je data fetchen (bvb. via een externe API)? Gebruik dan de `node-fetch` dependency (installeer die eerst via `yarn add` uiteraard): dit laat toe om de `fetch` API die we (client-side) al gebruiken, ook in een NodeJS omgeving met dezelfde syntax toe te passen.

Zie [A light-weight module that brings window.fetch to Node.js](https://github.com/node-fetch/node-fetch)

## Useful Components

Er zijn redelijk wat components (plugins) beschikbaar. Soms kunnen er echter foutjes opduiken bij het importeren (CommonJS vs ESM)
Je kan dit -soms- op de volgende manier oplossen:

In de documentatie staat er bv:

```js
const Markdown = require("ink-markdown");
```

Maar je krijgt het maar werkende als volgt:

```js
const Markdown = require("ink-markdown").default;
```
