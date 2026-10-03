/* ============================================================
   CONFIGURAZIONE DEL SITO: è l'unico file da modificare dopo la pubblicazione.
   Lascia le virgolette vuote ("") o la lista vuota ([]) per tenere nascosto
   o disattivato un elemento.
   ============================================================ */
const CONFIG = {
  // Email dedicata all'autore (compare nel piè di pagina di entrambe le pagine)
  email: "",

  // Pagina italiana
  it: {
    linkEbook: "",          // indirizzo Amazon.it dell'ebook, quando è online
    linkCartaceo: "",       // indirizzo Amazon.it del cartaceo, a novembre
    newsletterAction: "",   // indirizzo del modulo (MailerLite o Brevo): vuoto = sezione nascosta
    estratto: []            // paragrafi dell'estratto, uno per voce: vuoto = sezione nascosta
  },

  // English page
  en: {
    linkEbook: "",          // Amazon.com ebook address, once published
    linkCartaceo: "",       // Amazon.com paperback address, once published
    newsletterAction: "",   // form address (MailerLite or Brevo): empty = section hidden
    estratto: []            // excerpt paragraphs, one per entry: empty = section hidden
  }
};
