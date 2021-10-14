# Angular - Exercise 9

Da un progetto vuoto:

- Creare un componente `show-counter` e un componente `edit-counter`
- Avere un servizio che mantenga lo stato applicativo di una proprietà privata `counter` inizializzata a 0 che non potrà mai essere negativo
- Il servizio dovrà:
  - Esporre un metodo per recuperare il valore di `counter`
  - Esporre un metodo che aumenti il valore di `counter` di un numero deciso dall'utente (default 1)
  - Esporre un metodo che diminuisca il valore di `counter` di un numero deciso dall'utente (default 1)
  - Qualora si tentasse a diminuire il valore di `counter` sotto lo 0, bisognerà mostrare un messaggio di errore nel componente `edit-counter`
- Il componente `show-counter` dovrà mostrare il valore della proprietà `counter`
- Il componente `edit-counter` dovrà mostrare:
  - Un campo di input (che determinerà il valore che si vorrà sommare o sottrarre a `counter`)
  - Due bottoni `Aggiungi { valore dinamico }` e `Sottrai { valore dinamico }`
  