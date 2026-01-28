# note

## BIPM

Ufficio internazionale dei pesi e delle misure. Si tratta di un'organizzazione internazionale che rappresenta l'autorità suprema nel campo della metrologia a livello globale.

Ha il compito di rendere uniformi le misurazioni a livello globale. Assicura che tutte le misurazioni siano riferibili al SI. Ovvero che siano tracciabili al Sistema internazionale di unità.

Consiste nell'organo principale che definisce gli standard di misura primari che consistono in campioni di riferimento attraverso i quali è possibile tarare altri campioni conoscendo l'incertezza dei primi.

Ogni risultato di misura è riferibile se attraverso una serie finita ed initerrotta di tarature attraverso la catena metrologica si arriva agli standard primari.


## misurazione come processo aleatorio

la misurazione, abbiamo detto, è un processo sperimentale ovvero che contiene una componente di aleatorietà dovuta alle grandezze di influenza che possono modificare in modo aleatorio o sistematico il valore della lettura dello strumento.

Il contributo delle grandezze di influenza può esser casuale o sistematico.

Infatti dividiamo il contributo di errore dovuto a queste grandezze di influenza come errore sistematico e errore casuale.

- errore sistematico → errore che si presenta in modo predicibile o costante.
	
	può esser attenuato dall'operazione di calibrazione che permette di ottenere uno strumento èiù affidabile.

	Ovviamente si parla di attenuazione perché questi non sono errori ma contributi di incertezza, perché se si parla di errori si presuppone di conoscere il valore vero del misurando, che non possiamo mai conoscere.

- errore casuale → componente di errore che si presenta in modo imprevedibile. Che è possibile attenuare unicamente mediante uno studio statistico su N letture ottenute da N misurazioni dello stesso misurando 

Quindi per stimare il valore di un misurando è necessario ripetere un certo numero di volte la misurazione e realizzare una analisi statistica sulle letture dello strumento.

Quindi essendo che utilizziamo un approccio probabilistico, arriviamo ad ottenere un risultato di misura una fascia di intercezza e una probabilità che il valore effettivamente ricada nella fascia di incertezza.

Quindi stiamo effettivamente accettando che con una probabilità non trascurabile il risultato di misura non ricada nella fascia di incertezza.


Notiamo che tali letture ricadono in una fascia compresa dalla lettura massima e minima.

Tale intervallo lo possiamo suddividere in sottointervalli, chiamati classi, a cui associamo il numero di occorrenze che una lettura è caduta in tale classe.

Se al numero di occorrenze per ogni classe dividiamo per il numero di letture complessive otteniamo l'**istogramma del numero di occorrenze**.

Se definiamo E come la lettura di un singolo esperimento aleaorio, possiamo ricavare la **frequenza statistica** e andanto a far tendere N ad infinito otteniamo che tale valore si avvicina sempre di più alla **probabilità di occorrenza**.

Quindi per studiare il processo di misurazione come un processo aleatorio sono necessarie N misurazioni dello stesso misurando. La lettura dell'esperimento consiste nella variabile aleatoria. 

Tale variabile aleatorio potrebbe essere: continua, discreta oppure mista.

Le funzioni di probabilità sono leggi analitiche che associano ad una variabile aleatoria la probabilità di ciascuna sua occorrenza.

Tali leggi sono dette distribuzioni di probabilità e si possono scrivere in diverse forme.

Infatti avremo per le variabili aleatorie discrete: 

- funzione di probabilità di massa, riguarda l'aspetto locale
- funzione di probabilità cumulativa, riguarda l'aspetto globale

Invece per le variabili aleatorie continue:

- funzione di densità di probabilità, riguarda l'aspetto locale
- funzione di probabilità comulativa, riguarda l'aspetto globale

Queste funzioni ci informano della probabilità di occorrenza di una lettura o di un intervallo di letture.

## Parametri sintetici fondamentali

