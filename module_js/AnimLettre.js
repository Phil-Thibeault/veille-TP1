import { Util } from "./Util.js";

export class AnimLettre {
  /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

  constructor(lesLettres, elementParent, fonction) {
    //Récupérer les valeurs passées en paramètre
    this.lesLettres = lesLettres;
    this.elmParent = elementParent;
    this.animLettres(this.lesLettres);
    this.fonction = fonction;
  }

  animLettres(lesLettres) {
    /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
    let i = 0;
    const tabCouleur = [
      "#ffe387",
      "#c8ff8a",
      "#b9ffe5",
      "#ebb8ff",
      "#ffada7",
      "#ffc58f"
    ];

    console.log("mot");
    let elmConteneur = this.creerElement(this.elmParent, "section", "", "mot");

    for (let uneLettre of lesLettres) {
      let elmLettres = this.creerElement(elmConteneur, "div", uneLettre, "mot");
      elmLettres.style.animationDelay = i * 0.3 + "s";
      elmLettres.style.color = tabCouleur[i++ % 7];
    }
    /* On garde une référence sur la fonction terminerIntro */
    //elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
  }

  creerElement(elmParent, balise, contenu, classCSS) {
    console.log(balise);
    console.log(elmParent);
    let noeud = document.createElement(balise);
    if (contenu != "") {
      noeud.innerHTML = contenu;
    }
    noeud.classList.add(classCSS);
    elmParent.appendChild(noeud);

    if (elmParent.childElementCount >= this.lesLettres.length) {
      noeud.addEventListener(
        "animationend",
        this.passerVersAnimationSuivante.bind(this)
      );
    }
    return noeud;
  }

  passerVersAnimationSuivante(evt) {
    this.fonction();
  }
}
