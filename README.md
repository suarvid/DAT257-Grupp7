# DAT257 - Grupp 7

Alla reflektioner på individ- och gruppnivå är sorterade efter veckor, och reflektioner från projektets första vecka finns exempelvis i mappen "Week1".

## För att starta backend
* öppna terminalen
* cd:a in i backend-mappen
* kör skriv "py manage.py runserver" för att starta servern
* terminalen borde se ut ungefär som i bilden nedan:
![terminalen](https://github.com/suarvid/DAT257-Grupp7/blob/master/terminal.png)
Stäng ned servern med CONTROL-C


## För att rensa databasen
Ifall databasen krånglar pga att migrations ej tillåts eller ifall man helt enkelt vill ta bort all data i databasen kan man tömma databasen med kommandot "py manage.py flush" på windows eller "python manage.py flush" på macOs/Linxux.
Terminalen kommer då visa en prompt för att bekräfta att man verkligen vill tömma databasen:
![prompt från terminalen](https://github.com/suarvid/DAT257-Grupp7/blob/master/Screenshot%20from%202020-05-07%2014-41-08.png)
Skriv yes så töms databasen på all data. Eventuella hindrade migrations pga felaktig data i vissa fält bör nu tillåtas.
