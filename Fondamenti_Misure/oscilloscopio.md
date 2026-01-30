# oscilloscopi

Sistema di misura più utilizzato nel dominio del tempo. Ci consente di visualizzare forme d'onda reali.

Quindi ci permette di valutare l'andamento dell'ampiezza del segnale nel tempo.

Consente di misurare e visualizzare su uno schermo la forma d'onda del segna in ingresso, consentendo di determinare i parametri caratteristici di questo.

Come ad esempio l'ampiezza, il periodo, il valore efficace ...

Generalmente sull'asse verticale è riportata la tensione, mentre su quello orizzontale è riportato il tempo.

Abbiamo diverse tipologie di oscilloscopi:

- analogico
- DSO: digital storage oscilloscope
- DPO: digital phosphor oscilloscope

## schermo

Lo schermo dell'oscilloscopio permette di eseguire, visivamente, una prima analisi del segnale.

Senza l'ausilio dei cursori.

Le misurazioni a video sono rese possibili grazie ad un reticolo che suddivide lo schermo in divisioni.

Tipicamente sono 8 divisioni verticali e 10 divisioni orizzontali.

Ogni divisione a sua volta è suddivisa in sotto divisioni, solitamente 5 sottodivisioni.

Ad ogni divisione è attribuito un valore di tensione, nel caso delle verticali, di tempo, nel caso delle orizzontali.

Possiamo quindi calcolare, unicamente utilizzando la griglia: 

- ampiezza del segnale, tensione di picco, tensione di picco picco
- periodo
- sfasamento → nel caso l'oscilloscopio presenti più canali

### divisioni

L'utente può stabilire quanto vale ciascuna divisione.

Quindi impostare dei valori detti **coefficienti di sensibilità**, verticale ed orizzontale.

Possiamo impostare tanti coefficienti di sensibilità quanti sono i canali disponibili dell'oscilloscopio.

Mentre nel caso del coefficiente di sensibilità orizzontale, questo è unico per ogni canale.

Al variare del coefficiente di sensibilità cambiamo la risoluzione ottenibile, ovvero la capacità di discriminare due valori prossimi tra loro.

Ovviamente il valore che possiamo attribuire ad ogni divisione è limitato → i valori sono preimpostati dal costruttore.

Quindi il FONDO SCALA è fisso.

Al variare di $K_v$ modifichiamo la risoluzione in ampiezza dell'oscilloscopio.

Ciò vale sia nel caso di oscilloscopio analogiche che per il digitale, ma ciò avviene in modo diverso.

## misura di sfasamento 

Lo sfasamento tra due segnali può esser ricondotto alla valutazione di un ritardo.

Ovvero all'intervallo di tempo che intercorre tra due zero crossing consecutivi di segnali isofrequenziali.

Tale è quindi calcolabile misurando la quantità di divisioni orizzontali che intercorrono tra i due zero crossing consecutivi.

Abbiamo due modalità per la misura dello sfasamento:

- modo normale
  
  è possibile visualizzare e misurare lo sfasamento tra segnali isofrequenziali valutando la quantità di divisioni tra due zero crossing consecutivi.
- modo XY
  
  Otteniamo un ellisse su cui valutando dei parametri otteniamo lo sfasamento.

  in base al rapporto tra altezza e intercetta all'origine dell'ellisse.

## periodo

Valutare il periodo di un segnale una volta impostato il valore delle divisioni orizzontali.

Si calcola la quantità di divisioni che intercorrono tra due zero crossing con stessa pendenza consecutivi del segnale.

Tale numero deve poi esser moltiplicato per il valore associato ad ogni divisione orizzontale.

Quindi al coefficiente di sensibilità orizzontale.

## impulsi

Posso caratterizzare gli impulsi.

Quindi posso valutare il tempo di salita e di discesa della risposta di un dispositivo quanto in ingresso è presentato un impulso.

Posso valutare inoltre la durata dell'impulso.

Tali valutazioni sono più complesse da eseguire solo con il reticolo, è necessario l'utilizzo dei cursori che possiamo inserire sulla forma d'onda disegnata.

Tali cursori restituiscono il valore di tensione o di tempo in cui vengono posizionati.

L'impedenza in ingresso di un oscilloscopio è generalmente molto alta.

In genere, il valore della resistenza presentata in ingresso è pari a $1M \Omega$, mentre il valore della capacità dipende dal cavo collegato allo strumento.

## circuito per modellare un oscilloscopio

In ingresso all'oscilloscopio un segnale vede una impedenza elevata.

Il valore di tale impedenza dipende dalla sonda che si sta utilizzando.

La sonda è il dispositivo che permette l'interfacciamento tra il segnale e l'oscilloscopio.

