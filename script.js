document.addEventListener('DOMContentLoaded', () => {
    console.log("El script JavaScript s'ha carregat correctament.");

    // FUNCIÓ BASE PER A UN EXERCICI DE CORRECCIÓ SIMPLE

    // Aquesta funció simula la revisió d'un exercici
    function revisarEjercicio(idEjercicio, respuestaCorrecta) {
        // 1. Cerca l'element de l'exercici (p. ex., un camp de text o un conjunt de botons)
        const inputUsuario = document.getElementById(idEjercicio);
        
        // 2. Cerca l'element on mostraràs el resultat
        const resultadoDiv = document.getElementById(`resultado-${idEjercicio}`);

        if (!inputUsuario || !resultadoDiv) {
            console.error(`Error: No es troben els elements ${idEjercicio} o resultado-${idEjercicio}`);
            return;
        }

        // 3. Obtén la resposta de l'usuari (assumim que és un camp de text o radio button)
        // Nota: Aquesta part ha de ser adaptada segons el tipus d'exercici (radio, checkbox, text)
        const respuestaUsuario = inputUsuario.value.trim().toLowerCase();

        // 4. Compara la resposta
        if (respuestaUsuario === respuestaCorrecta.toLowerCase()) {
            resultadoDiv.textContent = "✅ Correcte! Molt bé.";
            resultadoDiv.style.color = 'green';
        } else {
            resultadoDiv.textContent = `❌ Incorrecte. La resposta correcta és: ${respuestaCorrecta}`;
            resultadoDiv.style.color = 'red';
        }
    }

    // EXEMPLE D'IMPLEMENTACIÓ:

    // Simulem la funció de revisió per un exercici amb ID 'verb-exercise'
    // Per utilitzar-ho, hauries de cridar aquesta funció quan es prem un botó.
    // P.ex.: document.getElementById('btn-revisar-a2').addEventListener('click', () => {
    //             revisarEjercicio('verb-exercise', 'is going');
    //         });
});
