/* ============================================================
   CONFIGURAZIONE DEL SITO: è l'unico file da modificare dopo la pubblicazione.
   Lascia le virgolette vuote ("") o la lista vuota ([]) per tenere nascosto
   o disattivato un elemento.
   ============================================================ */
const CONFIG = {
  // Email dedicata all'autore (compare nel piè di pagina di entrambe le pagine)
  email: "thomasfinco@protonmail.com",

  // Pagina italiana
  it: {
    linkEbook: "",          // indirizzo Amazon.it dell'ebook, quando è online
    linkCartaceo: "",       // indirizzo Amazon.it del cartaceo, a novembre
    linkRecensione: "",     // pagina "Grazie": https://www.amazon.it/review/create-review?asin=ASIN_DEL_LIBRO
    newsletterAction: "https://assets.mailerlite.com/jsonp/2685372/forms/200472986106463259/subscribe",   // modulo MailerLite "Newsletter IT"
    estratto: []            // paragrafi dell'estratto, uno per voce: vuoto = sezione nascosta
  },

  // English page
  en: {
    linkEbook: "",          // Amazon.com ebook address, once published
    linkCartaceo: "",       // Amazon.com paperback address, once published
    linkRecensione: "",     // "Thanks" page: https://www.amazon.com/review/create-review?asin=BOOK_ASIN
    newsletterAction: "https://assets.mailerlite.com/jsonp/2685372/forms/200473248200132278/subscribe",   // MailerLite form "Newsletter EN"
    estratto: []            // excerpt paragraphs, one per entry: empty = section hidden
  }
};
