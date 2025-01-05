import apiKeyLocal from './config.js';

const loadGoogleMapsAPI = (config) => {
 // Costanti di base
 const API_NAME = "The Google Maps JavaScript API";
 const GOOGLE_NAMESPACE = "google";
 const IMPORT_LIBRARY = "importLibrary";
 const CALLBACK_NAME = "__ib__";
 
 // Riferimenti globali
 const doc = document;
 const win = window;
 
 // Inizializza namespace Google
 win[GOOGLE_NAMESPACE] = win[GOOGLE_NAMESPACE] || {};
 
 // Inizializza namespace Maps
 const maps = win[GOOGLE_NAMESPACE].maps = win[GOOGLE_NAMESPACE].maps || {};
 
 // Set per le librerie
 const libraries = new Set();
 const params = new URLSearchParams();
 
 // Dichiarazione scriptPromise
 let scriptPromise = null;
 
 // Funzione per caricare lo script
 const loadScript = () => {
   return scriptPromise || (scriptPromise = new Promise(async (resolve, reject) => {
     // Crea elemento script
     const script = doc.createElement("script");
     
     // Imposta i parametri URL
     params.set("libraries", [...libraries] + "");
     
     // Converte le chiavi di configurazione in formato URL
     for (let key in config) {
       const urlKey = key.replace(/[A-Z]/g, match => "_" + match[0].toLowerCase());
       params.set(urlKey, config[key]);
     }
     
     // Imposta callback
     params.set("callback", `${GOOGLE_NAMESPACE}.maps.${CALLBACK_NAME}`);
     
     // Costruisci URL
     script.src = `https://maps.${GOOGLE_NAMESPACE}apis.com/maps/api/js?${params}`;
     
     // Gestione errori
     script.onerror = () => {
       scriptPromise = reject(Error(`${API_NAME} could not load.`));
     };
     
     // Gestione nonce per sicurezza
     const existingScript = doc.querySelector("script[nonce]");
     if (existingScript?.nonce) {
       script.nonce = existingScript.nonce;
     }
     
     // Aggiungi script al documento
     maps[CALLBACK_NAME] = resolve;
     doc.head.append(script);
   }));
 };
 
 // Gestisci caricamento libreria
 if (maps[IMPORT_LIBRARY]) {
   console.warn(`${API_NAME} only loads once. Ignoring:`, config);
 } else {
   maps[IMPORT_LIBRARY] = (library, ...options) => {
     libraries.add(library);
     return loadScript().then(() => maps[IMPORT_LIBRARY](library, ...options));
   };
 }
};

// Configurazione che usa la chiave API in base all'ambiente
const isLocal = window.location.hostname === 'localhost' || 
              window.location.hostname === '127.0.0.1' ||
              window.location.hostname.startsWith('192.168.') ||
              window.location.hostname.startsWith('10.') ||
              window.location.hostname.startsWith('172.16.');
// "AIzaSyCsGl4s0BvZSQm75Wv7JO4cMmQudYmMG1E"
const config = {
 key: isLocal ? apiKeyLocal() : process.env.APIKEY,
 v: "weekly",
 libraries: "marker",
 mapIds: "125ad7ffc6402a94"
};

// Inizializza
loadGoogleMapsAPI(config);