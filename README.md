# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Requisiti

- Node.js (versione 22 o superiore)

## Installazione e Avvio

1. **Clona il repository**
   ```sh
   git clone https://github.com/StefanoNoce/ssgs-labo-02.git
   cd ssgs-labo-02
   ```

2. **Installa le dipendenze**
   ```sh
   npm ci
   ```

3. **Avvio**
    ```sh
    npm start <comando> [opzioni]
    ```

## Esempi di utilizzo
- **Invertire una stringa**
  ```sh
  npm start 1 "ciao"
  # Output: Stringa invertita: "oaic"
  ```

- **Verificare se una stringa è palindroma**
  ```sh
  npm start 2 "anna"
  # Output: La stringa "anna" è palindroma? true
  ```

- **Troncare una stringa**
  ```sh
  npm start 3 "supercalifragilistico" 10
  # Output: Stringa troncata (max 10): "supercalif..."
  ```

- **Contare le occorrenze dei caratteri**
  ```sh
  npm start 4 "banana"
  # Output: Conteggio caratteri per "banana": { b: 1, a: 3, n: 2 }
  ```

## Esecuzione dei test

Per eseguire i test unitari:
```sh
npm test
```

Per eseguire i test e generare il report di code coverage:
```sh
npm run coverage
```
Il report dettagliato sarà disponibile nella cartella `coverage/`.

## Integrazione Continua (CI)

Questo progetto utilizza GitHub Actions per eseguire automaticamente i test e verificare la coverage ad ogni push. La pipeline esegue i seguenti passaggi:
- Installa le dipendenze.
- Esegue i test con Jest.
- Genera e carica il report di coverage.

Puoi trovare la configurazione della pipeline nel file `.github/workflows/test.yml`.
