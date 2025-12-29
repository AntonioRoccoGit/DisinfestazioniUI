import img1 from '@/assets/carosello1.png'
import img2 from '@/assets/carosello2.jpg'
import CardCarosello from '@/components/atomi/CardCarosello.vue';

export const jumboItems = [
    {
        component: CardCarosello,
        props: { id: 1, titolo: "Tuffati con noi in una fantastica avventura", descrizione: "Ciao questa è una descrizione" },
        bgImage: img1
    },
    {
        component: CardCarosello,
        props: { id: 2, titolo: "Esploriamo insieme le coste della calabria", descrizione: "Ciao questa è una descrizione" },
        bgImage: img2
    }
];