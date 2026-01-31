<script setup>
import CheckList from '../atomi/ChecList.vue';
import ServiceBaseLayout from './ServiceBaseLayout.vue';
</script>

<template>
    <ServiceBaseLayout>

        <!-- Titolo -->
        <template #title>
            Disinfezione e Sanificazione Professionale di Ambienti Civili e Aziendali
        </template>

        <!-- Intro -->
        <template #intro>
            <p>
                Il servizio di disinfezione e sanificazione è progettato per ridurre in modo significativo la carica
                microbica
                presente negli ambienti, contribuendo a creare spazi più sicuri per persone, clienti e operatori.
                Interveniamo
                su ambienti domestici, uffici, strutture ricettive, attività commerciali e aree produttive con
                protocolli
                specifici in base al contesto operativo.
            </p>
        </template>

        <!-- Metodo / Approccio -->
        <template #method-title>
            Metodo di intervento e approccio operativo
        </template>

        <template #method>
            <p>
                Gli interventi vengono pianificati a seguito di una valutazione tecnica degli ambienti e delle superfici
                da
                trattare. Utilizziamo attrezzature professionali e prodotti disinfettanti certificati, applicati secondo
                procedure controllate che garantiscono efficacia, sicurezza per le persone e rispetto delle normative
                vigenti.
            </p>
        </template>

        <!-- Bullet points tecnici -->
        <template #tech-points>
            <CheckList :items="[
                'Valutazione preliminare degli ambienti e delle superfici',
                'Utilizzo di prodotti disinfettanti e sanificanti certificati',
                'Trattamenti mediante nebulizzazione, irrorazione o atomizzazione',
                'Interventi programmabili e piani di mantenimento periodico'
            ]" />
        </template>

        <!-- Benefici -->
        <template #benefits-title>
            Benefici della disinfezione e sanificazione professionale
        </template>

        <template #benefits>
            <p>
                La sanificazione professionale contribuisce in modo concreto alla tutela della salute e al miglioramento
                della
                qualità degli ambienti, riducendo la presenza di batteri, virus e altri microrganismi potenzialmente
                dannosi.
                È uno strumento fondamentale per garantire standard igienici elevati e per trasmettere affidabilità a
                clienti
                e collaboratori.
            </p>
        </template>

        <!-- Bullet points benefici -->
        <template #benefits-points>
            <CheckList :items="[
                'Riduzione della carica microbica su superfici e nell’aria',
                'Miglioramento delle condizioni igienico-sanitarie degli ambienti',
                'Maggiore tutela per personale, clienti e visitatori',
                'Supporto al rispetto delle normative e dei protocolli di sicurezza'
            ]" />
        </template>

        <!-- CTA -->
        <template #cta>
            Contattaci per una valutazione e un piano di sanificazione personalizzato: definiremo l’intervento più
            idoneo per
            garantire ambienti sicuri, igienizzati e conformi agli standard richiesti.
        </template>

    </ServiceBaseLayout>
</template>