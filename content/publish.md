# Een project publiceren
We willen dat andere mensen onze app kunnen installeren. Hiervoor moeten we deze registreren op de NPM registry.
Maak een account aan op [npmjs.com](https://npmjs.com)

## Package.json klaar maken
In principe kunne we nu al publiceren, maar laten we eerst enkele zaken goed zetten in de package.json. Npm maakt hier gebruik van om het een en ander in te stellen.
### Name
Zorg dat de name in je `package.json` uniek is (dit kan je checken door te zoeken op de naam op [npmjs.com](https://npmjs.com)):

![step 2](assets/publish-02.png)

### Keywords
De naam zegt het zelf, keywords... Maar geef zeker 'devine-dev4-terminal' mee, zo kunnen we al onze projecten oplijsten.
```
"keywords": [
  "devine-dev4-terminal"
],
```
### Repository
Met deze setting kan je makkelijk doorklikken vanuit de npm pagina naar de github repo.
```
"repository": {
  "type": "git",
  "url": "https://github.com/[account]/[reponame].git"
},
```

## Publish

Een project publiceren kan als volgt:
`yarn publish`

![step 1](assets/publish-01.png)


Als je nu gaat naar je [NPM profiel](https://www.npmjs.com/settings/benoitboucart/packages), zou je de package moeten terugvinden:

![step 3](assets/publish-03.png)

Je kan nu, op een andere of dezelfde laptop, je command line app installeren / gebruiken als volgt:
![step 4](assets/publish-04.png)

**Ter info:** Aangezien dit publiekelijk is, kan je deze package nu ook installeren als dependency in andere projecten:
![step 5](assets/publish-05.png)

Zie: [yarn publish documentatie](https://yarnpkg.com/en/docs/cli/publish)

_When you publish a package with Yarn it goes onto the npm registry which is used to distribute packages globally._
