# DAT257 - Grupp 7
![](https://github.com/suarvid/DAT257-Grupp7/blob/master/src/Components/Logo3.png)
Hela Åsa är en webbapplikation utvecklad med ett företagsnätverk/träningskollektiv i åtanke och innehar funktionalitet för att företagare ska kunna skapa aktiviteter, skapa träningspass för de olika aktiviteterna, lägga upp nyhetsinlägg samt funktionalitet för en rad administrativa uppgifter.
Besökande användare kan få en överblick över vilka kommade aktivitetspass som erbjuds samt boka en plats på dessa ifall de inte är fullbokade. Besökare kan även navigera runt på sidan för att få information och nyheter kring företagen som finns på plattformen samt de erbjudanden och aktiviteter som erbjuds av dessa.
## Startguide
Nedan följer en kort sammanfattning över hur man enklast kommer igång med användningen av applikationen på sin egen dator.
I stegen nedan antas en viss vana kring arbete med terminalen samt att installera paket med hjälp av npm och pip eller någon annan package manager.
### Installation
Applikationen är utvecklad med hjälp av ramverken React och Django för frontend respektive backend av applikationen.
Detta betyder att man behöver ha en fungerande version av Python installerat på systemet för att köra applikationen.
Utöver python och dessa ramverk har ett antal mindre bibliotek använts. 
Av dessa ramverk och bibliotek måste vissa installeras explicit, de är:
* React
* Django
* django_rest_framework
* django_cors_headers
* Pillow

React installeras enklast med hjälp av package managern npm, de övriga biblioteken installeras lättast genom att använda pip.
Utöver de ovan nämnda ramverken och biblioteken behövs även ett fåtal bibliotek för frontenden, exempelvis material-ui.
Dessa kan installeras automatiskt med hjälp av att köra kommandot npm -install i projektets rotmapp.

### Starta applikationen
För att använda applikationen på det sätt som är tänkt krävs att man startar både frontend och backend på sin lokala dator samt har igång dessa under applikationens användning. Ifall man enbart startar frontenden kan man besöka hemsidan, men ingen intressant data så som aktiviteter eller nyhetsinlägg kommer visas. För att besöka de administrativa sidorna av applikationen måste backenden startas. Detta beror på att dessa sidor är implementerade i backenden eftersom tanken är att besökande användare inte ska kunna se den administrativa sidan av hemsidan.
#### Starta Backenden
För att starta backenden, öppna terminalen i mappen backend (DAT257-Grupp7/backend) och starta backenden genom att köra filen "manage.py" med kommandot "runserver", på Linux/macOS: "python manage.py runserver", på windows: "py manage.py runserver".

Terminalen bör då se ut ungefär som nedan ifall backenden startat utan problem:
![Terminalen när backenden startats](https://github.com/suarvid/DAT257-Grupp7/blob/master/terminal.png)
För att stänga ned backenden, tryck CTRL+C eller stäng helt enkelt ner terminalfönstret.

#### Starta Frontenden
För att starta frontenden, öppna ett till terminalfönster, denna gång i projektets rotmapp (DAT257-Grupp7) och kör kommandot npm start. Det nya terminalfönstret bör då likna bilden nedan:
![Terminalen när frontenden startats](https://github.com/suarvid/DAT257-Grupp7/blob/master/Screenshot%20from%202020-05-21%2023-22-15.png)
En ny flik i webbläsaren bör då öppnas där hemsidan visas.


### Användning av applikationen
Nedan följer en kort redogörelse över hur hur applikationen är tänkt att användas för bästa användarupplevelse.
#### Mobilläge
Eftersom applikationen utvecklats främst för mobilanvändare används applikationen med fördel med webbläsaren i mobilläge.
I webbläsarna Chrome och Firefox kan detta läge aktiveras genom att högerklicka på sidan, trycka "Inspect" i Chrome, "Inspect Element" i Firefox och sedan klicka på den lilla mobil-ikonen i det fält som just dykt upp.


I Firefox:
![Ikonen för att byta till mobilläge i Firefox](https://github.com/suarvid/DAT257-Grupp7/blob/master/Mobile_firefox.png)


I Chrome:

![Ikonen för att byta till mobilläge i Chrome](https://github.com/suarvid/DAT257-Grupp7/blob/master/Mobile_chrome.png)

#### Administrativa sidor
För att besökande användare inte ska få behörighet att skapa, ändra eller ta bort objekt som pass, aktiviteter eller nyhetsinlägg kräver de administrativa sidorna att användaren loggar in innan de får tillgång till dessa sidor.
För att logga in krävs det först att man skapar en användare.
Detta görs via terminalen genom att stänga ned backenden ifall den är igång och sedan köra filen "manage.py" med kommandot "createsuperuser", på Linux/macOS: "python manage.py createsuperuser", på Windows: "py manage.py createsuperuser".
Terminalen kommer nu efterfråga användarnamn, lösenord samt mail. Dessa kan ges i princip godtyckliga värden. Som säkerhetsfunktion kan terminalen visa ett varningsmeddelande ifall valet av användarnamn och lösenord anses dåligt, men detta kan enkelt överskridas:
![Terminalens utseende vid skapandet av en superuser](https://github.com/suarvid/DAT257-Grupp7/blob/master/createsuperuser.png)
När ett konto skapats kan man logga in via url:en "localhost:8000/admin".
När man loggat in visas sedan en översiktsvy för administrativa användare. I denna kan man skapa nya aktiviteter, pass, nyhetsinlägg etc. Man kan även redigera eller ta bort befintliga sådana objekt.
![Admin-sidan vid inloggat läge](https://github.com/suarvid/DAT257-Grupp7/blob/master/admin_page.png)
Utöver denna administrativa sida för hanteringen av objekt finns även en mer data-orienterad översiktssida på url:en "localhost:8000/dataöversikt". Även denna sida kräver att användaren är inloggad.
På denna sida visas information kring vilka bokningar som finns på kommande pass, samt vilka bokningar som fanns på pass vars datum passerats. Som administratör kan man även ta bort bokningar på pass via denna sida.
![Översikts-sidan](https://github.com/suarvid/DAT257-Grupp7/blob/master/dataview_page.png)
