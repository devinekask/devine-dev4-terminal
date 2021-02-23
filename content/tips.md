# Tips

Maak gebruik van de online documentatie op https://github.com/vadimdemedes/ink

## Installatie

Er is een create app beschikbaar, gebruik deze

```bash
$ mkdir my-ink-cli
$ cd my-ink-cli
$ npx create-ink-app
```

## CommonJS / ESM

Het bovenstaande project werkt via CommonJS. We zijn echter de ESM manier gewoon in de CRA.

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
module.exports = MyCompont;
```

## Import-jsx

We kunnen niet zomaar components importeren en gebruiken. Dit moeten we doen op de volgende manier:

```js
const importJsx = require("import-jsx");
const MyComponent = importJsx("./components/MyComponent.js");
```

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
