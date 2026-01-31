<script setup>
import CheckList from '../atomi/ChecList.vue';
import ServiceBaseLayout from './ServiceBaseLayout.vue';
</script>
<template>
    <ServiceBaseLayout>

        <!-- Titolo -->
        <template #title>
            Disinfestazioni Professionali per Ambienti Civili e Aziendali
        </template>

        <!-- Intro -->
        <template #intro>
            <p>
                Il servizio di disinfestazione è pensato per eliminare in modo efficace insetti infestanti come blatte,
                formiche,
                zanzare, pulci e altri parassiti che compromettono l’igiene e la salubrità degli ambienti. Intervenire
                in modo
                tempestivo consente di prevenire contaminazioni, danni alle strutture e disagi per persone e attività.
            </p>
        </template>

        <!-- Metodo / Approccio -->
        <template #method-title>
            Metodo di intervento e approccio operativo
        </template>

        <template #method>
            <p>
                Ogni intervento di disinfestazione viene pianificato a seguito di un sopralluogo tecnico finalizzato a
                individuare
                la tipologia di infestante, il livello di infestazione e le condizioni ambientali. Utilizziamo tecniche
                mirate e
                prodotti professionali certificati nel pieno rispetto delle normative vigenti.
            </p>
        </template>

        <!-- Bullet points tecnici -->
        <template #tech-points>
            <CheckList :items="[
                'Analisi preliminare e identificazione dell’infestante',
                'Utilizzo di prodotti professionali certificati',
                'Trattamenti mirati per interni ed esterni',
                'Interventi programmati e piani di prevenzione'
            ]" />
        </template>

        <!-- Benefici -->
        <template #benefits-title>
            Benefici del servizio di disinfestazione professionale
        </template>

        <template #benefits>
            <p>
                Affidarsi a un servizio professionale di disinfestazione consente di ottenere risultati duraturi e di
                ridurre
                significativamente i rischi sanitari legati alla presenza di insetti e parassiti negli ambienti di vita
                e di lavoro.
            </p>
        </template>

        <!-- Bullet points benefici -->
        <template #benefits-points>
            <CheckList :items="[
                'Ambienti più salubri e igienicamente sicuri',
                'Riduzione del rischio di contaminazioni e allergeni',
                'Protezione di abitazioni, uffici e locali commerciali',
                'Interventi rapidi con risultati duraturi'
            ]" />
        </template>

        <!-- CTA -->
        <template #cta>
            Contattaci per un sopralluogo e una consulenza personalizzata: valuteremo la situazione e definiremo
            l’intervento
            di disinfestazione più efficace per ripristinare condizioni ottimali di igiene e sicurezza nei tuoi
            ambienti.
        </template>

    </ServiceBaseLayout>
</template>
