<script setup lang="ts">
import ChecList from '../atomi/ChecList.vue';

</script>

<template>
    <section class="service-content">

        <h2 class="mb-3">Derattizzazione Professionale per Ambienti Civili e Industriali</h2>

        <p class="mb-4">
            Il servizio di derattizzazione è fondamentale per eliminare in modo efficace e sicuro la presenza di topi e
            ratti
            in abitazioni private, condomini, aziende, magazzini, ristoranti e strutture ricettive.
            Un’infestazione non controllata rappresenta un serio rischio per la salute, l’igiene degli ambienti e
            l’integrità delle strutture.
        </p>

        <h3 class="h5 mt-4 mb-2">Interventi mirati e soluzioni certificate</h3>

        <p class="mb-3">
            Operiamo con metodologie professionali e prodotti certificati, nel pieno rispetto delle normative vigenti in
            materia
            di sicurezza e tutela ambientale. Ogni intervento è preceduto da un’analisi tecnica dell’ambiente, volta a
            individuare
            le cause dell’infestazione e i punti critici di accesso e nidificazione dei roditori.
        </p>

        <ChecList :items="[
            'Ispezione preliminare dell’area',
            'Installazione di sistemi di monitoraggio e controllo',
            'Utilizzo di esche e dispositivi professionali certificati',
            'Interventi risolutivi e preventivi'
        ]" />
        <h3 class="h5 mt-4 mb-2">Piani di derattizzazione personalizzati</h3>

        <p class="mb-3">
            Ogni contesto presenta criticità specifiche. Per questo motivo sviluppiamo piani di derattizzazione
            personalizzati,
            con soluzioni differenziate per ambienti domestici, commerciali e industriali.
            L’obiettivo non è solo eliminare l’infestazione in atto, ma prevenire future ricomparse.
        </p>

        <h3 class="h5 mt-4 mb-2">Perché affidarsi a un servizio professionale</h3>

        <p class="mb-3">
            Interventi improvvisati o l’utilizzo di prodotti non professionali risultano spesso inefficaci e
            potenzialmente pericolosi.
            Affidarsi a tecnici specializzati garantisce risultati duraturi, riduzione dei rischi sanitari e piena
            conformità alle normative.
        </p>

        <ul class="mb-4 ps-3">
            <li>Riduzione dei rischi di contaminazione alimentare</li>
            <li>Tutela della salute di persone e animali domestici</li>
            <li>Protezione delle strutture da danni a cavi, impianti e materiali</li>
            <li>Interventi rapidi e programmabili</li>
        </ul>

        <p class="fw-semibold">
            Contattaci per un sopralluogo e una consulenza personalizzata: analizzeremo la situazione e definiremo la
            soluzione
            più efficace per ripristinare condizioni di sicurezza e igiene nei tuoi ambienti.
        </p>

    </section>
</template>
