# Dokumentation for iPlayMusic
Tobias Nielsen, WU12

# Sådan kommer du i gang
`npm install`

`npm run dev`

http://localhost:3000/

Jeg har lavet valgfri opgave ?

## Tech-stack
* **Next.js.**  
Et front-end framework baseret på React.js som også giver adgang til server-side komponenter og -actions, samt mappebaseret routing.
Server-side komponenter og funktioner giver en større sikkerhed, da al koden afvikles på serveren fremfor i klienten.

* **React**   
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. react har et stort og aktivt community med et stort modul-bibliotek, som er aktivt, vel-dokumenteret og vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor.

* **Git**   
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksempel har lavet en fejl. Jeg bruger Git sammen med GitHub.

* **Tailwind**   
Et utility-baseret mobile-first css bibliotek, som gør det simpelt og responsivt.

* **React-icons**  
Et ikon-bibliotek, som er beregnet på React.

* **SASS**  
En udvidelse til CSS, som lader mig lave funktioner, variabler, mixins og nesting. Jeg kan opdele min CSS i moduler og dermed genbruge kode flere steder.

* **Web-API fra Spotify**  
Et interface til at få adgang til Spotify's data, så jeg kan lave min egen app. Dette er den eneste måde hvor jeg lovligt kan få adgang til Spotify's data.

* **Zod**  
Et valideringsBibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempel
Common Header komponent (components/ui/common-header.jsx)
```jsx
const something = "something"
```
Jeg starter med at kalde en React hook "useState" som er en funktion, der returnerer et array. Arrayet indeholder 2 elementer: Et state og en sætter-funktion til dette state. useState tager imod et argument "initialState" som er værdien for statet ved start.