import disinfestazione from '@/assets/servizi/disinfestazioni.png'
import derattizzazioneImg from '@/assets/servizi/derattizzazioni.png'
import Derattizzazione from '@/components/serviceviews/ServiceDerattizzazion.vue'

export const services = [
    {
        slug: 'disinfestazione-insetti',
        label: 'Disinfestazione Insetti',
        title: 'Disinfestazione Insetti',
        description: 'Eliminazione efficace di blatte, zanzare, formiche, pulci e cimici da abitazioni e aziende.',
        heroImage: disinfestazione,
        metaTitle: 'Disinfestazione Insetti | Alpha Range',
        metaDescription: 'Servizi professionali di disinfestazione insetti per abitazioni e aziende.',
        component: Derattizzazione
    },
    {
        slug: 'derattizzazione',
        label: 'Derattizzazione',
        title: 'Derattizzazione professionale',
        description: 'Controllo e eliminazione roditori.',
        heroImage: derattizzazioneImg,
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