Tale sonda è la responsabile dell'incertezza di interazione. Poiché introduce un effetto di filtro passa basso.

Quindi significa che le frequenze elevate vengono attenuate.

Per migliorare l'incertezza dovuta all'attenuazione delle frequenze elevate, la sonda deve esser compensata.


> l'impedenza elevata in ingresso evita che il segnale sia disturbato dall'oscilloscopio, quindi diminuisce l'incertezza di interazione
>


## TRIGGER

Quando la tensione della forma d'onda raggiunge il livello richiesto, un comparatore commuta e invia un segnale di trigger alla base dei tempi.

Il livello richiesto consiste in una valore di tensione specifico e uno specifico segno della pendenza.

Ciò consente alla base dei tempi di sincronizzarsi esattamente con la forma d'onda visualizzata in modo che rimanga stabile sullo schermo.

Altrimenti per ogni spazzolata visualizzeremmo una diversa porzione della forma d'onda.

Modificare il trigger significa modificare il punto corrispondente ad una tensione e ad un segno della pendenza specifici da cui far partire la visualizzazione.

La funzione di trigger può esser eseguita su diverse fonti di segnale, non unicamente dal canale del segnale che vogliamo visualizzare.

Le varie sorgenti possono essere:

- Canale del segnale: la sorgente più comune della forma d'onda utilizzata per fornire il trigger è il canale del segnale stesso. 
- Sorgente esterna: sulla maggior parte degli oscilloscopi è possibile selezionare una sorgente di trigger esterna. Questa può essere molto utile quando un sistema è sincronizzato con un segnale esterno, quindi si utilizza proprio quel segnale come sorgete di trigger.
  
  Quindi la visualizzazione della forma d'onda avviene nell'istante in cui avviene un evento esterno. Utile per capire come reagisce il segnale ad un tale evento da cui dipende. Tale evento viene utilizzato come sorgente di trigger.

- Video

Se non ci fosse il trigger avremo uno sfasamento della forma d'onda visualizzata dovuta al fatto che dopo uno spazzolamento il segnale a dente di sega deve tornare il prima possibile al valore zero. Questa variazione non è istantanea.

Poiché è presente un tempo di ritraccia non nullo.





## DSO gestione della memoria circolare

Si può schematizzare il processo di pre-triggering attraverso la rappresentazione della memoria dati mediante un buffer circolare, avente capacità di M celle di memoria. Durante il processo di campionamento e conversione, queste M celle vengono riempite in modo contiguo.

Al verificarsi del trigger, l'unità elaborativa del DSO *marca* il campione acquisito in quell'istante: in questo modo è possibile individuare i campioni che precedono l'evento di trigger da quelli che lo seguono.

Abbiamo diverse modalità di visualizzazione:

- post-trigger
  
  Tutte le celle successive a quella relativa all'evento di trigger vengono riempite con nuovi campioni. Quindi nella visualizzazione il campione marcato dall'evento di trigger è il primo valore della forma d'onda.
- centered
  
  Solo $\frac{M}{2}$ celle successive a quella relativa all'evento di trigger vengono riempite con nuovi campioni, dopo di che il processo di memorizzazione si arresta.

  In questo modo le $\frac{M}{2}$ celle che precedono la cella corrispondente all'evento di trigger mantengono memorizzati i campioni precedenti all'evento di trigger.
- pre-trigger
  
  Il processo di memorizzazione si arresta in corrispondenza dell'evento di trigger, cosicché tutte le N celle precedenti a quella relativa all'evento di trigger contengono esclusivamente campioni precedenti all'evento di trigger.

La possibilità di visualizzare l'andamento del segnale di misura anche prima del verificarsi dell'evento di trigger si rileva estremamente utile in molte situazioni pratiche. 

Quindi parliamo della modalità di visualizzazione pre-trigger o centered.

Infatti, se l'evento di trigger viene associato ad una condizione particolare del segnale, l'operatore ha la possibilità di osservare l'evoluzione del segnale prima che tale condizione si verifichi.

### campionamento a tempo equivalente asincrono

I campioni sono presi a intervalli regolari dettati normalmente dalla massima velocità di campionamento possibile del dispositivo, **in modo non correlato all'evento di trigger**.

Asincrono si riferisce proprio al fatto che il campionamento è asincrono all'evento di trigger.

Viene misurato il tempo che intercorre fra il generico campione e l'evento di trigger più vicino. Questo tempo viene associato al campione per la successiva visualizzazione del segnale sullo schermo.

Infatti i vari campioni vengono così ordinati da un'algoritmo di ordinamento che si basa proprio su questo intervallo di tempo associato ad ogni campione.


