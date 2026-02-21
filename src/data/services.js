import disinfestazione from '@/assets/servizi/disinfestazioni.webp'
import derattizzazioneImg from '@/assets/servizi/derattizzazione.webp'
import volatiliImg from '@/assets/servizi/allontanamentoVolatili.webp'
import disinfezioniImg from '@/assets/servizi/disinfezioni.webp'
import trattamentoLegnoImg from '@/assets/servizi/trattamentoLegno.webp'
import aziendeImg from '@/assets/servizi/aziende.webp'

import ServiceDerattizzazione from '@/components/serviceviews/ServiceDerattizzazione.vue'
import ServiceDisinfestazione from '@/components/serviceviews/ServiceDisinfestazione.vue'
import ServiceVolatili from '@/components/serviceviews/ServiceVolatili.vue'
import ServiceSanificazione from '@/components/serviceviews/ServiceSanificazione.vue'
import ServiceTrattamentoLegno from '@/components/serviceviews/ServiceTrattamentoLegno.vue'
import ServiceAziende from '@/components/serviceviews/ServiceAziende.vue'
import { markRaw } from 'vue'
export const services = [
    {
        slug: 'disinfestazione-insetti',
        label: 'Disinfestazione Insetti',
        title: 'Ambienti protetti, risultati duraturi',
        description: 'Interventi mirati per eliminare infestanti e ripristinare condizioni di igiene e sicurezza in spazi domestici e professionali.',
        heroImage: disinfestazione,
        metaTitle: 'Disinfestazione Insetti | Alpha Range',
        metaDescription: 'Servizi professionali di disinfestazione insetti per abitazioni e aziende.',
        component: markRaw(ServiceDisinfestazione)
    },
    {
        slug: 'derattizzazione',
        label: 'Derattizzazione',
        title: 'Protezione concreta contro topi e ratti',
        description: 'Interventi professionali per eliminare la presenza di roditori e ridurre i rischi sanitari e strutturali negli ambienti di lavoro e abitativi.',
        heroImage: derattizzazioneImg,
        metaTitle: 'Derattizzazione | Alpha Range',
        metaDescription: 'Servizio professionale di derattizzazione.',
        component: markRaw(ServiceDerattizzazione)
    },
    {
        slug: 'volatili',
        label: 'Allontanamento Volatili',
        title: 'Proteggi i tuoi spazi da contaminazioni e degrado',
        description: 'Sistemi dissuasivi professionali per prevenire la presenza di volatili e ridurre i rischi igienico-sanitari negli ambienti esposti.',
        heroImage: volatiliImg,
        metaTitle: 'Volatili | Alpha Range',
        metaDescription: 'Servizio professionale di allontanamento volatili.',
        component: markRaw(ServiceVolatili)
    },
    {
        slug: 'sanificazione',
        label: 'Disinfezione & Sanificazione',
        title: 'Protezione concreta per persone, clienti e ambienti',
        description: 'Trattamenti professionali per ridurre la carica microbica e migliorare la qualità degli spazi in cui si vive e si lavora.',
        heroImage: disinfezioniImg,
        metaTitle: 'Disinfezione & Sanificazione | Alpha Range',
        metaDescription: 'Servizio professionale di sanificazione.',
        component: markRaw(ServiceSanificazione)
    },
    {
        slug: 'trattamenti-legno',
        label: 'Trattamenti del Legno',
        title: 'Protezione duratura per strutture in legno',
        description: 'Interventi professionali per preservare il legno da degrado biologico e prolungarne l’integrità nel tempo.',
        heroImage: trattamentoLegnoImg,
        metaTitle: 'Trattamenti del Legno | Alpha Range',
        metaDescription: 'Servizio professionale di trattamento del legno.',
        component: markRaw(ServiceTrattamentoLegno)
    },
    {
        slug: 'aziende',
        label: 'Servizi per Aziende',
        title: 'Servizi Professionali per Aziende',
        description: 'Supportiamo aziende, attività commerciali e realtà industriali con servizi professionali di prevenzione, controllo e gestione delle infestazioni.',
        heroImage: aziendeImg,
        metaTitle: 'Per le Aziende | Alpha Range',
        metaDescription: 'Collaborazione con aziende',
        component: markRaw(ServiceAziende)
    }
]

export const servicesRoute = [
    { label: 'Disinfestazione', route: '/servizi/disinfestazione-insetti' },
    { label: 'Derattizzazione', route: '/servizi/derattizzazione' },
    { label: 'Volatili', route: '/servizi/volatili' },
    { label: 'Sanificazione', route: '/servizi/sanificazione' },
    { label: 'Trattamenti del legno', route: '/servizi/trattamenti-legno' },
    { label: 'Servizi per Aziende', route: '/servizi/aziende' }
];