import disinfestazione from '@/assets/servizi/disinfestazioni.png'
import derattizzazioneImg from '@/assets/servizi/derattizzazioni.png'
import ServiceDerattizzazione from '@/components/serviceviews/ServiceDerattizzazione.vue'
import ServiceDisinfestazione from '@/components/serviceviews/ServiceDisinfestazione.vue'
import ServiceVolatili from '@/components/serviceviews/ServiceVolatili.vue'
import ServiceSanificazione from '@/components/serviceviews/ServiceSanificazione.vue'
import ServiceTrattamentoLegno from '@/components/serviceviews/ServiceTrattamentoLegno.vue'
import ServiceAziende from '@/components/serviceviews/ServiceAziende.vue'

export const services = [
    {
        slug: 'disinfestazione-insetti',
        label: 'Disinfestazione Insetti',
        title: 'Ambienti protetti, risultati duraturi',
        description: 'Interventi mirati per eliminare infestanti e ripristinare condizioni di igiene e sicurezza in spazi domestici e professionali.',
        heroImage: disinfestazione,
        metaTitle: 'Disinfestazione Insetti | Alpha Range',
        metaDescription: 'Servizi professionali di disinfestazione insetti per abitazioni e aziende.',
        component: ServiceDisinfestazione
    },
    {
        slug: 'derattizzazione',
        label: 'Derattizzazione',
        title: 'Protezione concreta contro topi e ratti',
        description: 'Interventi professionali per eliminare la presenza di roditori e ridurre i rischi sanitari e strutturali negli ambienti di lavoro e abitativi.',
        heroImage: derattizzazioneImg,
        metaTitle: 'Derattizzazione | Alpha Range',
        metaDescription: 'Servizio professionale di derattizzazione.',
        component: ServiceDerattizzazione
    },
    {
        slug: 'volatili',
        label: 'Allontanamento Volatili',
        title: 'Proteggi i tuoi spazi da contaminazioni e degrado',
        description: 'Sistemi dissuasivi professionali per prevenire la presenza di volatili e ridurre i rischi igienico-sanitari negli ambienti esposti.',
        heroImage: derattizzazioneImg,
        metaTitle: 'Volatili | Alpha Range',
        metaDescription: 'Servizio professionale di allontanamento volatili.',
        component: ServiceVolatili
    },
    {
        slug: 'sanificazione',
        label: 'Disinfezione & Sanificazione',
        title: 'Protezione concreta per persone, clienti e ambienti',
        description: 'Trattamenti professionali per ridurre la carica microbica e migliorare la qualità degli spazi in cui si vive e si lavora.',
        heroImage: derattizzazioneImg,
        metaTitle: 'Disinfezione & Sanificazione | Alpha Range',
        metaDescription: 'Servizio professionale di sanificazione.',
        component: ServiceSanificazione
    },
    {
        slug: 'trattamenti-legno',
        label: 'Trattamenti del Legno',
        title: 'Protezione duratura per strutture in legno',
        description: 'Interventi professionali per preservare il legno da degrado biologico e prolungarne l’integrità nel tempo.',
        heroImage: derattizzazioneImg,
        metaTitle: 'Trattamenti del Legno | Alpha Range',
        metaDescription: 'Servizio professionale di trattamento del legno.',
        component: ServiceTrattamentoLegno
    },
    {
        slug: 'aziende',
        label: 'Servizi per Aziende',
        title: 'Servizi Professionali per Aziende',
        description: 'Interventi professionali per preservare il legno da degrado biologico e prolungarne l’integrità nel tempo.',
        heroImage: derattizzazioneImg,
        metaTitle: 'Per le Aziende | Alpha Range',
        metaDescription: 'Servizio professionale di allontanamento volatili.',
        component: ServiceAziende
    }
]