Molto spesso non si possono avere a disposizione le funzioni di probabilità, ma è molto più semplice ottenere quelli che sono parametri sintetici che caratterizzano parzialmente il comportamento di una variabile aleatoria.

Questi parametri sono: 

- media statistica
- varianza → da cui possiamo ricavare, come radice positiva, lo scarto tipo: molto utile perché ha la stessa unità di misura del misurando

La varianza mi da un'informazione riguardante la dispersione quadratica media delle letture rispetto al valor medio. Si calcola come il valor medio dello scarto quadratico rispetto la media statistica.

Nel caso di misurazioni non abbiamo una pdf ma un campione della popolazione costituito da sole N letture.

## cosa rappresenta la variabile aleatoria

la variabile aleatoria rappresenta l'insieme dei possibili valori assumibili dal risultato di misurazione su uno stesso misurando specifico.

## utilità del teorema del limite centrale 

IL teorema del limite centrale dice che:

La funzione densità di probabilità di un fenomeno complesso, come una misurazione indiretta, sotto l'azione di diverse contributi indipendenti e aleatori, all'aumentare del numero di contributi, tende ad assumere un andamento di tipo gaussiano.

Nonostante i contributi non abbiano un andamento di tipo gaussiano, ma un qualsiasi andamento anche diverso tra loro.

L'ipotesi importante da fare è che ogni contributo non deve avere un peso predominante rispetto gli altri.

Tutti i contributi di un unico fenomeno complesso devono avere peso simile.

---

Questo teorema ci serve perché spesso avremo a che fare con misurazioni indirette. Il teorema ci sta dicendo che se consideriamo un fenomeno complesso in cui intervengono diversi altri fenomeni e ciascuno dei fenomeni segue una propria distribuzione e che siano indipendenti tra loro; allora la combinazione di questi fenomeni tende a seguire una distribuzione di tipo gaussiana anche se i fenomeni che la compongono non hanno quell'andamento.\
Questo è sempre più vero quanto più è elevato il numero di contributi, ovvero fenomeni, che compongono il fenomeno complesso che stiamo studiando.

Questa è un'approssimazione che diminuisce all'aumentare dei contributi.

La cosa importante da aggiungere è che non ci sia un contributo dominante rispetto gli altri. Tutti i contributi devono avere un peso simile tra loro rispetto il fenomeno complesso.

## modello indiretto

Il modello indiretto si applica quando il valore della grandezza che vogliamo conoscere non può essere ottenuto tramite un confronto diretto con un campione, ma deve essere calcolato partendo da altre grandezze.

Nel modello indiretto esiste una relazione matematica, detta **funzione di misura**, che lega il misurando alle cosiddette grandezze di ingresso.

Tutte le grandezze di ingresso vengono ottenute mediante un modello diretto, ovvero mediante un confronto diretto con un campione di misura della stessa specie.

## incertezza e probabilità

L'incertezza definisce l'ampiezza della fascia di valori entro cui si muove il valore vero del misurando.

La probabilità quantifica quanto sia il livello di confidenza che il valore vero cada effettivamente dentro il range di valore ragionevolmente attribuibili al misurando.

Valutare la compatibilità di misure eseguite con strumenti di misura diversi su un misurando mi permette di diminuire l'incertezza e di verificare se uno strumento è guasto oppure ha bisogno di essere calibrato.

Due misure sono compatibili se la fascia di valori assegnate al misurando durante le due misurazioni hanno un'intersezione non nulla.

## Taratura

Il diagramma di taratura è la relazione che permette di ricavare, da ogni lettura fornita da un dispositivo per la misurazione, la misura da assegnare al misurando.

Fornisce una relazione tra la lettura fornita in uscita dallo strumento e la corrispondente fascia di possibili valori del misurando che hanno generato quella lettura. Ovvero la corrispondenza tra lettura e fascia di valori del misurando, $M = \{x, U\}$.

---

VIM:

