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
    node index.js <comando> [opzioni]
    ```

## Esempi di utilizzo
- **Invertire una stringa**
  ```sh
  node index.js 1 "ciao"
  # Output: Stringa invertita: "oaic"
  ```

- **Verificare se una stringa è palindroma**
  ```sh
  node index.js 2 "anna"
  # Output: La stringa "anna" è palindroma? true
  ```

- **Troncare una stringa**
  ```sh
  node index.js 3 "supercalifragilistico" 10
  # Output: Stringa troncata (max 10): "supercalif..."
  ```

- **Contare le occorrenze dei caratteri**
  ```sh
  node index.js 4 "banana"
  # Output: Conteggio caratteri per "banana": { b: 1, a: 3, n: 2 }
  ```