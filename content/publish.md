# Een project publiceren
We willen dat andere mensen onze app kunnen installeren. Hiervoor moeten we deze registreren op de NPM registry.
Maak een account aan op [npmjs.com](https://npmjs.com)

Een project publiceren kan als volgt:
`yarn publish`

![step 1](assets/publish-01.png)


Opgelet: zorg dat de name in je `package.json` uniek is (dit kan je checken door te zoeken op de naam op [npmjs.com](https://npmjs.com)):

![step 2](assets/publish-02.png)

Als je nu gaat naar je [NPM profiel](https://www.npmjs.com/settings/benoitboucart/packages), zou je de package moeten terugvinden:

![step 3](assets/publish-03.png)

Je kan nu, op een andere of dezelfde laptop, je command line app installeren / gebruiken als volgt:
![step 4](assets/publish-04.png)

**Ter info:** Aangezien dit publiekelijk is, kan je deze package nu ook installeren als dependency in andere projecten:
![step 5](assets/publish-05.png)

Zie: [yarn publish documentatie](https://yarnpkg.com/en/docs/cli/publish)

_When you publish a package with Yarn it goes onto the npm registry which is used to distribute packages globally._