Operazione eseguita in condizioni specificate, che in una prima fase stabilisce una relazione tra i valori di una grandezza, con le rispettive incertezze di misura, forniti da campioni di misura, e le corrispondenti indicazioni, comprensive delle incertezze di misura associate, e in una seconda fase usa queste informazioni per stabilire una relazione che consente di ottenere in risultato di misura a partire da un'indicazione.

La curva di taratura quindi sarà una relazione biunivoca tra la lettura dello strumento e la fascia di possibili valori ragionevolmente attribuibili al misurando.

## risuluzione assoluta e relativa

La risoluzione assoluta rappresenta la minima quantità apprezzabile dallo strumento. Consiste nello scarto minimo tra due valori consecutivi che lo strumento può distinguere.

La risoluzione relativa come rapporto tra la risoluzione assoluta e il valore della grandezza misurata. Consiste in un indice di qualità: più è bassa, più la misure è accurata.

Ci dà un'idea sul valore della grandezza per la quale ho maggiore affidabilità.

Migliora all'aumentare dei conteggi. I conteggi fatti dipendono oltre che dalle specifiche del sistema di misura, quindi dal clock, anche dalla natura del segnale che stiamo misurando.

Quindi a seconda del misurando potrei avere una misura più o meno affidabile.

Indica quanto è precisa una misurazione rispetto al valore del misurando

## risoluzione definizione generale

La risoluzione identifica la più piccola variazione della grandezza sottoposta a misurazione che provoca un cambiamento rilevabile nell'indicazione.

è la capacità di uno strumento di misura di discriminare tra valori molto vicini del misurando.

Consiste nella più piccola variazione del misurando che provoca una variazione dell'indicazione. Ovvero una variazione dello stato a cui è portato il sistema di misura.

Una variazione inferiore alla risoluzione dello strumento di misura non produrrà una variazione rilevabile dell'indicazione.

## schema base di un sistema di misura digitale

Lo schema principale di un sistema di misura principale consiste di diverse componenti che operano sul segnale al fine di ottenere un'indicazione che ci permetta di ricavare poi l'intervallo di possibili valori ragionevolmente attribuibili al misurando.

Quindi sono presenti:

- physical system
- trasducer sensor
- signal conditioning
- analog-digital converter
- computer

Gli step della conversione analogico/digitale sono:

1) campionamento → ottengo campioni di specifici istanti di tempo, equidistanziati di un certo periodo, il periodo di campionamento
2) quantizzazione → essendo che il calcolatore lavora con un'algebra finita, non è possibile per questo utilizzare i valori che assumono i campioni, perché sono valori reali. Quindi il numero di valori che può assumere il campione è infinito. Il calcolatore può lavorare su un range finito di valori, quindi identifichiamo i livelli di quantizzazione. Questi livelli di quantizzazione fanno parte dell'intervallo nel quale l'ampiezza dei campioni varia.
   
   Il valore di ogni campione è approssimato al livello di quantizzazione più vicino.
3) codifica → ad ogni livello di quantizzazione associamo una codifica. Affinche ciò accada il calcolatore deve avere a disposizione una quantità di bit pari da poter rappresentare univocamente ogni livello di quantizzazione.
   
   Quindi il numero di questi livelli è limitato dalla quantità di bit che abbiamo a disposizione.

## incertezza dovuto allo zero crossing

Per realizzare la finestra di Gate, nel caso della misurazione diretta di periodo, si sfrutta il periodo del segnale in ingresso.

Il dispositivo per determinare l'inizio e la fine della finestra di Gate rileva lo zero crossing con uno specifico segno della pendenza.

Tale rilevazione dello zero crossing può esser affetta di disturbi dovuti a rumori che degradano la forma d'onda del segnale.

Quindi per tenere in considerazione il ritardo o l'anticipo della rilevazione dello zero crossing rispetto quello reale dobbiamo aggiungere nella valutazione dell'incertezza assoluta della misurazione diretta di periodo il contributo che tiene traccia di tale incertezza sulla dimensione della finestra di gate.

