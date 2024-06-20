let electrons = document.querySelector('.electrons');
let parsedElectrons = parseFloat(electrons.innerHTML);
let eg = 1;
let egm = 1;
let protons = document.querySelector('.protons');
let parsedProtons = parseFloat(protons.innerHTML);
let pg = 1;
let pgm = 1;
let neutrons = document.querySelector('.neutrons');
let parsedNeutrons = parseFloat(neutrons.innerHTML);
let ng = 0.5;
let ngm = 1;
let parsedNg = parseFloat(ng);
let tickspeed = document.querySelector('.tickspeed');
let parsedTickspeed = parseFloat(tickspeed.innerHTML);
setInterval(gainElectrons, parsedTickspeed);
setInterval(gainProtons, parsedTickspeed);
setInterval(gainNeutrons, parsedTickspeed);

let HU1cost = document.querySelector('.HU1cost');
let parsedHU1cost = parseFloat(HU1cost.innerHTML);
let HU1level = document.querySelector('.HU1level');
let parsedHU1level = parseFloat(HU1level.innerHTML);
let HU2cost = document.querySelector('.HU2cost');
let parsedHU2cost = parseFloat(HU2cost.innerHTML);
let HU2level = document.querySelector('.HU2level');
let parsedHU2level = parseFloat(HU2level.innerHTML);
let HU3cost = document.querySelector('.HU3cost');
let parsedHU3cost = parseFloat(HU3cost.innerHTML);
let HU3level = document.querySelector('.HU3level');
let parsedHU3level = parseFloat(HU3level.innerHTML);
let HU3amount = 0;

let HeU1cost = document.querySelector('.HeU1cost');
let parsedHeU1cost = parseFloat(HeU1cost.innerHTML);
let HeU2cost = document.querySelector('.HeU2cost');
let parsedHeU2cost = parseFloat(HeU2cost.innerHTML);
let HeU3cost = document.querySelector('.HeU3cost');
let parsedHeU3cost = parseFloat(HeU3cost.innerHTML);
let HeU3level = document.querySelector('.HeU3level');

function gainElectrons() {
    electrons.innerHTML = (parsedElectrons += (eg * egm)).toFixed(2);
}

function gainProtons() {
    protons.innerHTML = (parsedProtons += (pg * pgm)).toFixed(2);
}

function gainNeutrons() {
    neutrons.innerHTML = (parsedNeutrons += (ng *= ngm)).toFixed(2);
}

function buyHU1() {
    if (parsedElectrons >= parsedHU1cost) {
        parsedElectrons -= parsedHU1cost;
        parsedHU1cost *= 1.5;
        eg ++;
        parsedHU1level ++;

        electrons.innerHTML = parsedElectrons.toFixed(2);
        HU1cost.innerHTML = Math.round(parsedHU1cost);
        HU1level.innerHTML = parsedHU1level;
    }
}

function buyHU2() {
    if (parsedProtons >= parsedHU2cost) {
        parsedProtons -= parsedHU2cost;
        parsedHU2cost *= 1.5;
        pg ++;
        parsedHU2level ++;

        protons.innerHTML = parsedProtons.toFixed(2);
        HU2cost.innerHTML = Math.round(parsedHU2cost);
        HU2level.innerHTML = parsedHU2level;
    }
}

function buyHU3() {
    if (parsedNeutrons >= parsedHU3cost) {
        (parsedNeutrons -= parsedHU3cost).toFixed(2);
        (parsedHU3cost *= 2).toFixed(2);
        egm *= 1.2;
        pgm *= 1.2;
        HU3amount ++;
        parsedHU3level = (1.2 ** HU3amount).toFixed(2);

        neutrons.innerHTML = parsedNeutrons;
        HU3cost.innerHTML = parsedHU3cost;
        HU3level.innerHTML = parsedHU3level;
    }
}

function unlockHe() {
    if(parsedElectrons >= 1000 && parsedProtons >= 1000) {
        parsedElectrons -= 1000;
        parsedProtons -= 1000;
        document.getElementById('div2').style.display = 'block';
        document.getElementById('div1').hidden = true;

        protons.innerHTML = parsedProtons;
        electrons.innerHTML = parsedElectrons;
    }
}

function buyHeU1() {
    if(parsedElectrons >= parsedHeU1cost && parsedProtons >= parsedHeU1cost) {
        parsedElectrons -= parsedHeU1cost;
        parsedProtons -= parsedHeU1cost;
        egm *= 2;
        pgm *= 2
        parsedHeU1cost *= 3;

        protons.innerHTML = parsedProtons.toFixed(2);
        electrons.innerHTML = parsedElectrons.toFixed(2);
        HeU1cost.innerHTML = Math.round(parsedHeU1cost);
    }
}

function buyHeU2() {
    if (parsedNeutrons >= parsedHeU2cost) {
        parsedNeutrons -= parsedHeU2cost;
        ng += 0.5;
        parsedHeU2cost ** 1.25;

        neutrons.innerHTML = parsedNeutrons.toFixed(2);
        HeU2cost.innerHTML = Math.round(parsedHeU2cost);
    }
}

function buyHeU3() {
    if (parsedNeutrons >= parsedHeU3cost) {
        parsedNeutrons -= parsedHeU3cost;
        ngm *= 1.5;
        parsedHeU3cost *= 1.3

        neutrons.innerHTML = parsedNeutrons.toFixed(2);
        HeU3cost.innerHTML = parsedHeU3cost;
    }
}