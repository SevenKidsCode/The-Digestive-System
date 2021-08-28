
let backgroundImg = document.getElementById('image');
let bouche = document.getElementById('bouche');
let oesophage = document.getElementById('oesophage');
let estomac = document.getElementById('estomac');
let foie = document.getElementById('foie');
let intestingrele = document.getElementById('intestingrele');
let grosintestin = document.getElementById('grosintestin');
let img_organes = document.getElementById('img_organes');
let transform = document.getElementById('transform');


bouche.addEventListener("click", showDescriptionBouche);
oesophage.addEventListener("click", showDescriptionoesophage);
estomac.addEventListener("click", showDescriptionestomac);
foie.addEventListener("click", showDescriptionfoie);
intestingrele.addEventListener("click", showDescriptionintestingrele);
grosintestin.addEventListener("click", showDescriptiongrosintestin);



function initial() {
    img_organes.style.backgroundImage = "url('./assets/images/appdiges.svg')";

    let organe = document.getElementById('organe');
    organe.innerHTML = "L'appareil digestif";

    let description = document.getElementById('description');
    description.innerHTML = "L’appareil digestif est le système d'organes qui reçoit les aliments,les digère pour en extraire de l'énergie et des nutriments et évacue les déchets restants.Il comprend la bouche, les glandes salivaires, l'œsophage, l'estomac, le pancréas, le foie, la vésicule biliaire, l'intestin grêle, le gros intestin et le rectum.Une fois la nourriture mâchée et avalée, les sucs digestifs libérés par le pancréas et l'estomac la décomposent en substances qui seront facilement absorbées par l'intestin grêle. Les éléments qui ne sont pas assimilés par l'organisme passent dans le gros intestin, formant ainsi des matières fécales qui sont ensuite expulsées par l'anus.";
}



function showDescriptionBouche() {

    transform.classList.add('circle');
    setTimeout(function () {
        if (bouche.innerHTML == '-') {
            bouche.innerHTML = '+';
            bouche.style.backgroundColor = "rgb(146, 216, 143)";

            initial();

        } else {
            bouche.innerHTML = '-';
            bouche.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = 'Le pharynx';

            img_organes.style.backgroundImage = "url('./assets/images/pharynx2.png')";

            let description = document.getElementById('description');
            description.innerHTML = "Dans la bouche, les dents de devant cassent les aliments, les autres mâchent avec l'aide de la langue et des joues. Les aliments sont broyés et imprégnés de salive qui les transforme, les ramollit.<br>Le pharynx est une voie de passage qui se trouve dans la tête et le cou et qui fait partie de l'appareil digestif et de l'appareil respiratoir. Il aide à déplacer la nourriture de la bouche a l'œsophage.";


        }
        transform.classList.remove('circle');


    }, 1000)




}


function showDescriptionoesophage() {

    transform.classList.add('circle');
    setTimeout(function () {
        if (oesophage.innerHTML == '-') {
            oesophage.innerHTML = '+';
            oesophage.style.backgroundColor = "rgb(146, 216, 143)";

            initial();

        } else {
            oesophage.innerHTML = '-';
            oesophage.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "L'œsophage";

            img_organes.style.backgroundImage = "url('./assets/images/oesophage3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "C'est un tube musculaire qui connecte la bouche à l'estomac. Ses parois propulsent les aliments vers l'estomac grâce aux ondes rythmiques produites par les contractions musculaires";

        }
        transform.classList.remove('circle');


    }, 1000)


}


function showDescriptionestomac() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (estomac.innerHTML == '-') {
            estomac.innerHTML = '+';
            estomac.style.backgroundColor = "rgb(146, 216, 143)";

            initial();

        } else {
            estomac.innerHTML = '-';
            estomac.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "L'estomac";

            img_organes.style.backgroundImage = "url('./assets/images/estomac3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "Dans l'estomac, les aliments sont réduits en une bouillie homogène, grâce à un malaxage intense. Ces mouvements (péristaltiques) vont favoriser l'action du suc gastrique renfermant de l'acide chlorhydrique et deux enzymes, la pepsine et la présure, qui permettent toutes deux de dégrader les protéines.";

        }
        transform.classList.remove('circle');


    }, 1000)


}


function showDescriptionfoie() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (foie.innerHTML == '-') {
            foie.innerHTML = '+';
            foie.style.backgroundColor = "rgb(146, 216, 143)";

            initial();

        } else {
            foie.innerHTML = '-';
            foie.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = 'Le foie et le pancreas';

            img_organes.style.backgroundImage = "url('./assets/images/foie3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "Le foie digère les aliments en produisant la bile (stockée dans la vésicule bilaire) afin de dégrader les matières grasses, éliminer les toxines, extraire et stocker certaines vitamines et certains minéraux. Le pancréas produit des enzymes qui aident à dégrader les protéines, les matières grasses et les glucides.";

        }
        transform.classList.remove('circle');


    }, 1000)


}



function showDescriptionintestingrele() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (intestingrele.innerHTML == '-') {
            intestingrele.innerHTML = '+';
            intestingrele.style.backgroundColor = "rgb(146, 216, 143)";

            initial();

        } else {
            intestingrele.innerHTML = '-';
            intestingrele.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "L'intestin grele";

            img_organes.style.backgroundImage = "url('./assets/images/intestingrele2.png')";

            let description = document.getElementById('description');
            description.innerHTML = "Encore appele petit intestin,c'est un organe creux en forme de tube situé entre l'estomac et le gros intestin.Les principales fonctions de l'intestin grêle sont de décomposer (digérer) les aliments et d'absorber les éléments nutritifs tels que les électrolytes, les vitamines et les minéraux.";

        }
        transform.classList.remove('circle');


    }, 1000)


}


function showDescriptiongrosintestin() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (grosintestin.innerHTML == '-') {
            grosintestin.innerHTML = '+';
            grosintestin.style.backgroundColor = "rgb(146, 216, 143)";

            initial();

        } else {
            grosintestin.innerHTML = '-';
            grosintestin.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "Le gros intestin";

            img_organes.style.backgroundImage = "url('./assets/images/grosintestin3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "Le gros intestin ou côlon absorbe l'eau associée aux résidus jusqu'à obtenir des selles (ou matières fécales) semi-solides. Les selles passent ensuite dans le rectum avant d'être évacuées par l'anus.";

        }
        transform.classList.remove('circle');


    }, 1000)


}







