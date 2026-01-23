import disinfestazione from '@/assets/servizi/disinfestazioni.png'
import derattizzazione from '@/assets/servizi/derattizzazioni.png'

export const services = [
    {
        slug: 'disinfestazione-insetti',
        label: 'Disinfestazione Insetti',
        title: 'Disinfestazione Insetti',
        description: 'Eliminazione efficace di blatte, zanzare, formiche, pulci e cimici da abitazioni e aziende.',
        heroImage: disinfestazione,
        metaTitle: 'Disinfestazione Insetti | Alpha Range',
        metaDescription: 'Servizi professionali di disinfestazione insetti per abitazioni e aziende.',
        content: `
      <h3>Interventi mirati e sicuri</h3>
      <p>Testo...</p>
      <p>Altro testo...</p>
    `
    },
    {
        slug: 'derattizzazione',
        label: 'Derattizzazione',
        title: 'Derattizzazione professionale',
        description: 'Controllo e eliminazione roditori.',
        heroImage: derattizzazione,
        metaTitle: 'Derattizzazione | Alpha Range',
        metaDescription: 'Servizio professionale di derattizzazione.',
        content: `
      <p>Contenuto HTML derattizzazione...</p>
    `
    },
    {
        slug: 'volatili',
        label: 'Allontanamento Volatili'
    },
    {
        slug: 'sanificazione',
        label: 'Disinfezione & Sanificazione'
    },
    {
        slug: 'trattamenti-legno',
        label: 'Trattamenti del Legno'
    },
    {
        slug: 'aziende',
        label: 'Servizi per Aziende'
    }
]