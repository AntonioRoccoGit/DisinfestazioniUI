<script setup>
import CheckList from '../atomi/ChecList.vue';
import ServiceBaseLayout from './ServiceBaseLayout.vue';
</script>
<template>
    <ServiceBaseLayout>

        <!-- Titolo -->
        <template #title>
            Servizi Professionali per Aziende e Attività Produttive
        </template>

        <!-- Intro -->
        <template #intro>
            <p>
                I servizi dedicati alle aziende sono progettati per garantire ambienti di lavoro sicuri, conformi alle
                normative
                igienico-sanitarie e idonei alla continuità operativa delle attività. Operiamo al fianco di imprese,
                strutture
                ricettive, attività commerciali e realtà industriali con soluzioni tecniche su misura e interventi
                programmati.
            </p>
        </template>

        <!-- Metodo / Approccio -->
        <template #method-title>
            Approccio operativo orientato alle esigenze aziendali
        </template>

        <template #method>
            <p>
                Ogni intervento viene pianificato sulla base di un’analisi tecnica delle criticità presenti e dei
                requisiti
                specifici del settore di riferimento. Lavoriamo secondo procedure strutturate che riducono al minimo
                l’impatto
                sulle attività quotidiane, garantendo tracciabilità degli interventi e conformità alle normative
                vigenti.
            </p>
        </template>

        <!-- Bullet points tecnici -->
        <template #tech-points>
            <CheckList :items="[
                'Sopralluoghi tecnici e analisi delle criticità operative',
                'Piani di intervento personalizzati per settore e tipologia di attività',
                'Interventi programmati per la continuità del servizio',
                'Reportistica tecnica e tracciabilità delle attività svolte'
            ]" />
        </template>

        <!-- Benefici -->
        <template #benefits-title>
            Vantaggi per le aziende e le strutture organizzate
        </template>

        <template #benefits>
            <p>
                Affidarsi a un partner tecnico specializzato consente alle aziende di ridurre i rischi operativi e
                reputazionali,
                mantenere elevati standard di igiene e sicurezza e dimostrare conformità ai requisiti richiesti da
                normative,
                audit e controlli. Un approccio strutturato permette inoltre una migliore pianificazione dei costi e
                delle attività.
            </p>
        </template>

        <!-- Bullet points benefici -->
        <template #benefits-points>
            <CheckList :items="[
                'Riduzione del rischio di fermi operativi e non conformità',
                'Miglioramento degli standard igienico-sanitari',
                'Supporto alla conformità normativa e ai controlli ispettivi',
                'Continuità del servizio con interventi pianificati'
            ]" />
        </template>

        <!-- CTA -->
        <template #cta>
            Contattaci per una consulenza dedicata: analizzeremo le esigenze della tua azienda e costruiremo un piano di
            intervento personalizzato, orientato alla sicurezza, alla conformità e alla continuità operativa.
        </template>

    </ServiceBaseLayout>
</template>