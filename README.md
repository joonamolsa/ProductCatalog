#Product Catalog - ASP.NET Core MVC Project

Tämä projekti on yksinkertainen tuotekatalogi, joka näyttää tuotteet käyttäjälle. Projektissa käytetään ASP.NET Core MVC:tä, ja tuotteet luetaan JSON-tiedostosta, 
josta ne deserialisoidaan ja lähetetään näkymään. Projekti hyödyntää myös NuGet-pakettia Newtonsoft.Json JSON-tiedon käsittelyyn.

Keskeiset komponentit:
1.  HomeController.cs
HomeController sisältää menetelmän Product(), joka hakee tuotteet JSON-tiedostosta GetProducts()-metodin avulla ja palauttaa ne näkymälle.
GetProducts()-metodi lukee products.json-tiedoston sisällön wwwroot-kansiosta ja deserialisoi sen luettavaksi listaksi Product-olioita, jotka sitten palautetaan näkymälle.

2.  Models/Product.cs
Product-luokka määrittelee tuote-olion tietomallin. Se sisältää ominaisuuksia kuten Name, Price, Description, ja Image, joita käytetään JSON-datan mallintamiseen.
Product-luokka sisältää myös muotoillut ominaisuudet FormattedName ja FormattedPrice, jotka auttavat näyttämään nimet ja hinnat oikein näkymässä.

3.  wwwroot/products.json
JSON-tiedosto products.json sisältää tuotetiedot. JSON-rakenne on yksinkertainen lista tuotteista, ja jokainen tuote sisältää name, price, description, ja image -kentät.
Tämä tiedosto luetaan ja deserialisoidaan GetProducts()-metodissa, ja sen tiedot välitetään Product-näkymään.

4.  Views/Home/Product.cshtml
Tämä Razor-näkymä esittää tuotetiedot käyttäjälle luomalla tuotekortit jokaiselle tuotteelle.
Näkymä käyttää @model IEnumerable<ProductCatalog.Models.Product> -määrittelyä, mikä tarkoittaa, että se vastaanottaa listan Product-olioita HomeControllerista ja renderöi ne HTML-sisällöksi käyttäen Razor-syntaksia.

5.  Views/Shared/_Layout.cshtml
Sivupohja, joka sisältää navigointipalkin (<navbar>), on päivitetty sisältämään linkin tuotekatalogiin. Navigointipalkissa on linkki, joka osoittaa Product-sivulle (HomeControllerin Product-metodiin).

6.  wwwroot/js/site.js
Tämä JavaScript-tiedosto sisältää skriptin, joka muokkaa tuotenimiä ja -hintoja näkymässä.
Skripti käyttää JavaScriptiä muuntaakseen tuotenimet alkukirjaimiltaan isoiksi ja hinnat muotoon €, mikä parantaa tuotteiden esitystapaa käyttäjälle.

7.  wwwroot/css/site.css
Tyylitiedosto määrittää näkymän ulkoasun, erityisesti product-grid- ja product-card-luokille.
product-grid näyttää tuotteet ruudukkomuodossa, ja product-card antaa tuotekorteille visuaalista erottuvuutta.

Tiedon kulku:
1. JSON-tiedoston lukeminen: HomeController-luokan GetProducts()-metodi lukee products.json-tiedoston sisällön ja muuntaa sen Product-olioiden listaksi Newtonsoft.Json-pakettia käyttäen.
2. Tietojen välitys näkymään: Product-metodi palauttaa Product.cshtml-näkymän ja välittää tuotteiden listan IEnumerable<Product>-mallina näkymälle.
3. Tietojen esittäminen: Product.cshtml-näkymä käyttää Razor-syntaksia @foreach-silmukassa tuotteiden renderöintiin tuotekorteiksi.
4. Asiakaspään muokkaus: site.js-skripti muokkaa tuotteiden nimiä ja hintoja sivulatauksen jälkeen, ja site.css viimeistelee tuotekorttien tyylin.
