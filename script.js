document.getElementById('montant').addEventListener('input', function () {
    const montant = parseFloat(this.value);
    const resultat = document.getElementById('resultat');

    if (isNaN(montant) || montant < 0) {
        resultat.value = '';
        return;
    }

    const pourboire = montant * 0.15;
    resultat.value = 'Pourboire (15%) : ' + pourboire.toFixed(2);
});