Quindi Te consiste nell'incertezza della stima del punto di zero crossing.

La consideriamo due volte per entrambi i punti, supponendo che la natura del segnale sia la stessa in ambo le parti.

## specifiche solitamente riportate sugli strumenti di misura

- Caratteristiche del misurando
- Caratteristiche dell'output
- Caratteristiche statiche
- Caratteristiche dinamiche
- Condizioni operative
- Vita utile, tempo di funzionamento
- Caratteristiche fisiche
  
## strumenti a valore istantaneo, a valor medio, a valore costante

#### **Strumento a valore istantaneo**

Forniscono il valore del segnale in ingresso in determinati istanti teporali.

- è comunque necessario un tempo di misura finito, anche se la misura è istantanea
- devono essere acquisiti dei campioni del segnale in ingresso
- consentono di osservare l'evoluzione temporale del segnale
   
#### **Strumenti a valore medio**

Forniscono il valore medio del segnale di ingresso in un determinato intervallo di tempo.

- è necessario un processo di integrazione → per valutare la media
- il valore medio si riferisce all'intervallo di integrazione
- il tempo di misura è maggiore del tempo di integrazione

#### **Strumenti a valore costante**

Forniscono il valore del segnale in ingresso attraverso un processo di integrazione su un certo intervallo di tempo

- è fornito un valore medio
- abbiamo una buona reiezione del rumore
- generalmente includono un voltmetro digitale

#### **Voltmetri digitali**

**caratteristiche principali**:

Sfruttano un processo di integrazione (integrazione ADC)

ADC è un particolare tipo di conversione analogico-digitale in cui il segnale viene prima integrato nel tempo per poi esser convertito in digitale.

- sono utilizzati per misurare sia la tensione continua sia quella alternata
- per misurazioni AC, un blocco di condizionamento dà in uscita un segnale DC, proporzionale al misurando.

Per quanti riguarda in particolare le misurazioni DC, hanno ottime prestazioni in termini di:

- linearità
- risoluzione
- stabilità
- reiezione del rumore

## voltmetri numerici a doppia rampa

La tensione ai capi del condensatore fino all'istante $t_1$ dipende solo da $V_x$; Ad essa dipende la pendenza della rampa durante la fase di UP.

La durata $T_D$ della fase di DOWN, scarica del condensatore, dipende solo dalla $V_x$, essendo la pendenza della rampa costante, durante il tempo di scarica.

Ogni variazione del misurando determina una variazione del tempo di scarica $T_D$ e di conseguenza una variazione nel conteggio attraverso il quale possiamo risalire a $V_x$.

Viene chiamato voltmetro a convertitore tensione-tempo proprio perché fa in modo che il problema della misurazione della tensione ricada in una misurazione di un intervallo di tempo.

Tale intervallo di tempo è direttamente proporzionale alla tensione del segnale incognito constante.

## trasduttore e sensore

- trasduttore
  
  dispositivo, impiegato in una misurazione, che fornisce una grandezza di uscita avente una relazione specificata con la grandezza in ingresso.

  Tali grandezze possono essere della stessa specie o meno
- sensore
  
  elemento di un sistema di misura che è direttamente influenzato dal fenomeno, corpo o sostanza che propongono la grandezza da sottoporre a misurazione.

## giunzione

Una giunzione è il punto di contatto fisico tra due conduttori realizzati con materiali diversi.

## risoluzione relativa

incertezza del conteggio rispetto al valore misurato.

## problema nell'utilizzo di un voltmetro nelle termocoppie se non si considerano le leggi delle termocoppie

Nel momento in cui colleghi i puntali di un voltmetro ai terminali della termocoppia, non ho più un circuito a due materiali, ma abbiamo creato altre due giunzioni parassite nei punti di contatto.

I punti di contatto tra i puntali del voltmetro e i terminali della termocoppia.

