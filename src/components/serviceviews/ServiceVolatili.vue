<script setup>
import CheckList from '../atomi/ChecList.vue';
import ServiceBaseLayout from './ServiceBaseLayout.vue';
</script>
<template>
    <ServiceBaseLayout>

        <!-- Titolo -->
        <template #title>
            Allontanamento Volatili Professionale per Ambienti Civili e Aziendali
        </template>

        <!-- Intro -->
        <template #intro>
            <p>
                Il servizio di allontanamento volatili è fondamentale per prevenire la presenza e la nidificazione di
                piccioni,
                gabbiani e altri uccelli in prossimità di edifici, strutture industriali e aree pubbliche. La permanenza
                prolungata dei volatili comporta rischi concreti per l’igiene degli ambienti e per la salute delle
                persone,
                oltre a causare danni alle superfici e agli impianti.
            </p>
        </template>

        <!-- Metodo / Approccio -->
        <template #method-title>
            Metodo di intervento e approccio operativo
        </template>

        <template #method>
            <p>
                Gli interventi di allontanamento vengono progettati su misura in base al contesto architettonico e al
                livello
                di infestazione. Utilizziamo sistemi dissuasivi professionali, non invasivi e conformi alle normative
                vigenti,
                con l’obiettivo di prevenire la sosta e la nidificazione dei volatili nel tempo.
            </p>
        </template>

        <!-- Bullet points tecnici -->
        <template #tech-points>
            <CheckList :items="[
                'Sopralluogo tecnico e analisi dei punti di posa e nidificazione',
                'Installazione di sistemi dissuasivi meccanici e visivi',
                'Soluzioni non invasive e rispettose della fauna',
                'Interventi su coperture, cornicioni, impianti e superfici esposte'
            ]" />
        </template>

        <!-- Benefici -->
        <template #benefits-title>
            Importanza dell’allontanamento volatili per la tutela della salute
        </template>

        <template #benefits>
            <p>
                I volatili possono veicolare agenti patogeni attraverso deiezioni, piume e materiali di nidificazione,
                contribuendo alla diffusione di microrganismi potenzialmente dannosi per l’uomo. L’accumulo di guano,
                inoltre,
                favorisce la proliferazione di parassiti e batteri, compromettendo le condizioni igienico-sanitarie
                degli ambienti.
                Un intervento professionale consente di ridurre significativamente tali rischi e di mantenere gli spazi
                sicuri
                e conformi alle normative in materia di igiene.
            </p>
        </template>

        <!-- Bullet points benefici -->
        <template #benefits-points>
            <CheckList :items="[
                'Riduzione del rischio di contaminazioni batteriche e parassitarie',
                'Miglioramento delle condizioni igienico-sanitarie degli ambienti',
                'Protezione di facciate, coperture e impianti da degrado e corrosione',
                'Prevenzione di ricadute negative sull’immagine di strutture e attività'
            ]" />
        </template>

        <!-- CTA -->
        <template #cta>
            Contattaci per un sopralluogo e una consulenza personalizzata: valuteremo le criticità presenti e definiremo
            il sistema di allontanamento volatili più efficace per proteggere i tuoi ambienti nel tempo.
        </template>

    </ServiceBaseLayout>
</template>