# Opgave: Byg et vendespil med `if` og `else`

I denne opgave skal du arbejde videre med et simpelt vendespil. Spillet skal vise en række kort med bagsiden opad. Når spilleren klikker på to kort, skal spillet undersøge, om kortene danner et par.

Du får HTML og CSS, som allerede står for spillets grundlæggende struktur og udseende. Din opgave er at forstå og færdiggøre JavaScript-delen. Du skal selv udlede noget af koden undervejs – derfor får du ikke en komplet løsning.

## Hvad er problemet?

Et vendespil handler ikke kun om at vise kort. Programmet skal også holde styr på, hvad spilleren gør:

- Hvilket kort blev vendt først?
- Er der vendt ét eller to kort i denne tur?
- Har de to kort samme værdi?
- Skal kortene blive liggende med forsiden opad eller vendes tilbage?
- Hvordan sørger vi for, at et fundet par ikke kan vælges igen?
- Hvordan starter vi spillet forfra uden at efterlade gamle kort eller værdier?

For at løse det skal du bruge variabler til spillets tilstand, funktioner til at dele arbejdet op og betingelser til at vælge, hvad der skal ske. Kortene skal desuden blandes, så rækkefølgen er tilfældig.

## Mål

Når du er færdig, skal spillet kunne:

1. Oprette to kort af hver værdi.
2. Blande kortene og vise dem på siden.
3. Reagere på klik på kortene.
4. Sammenligne to vendte kort.
5. Markere et match, så parret ikke kan vælges igen.
6. Starte et nyt spil, når spilleren trykker på reset-knappen.

## Del 1: Undersøg projektet

Åbn `index.html`, `css/main.css` og JavaScript-filerne.

1. Find listen (`ul`), hvor kortene skal indsættes. Hvilket id har den?
2. Find reset-knappen. Hvilket id har den?
3. Undersøg CSS-klasserne `.show` og `.done`. Hvad ændrer de ved et kort?
4. Find Underscore-biblioteket i HTML-filen. Spillet bruger bibliotekets `_.shuffle()` til at blande kortene.
5. Se på den færdige JavaScript-fil som reference, men forsøg først selv at løse delene nedenfor i `app.js`. Sørg for, at kun din egen løsning bliver indlæst, mens du arbejder: `index.html` indlæser også `app-final.js`, så deaktivér dens `<script>`-tag midlertidigt. Ellers kan begge versioner forsøge at oprette og styre kortene på samme tid.

## Del 2: Hold styr på spillet

Opret eller undersøg variablerne, der skal holde styr på:

- listen med kort, inden de sættes ind på siden
- hvor mange par der skal være
- hvor mange kort spilleren har klikket på i den aktuelle tur
- det første og det andet valgte kortelement

**Overvej:** Hvilke værdier skal variablerne have, inden nogen har klikket? Hvornår skal de nulstilles?

## Del 3: Opret kortene

Lav funktionen `createCards`, som modtager antallet af par, der skal oprettes.

For hvert par skal funktionen oprette to kort med samme værdi. Hvert kort skal have:

- klassen `card`
- en `data-card`-værdi, som fortæller, hvilket par kortet tilhører
- et element til kortets forside og et element til bagsiden

Læg kortene i et array. Når alle kort er oprettet, skal du blande arrayet og sende det videre til `insertCard`.

**Tænk over:** Hvis der skal være fire par, hvor mange kort skal arrayet så indeholde?

## Del 4: Indsæt kortene på siden

Færdiggør eller undersøg funktionen `insertCard(cardList)`.

Den skal gennemgå kortene i `cardList` ét ad gangen og indsætte hvert kort i kortlisten i HTML'en. Når et kort er sat ind, skal det have en klikfunktion.

**Hint:** Kig på `insertAdjacentHTML`, `forEach` og funktionen `addClickEvent`. Hvad skal `addClickEvent` modtage?

## Del 5: Håndter klik på kort

I `handleClick` skal du finde det kort, der blev klikket på, og øge tælleren for antal klik i turen.

Brug en `if`-betingelse til at skelne mellem de to klik:

- **Første klik:** Gem kortet som det første valgte kort, og tilføj klassen `show`.
- **Andet klik:** Gem kortet som det andet valgte kort, og vis også dette kort.

Når andet kort er valgt, skal tælleren gøres klar til næste tur.

**Hint:** `event.currentTarget` peger på det kort, der har fået tilføjet event listeneren.

## Del 6: Sammenlign kortene

Når to kort er vendt, skal du hente deres `data-card`-værdier og sammenligne dem.

Brug en `if`-betingelse til at afgøre, om værdierne er ens. Et par tæller kun som et match, hvis spilleren har valgt **to forskellige kort**.

Ved et match skal du:

1. Fjerne klikfunktionen fra begge kort.
2. Tilføje klassen `done` til begge kort.
3. Rydde op i variablerne for de valgte kort.

Hvis kortene **ikke** matcher, skal de kunne vendes tilbage igen, når spilleren begynder næste tur. Du kan bruge `else` til at håndtere det andet udfald.

**Overvej:** Hvorfor er det ikke nok kun at sammenligne kortenes værdier? Hvad sker der, hvis spilleren klikker to gange på det samme kort?

## Del 7: Lav reset-funktionen

Knyt reset-knappens klik til funktionen `resetGame`.

Når spillet nulstilles, skal funktionen:

- rydde de valgte kort og klik-tælleren
- tømme arrayet med kort
- fjerne de viste kort fra HTML'en
- oprette og indsætte et nyt blandet spil

**Kontrollér:** Kan du trykke reset både midt i en tur og efter at have fundet et par?

## Test dit spil

Prøv disse situationer, og ret fejl, hvis resultatet ikke er som forventet:

- To kort med forskellig værdi kan vendes.
- To forskellige kort med samme værdi bliver markeret som et par.
- Et par, der er fundet, kan ikke vælges igen.
- Det samme kort kan ikke tælle som et par med sig selv.
- Næste tur starter med tælleren og de valgte kort i en korrekt tilstand.
- Reset fjerner det gamle spil og opretter nye kort.

## Ekstra udfordring

Vælg en eller flere forbedringer:

- Lad umatchede kort vende tilbage efter en kort pause i stedet for først ved næste klik.
- Vis en besked, når alle par er fundet.
- Gør antallet af par nemt at ændre, og tilpas kortenes layout derefter.
- Vis, hvor mange forsøg spilleren har brugt.