Quindi all'atto della misura della tensione introduciamo nuovi metalli nel circuito, creando giunzioni indesiderate che, per effetto Seebeck, generano tensioni proprie. Se leggessimo il display il valore sarebbe alterato dal fatto che abbiamo aggiunto due giunzioni che non abbiamo considerato.

Quindi il valore di tensione che otteniamo non è effettivamente quello corretto da utilizzare nella relazione della termocoppia.

## morfologia delle giunzioni

- giunzione esposta:
  
  i due fili sono saldati tra loro e lasciati scoperti.
- giunzione a massa:
  
  la giunzione è saldata direttamente alla guaina protettiva metallica.
- giunzione isolata:
  
  la giunzione è racchiusa nella guaina ma separata elettricamente da essa tramite isolanti.

## temperatura di riferimento sulla giunzione fredda

Il motivo per cui è fondamentale mantenere o conoscere con precisione la temperatura della giunzione di riferimento (giunzione fredda) risiede nella natura stessa del sensore: la termocoppia è, di fatto, un sensore di differenza di temperatura. 

La tensione misurata dal sistema è proporzionale al gradiente termico tra la giunzione primaria (calda) e quella dove viene misurata la tensione (riferimento).

Senza conoscere la temperatura esatta della giunzione fredda, è impossibile determinare la temperatura assoluta della giunzione calda.

Esistono diverse strategie per gestire questo riferimento.

1) metodo del bagno di ghiaccio o del bagno termostatico (per una temperatura di riferimento generica)
   
   Questo è il metodo classico più preciso, utilizzato spesso come standard di laboratorio.

   Quindi è utile per tarare le termocoppie.

   - La giunzione di riferimento viene fisicamente immersa in un bagno di acqua e ghiaccio fondente.
   - Ci permette di mantenere la temperatura di riferimento costante a $0°$.
   
   Questo metodo ha però delle limitazioni: non è pratico nell'uso comune a causa della necessità di un bagno di ghiaccio
2) metodo della compensazione elettronica
   
   Nelle applicazioni comuni, il bagno di ghiaccio viene sostituito da un circuito integrato chiamato compensatore di giunzione fredda.

   La giunzione fredda, quella di riferimento, può trovarsi a qualsiasi temperatura, purché tale temperatura sia misurata con estrema precisione da un sensore aggiuntivo

   Solitamente si utilizza un sensore che non richiede a sua volta una compensazione, come un termistore o un sensore a semiconduttore.

## cosa mi garantisce la legge 5

La legge delle temperature intermedie afferma che la tensione totale tra due temperature estreme è la somma algebrica delle tensioni generate negli intervalli intermedi.

$$E_{T_1,T_3} = E_{T_1,T_2} + E_{T_2,T_3}$$

Le tabelle di taratura sono create in laboratorio tenendo la giunzione fredda ad rigorosamente a $0°$. Quindi la tabella mi dà informazioni riguardanti la tensione che ottengo in base alla temperatura raggiunta dalla giunzione calda.

Cosa accade se invece la temperatura della giunzione fredda, quella di riferimento non è 0 ma ad esempio $25°$?

Senza questa legge la tabella che mi informa delle tensioni rispetto la temperatura di riferimento zero gradi non avrebbe senso.

La soluzione consiste nel sommare i pezzi di tensione.

Se conosco la temperatura di riferimento, ovvero la temperatura della giunzione fredda e la tensione di Seebeck che si è generata per via della differenza di temperatura con la giunzione calda.

Per valutare la temperatura della giunzione calda sommo alla tensione di Seebeck che ho ottenuto, quella relativa alla differenza di temperatura ($x°-25°$), la tensione che otterrei se la differenza di tensione fosse tra ($25° - 0°$), valore contenuto nella tabella.

Quindi ottengo una valore di tensione che corrisponde alla differenza di temperatura $x° - 0°$. Dalla tabella quindi posso vedere questa tensione a quale temperatura della giunzione calda corrisponde. 


# Da vedere

- misurazione di intervallo di tempo.
- misurazione dello sfasamento






