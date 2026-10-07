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
    linkEbook: "https://www.amazon.it/dp/B0HM3VLLCF",   // ebook Kindle su Amazon.it
    uscitaEbook: "2026-10-10",   // data di uscita (AAAA-MM-GG): fino a quel giorno il pulsante dice "Preordina"
    linkCartaceo: "",       // indirizzo Amazon.it del cartaceo, a novembre
    linkRecensione: "https://www.amazon.it/review/create-review?asin=B0HM3VLLCF",   // pagina "Grazie": pulsante della recensione
    newsletterAction: "https://assets.mailerlite.com/jsonp/2685372/forms/200472986106463259/subscribe",   // modulo MailerLite "Newsletter IT"
    estratto: []            // paragrafi dell'estratto, uno per voce: vuoto = sezione nascosta
  },

  // English page
  en: {
    linkEbook: "https://www.amazon.com/dp/B0HM3XYZW8",   // Kindle ebook on Amazon.com
    uscitaEbook: "2026-10-10",   // release date (YYYY-MM-DD): until then the button says "Pre-order"
    linkCartaceo: "",       // Amazon.com paperback address, once published
    linkRecensione: "https://www.amazon.com/review/create-review?asin=B0HM3XYZW8",   // "Thanks" page: review button
    newsletterAction: "https://assets.mailerlite.com/jsonp/2685372/forms/200473248200132278/subscribe",   // MailerLite form "Newsletter EN"
    estratto: []            // excerpt paragraphs, one per entry: empty = section hidden
  }
};
