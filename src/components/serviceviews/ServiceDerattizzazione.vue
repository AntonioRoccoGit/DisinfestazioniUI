<script setup lang="ts">
import ChecList from '../atomi/ChecList.vue';
import ServiceBaseLayout from './ServiceBaseLayout.vue';

</script>

<template>
    <ServiceBaseLayout>
        <template #title>Derattizzazione Professionale per Ambienti Civili e Industriali</template>

        <template #intro>
            Il servizio di derattizzazione è fondamentale per eliminare in modo efficace e sicuro la presenza di topi e
            ratti
            in abitazioni private, condomini, aziende, magazzini, ristoranti e strutture ricettive.
            Un’infestazione non controllata rappresenta un serio rischio per la salute, l’igiene degli ambienti e
            l’integrità delle strutture.
        </template>

        <template #method-title>
            Interventi mirati e soluzioni certificate
        </template>

        <template #method>
            Operiamo con metodologie professionali e prodotti certificati, nel pieno rispetto delle normative vigenti in
            materia
            di sicurezza e tutela ambientale. Ogni intervento è preceduto da un’analisi tecnica dell’ambiente, volta a
            individuare
            le cause dell’infestazione e i punti critici di accesso e nidificazione dei roditori.
        </template>

        <template #tech-points>
            <ChecList :items="[
                'Ispezione preliminare dell’area',
                'Installazione di sistemi di monitoraggio e controllo',
                'Utilizzo di esche e dispositivi professionali certificati',
                'Interventi risolutivi e preventivi'
            ]" />
        </template>

        <template #benefits-title>
            Piani di derattizzazione personalizzati
        </template>

        <template #benefits>
            <p>
                Ogni contesto presenta criticità specifiche. Per questo motivo sviluppiamo piani di derattizzazione
                personalizzati,
                con soluzioni differenziate per ambienti domestici, commerciali e industriali.
                L’obiettivo non è solo eliminare l’infestazione in atto, ma prevenire future ricomparse.
            </p>
        </template>

        <template #benefits-points>
            <ChecList :items="[
                'Riduzione dei rischi di contaminazione alimentare',
                'Tutela della salute di persone e animali domestici',
                'Protezione delle strutture da danni a cavi, impianti e materiali',
                'Interventi rapidi e programmabili'
            ]">

            </ChecList>

        </template>

        <template #cta>
            Contattaci per un sopralluogo e una consulenza personalizzata: analizzeremo la situazione e definiremo la
            soluzione
            più efficace per ripristinare condizioni di sicurezza e igiene nei tuoi ambienti.
        </template>
    </ServiceBaseLayout>
</template>
