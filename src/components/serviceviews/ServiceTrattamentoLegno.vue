<script setup>
import CheckList from '../atomi/ChecList.vue';
import ServiceBaseLayout from './ServiceBaseLayout.vue';
</script>
<template>
    <ServiceBaseLayout>

        <!-- Titolo -->
        <template #title>
            Trattamento Professionale del Legno per Ambienti Civili e Strutturali
        </template>

        <!-- Intro -->
        <template #intro>
            <p>
                Il trattamento del legno è un intervento fondamentale per preservare strutture, superfici e manufatti
                lignei
                dall’azione di insetti xilofagi, umidità e agenti biologici che ne compromettono nel tempo integrità e
                resistenza.
                Operiamo su travi, solai, coperture, infissi e arredi in legno, sia in contesti residenziali che
                professionali.
            </p>
        </template>

        <!-- Metodo / Approccio -->
        <template #method-title>
            Metodo di intervento e approccio operativo
        </template>

        <template #method>
            <p>
                Ogni intervento è preceduto da un’analisi tecnica dello stato di conservazione del legno e dal
                riconoscimento delle
                eventuali infestazioni o condizioni di degrado presenti. In base al contesto, applichiamo trattamenti
                mirati
                antitarlo, protettivi e consolidanti, utilizzando prodotti professionali certificati e tecniche a bassa
                invasività.
            </p>
        </template>

        <!-- Bullet points tecnici -->
        <template #tech-points>
            <CheckList :items="[
                'Ispezione preliminare delle strutture in legno',
                'Trattamenti antitarlo e antixilofagi mirati',
                'Applicazione di prodotti protettivi e consolidanti',
                'Interventi localizzati o su superfici estese'
            ]" />
        </template>

        <!-- Benefici -->
        <template #benefits-title>
            Benefici del trattamento professionale del legno
        </template>

        <template #benefits>
            <p>
                Un trattamento professionale consente di prolungare la vita utile delle strutture in legno, prevenendo
                danni
                strutturali e costi di ripristino elevati. Inoltre, contribuisce a mantenere nel tempo le
                caratteristiche
                estetiche e funzionali degli elementi lignei, migliorando il valore complessivo dell’immobile.
            </p>
        </template>

        <!-- Bullet points benefici -->
        <template #benefits-points>
            <CheckList :items="[
                'Prevenzione dei danni causati da insetti xilofagi',
                'Miglioramento della durabilità delle strutture in legno',
                'Riduzione dei costi di manutenzione straordinaria',
                'Valorizzazione estetica e funzionale degli ambienti'
            ]" />
        </template>

        <!-- CTA -->
        <template #cta>
            Contattaci per una valutazione tecnica: analizzeremo lo stato delle superfici e delle strutture in legno e
            definiremo l’intervento più efficace per garantirne protezione e durabilità nel tempo.
        </template>

    </ServiceBaseLayout>
</template>
