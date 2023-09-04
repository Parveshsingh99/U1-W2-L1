/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//I datatype sono delle tipologie di dati che posso assegnare ad una variabile nel linguaggio JS, ovvero uno spazio di memoria disponibile che permette di conservare un dato per poterlo elaborare.
//Questi datatype sono:
//Stringa, composto da una sequenza di caratteri alfanumerici delimitato da uno stesso tipo di simboli (il mio dato si deve trovare quindi tra virgolette doppie uguali o tra apici dello stesso genere).
//Numero, è un dato puramente numerico. Può contenere qualsiasi tipo di numero, che sia esso decimale o intero.
//Boolean, è un dato che può assumere solo due valori, TRUE o FALSE.
//Undefined, permette di dichiarare una variabile senza dover neccessariamente dare un dato.
//Null, indica una variabile a cui non ho ancora dato un dato ma che posso in questo caso assegnare in un secondo momento.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Parvesh"
console.log(name) 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
   let number2 = 20 
   console.log(number1+number2)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
   console.log(x) 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

  name = "Singh"
 console.log(name)
  const surname = "Singh" 
  //surname = "Paolo"  impossibilità di riassegnare un valore alla variabile const

  

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

 let number3 = 4
 let number4 = number3 - x
 console.log(number4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

 let name1 = "john"
 let name2 = "John"
 console.log(name1===name2)
 console.log(name1!==name2)