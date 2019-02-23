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
      "#fac038",
      "#f9b81f",
      "#f9b006",
      "#e09e06",
      "#c78d05",
      "#ae7b04"
    ];

    let elmConteneur = this.creerElement(this.elmParent, "section", "", "mot");

    for (let uneLettre of lesLettres) {
      let elmLettres = this.creerElement(elmConteneur, "div", uneLettre, "mot");
      elmLettres.style.animationDelay = i * 0.3 + "s";
      elmLettres.style.color = tabCouleur[i++ % 6];
    }
    /* On garde une référence sur la fonction terminerIntro */
    //elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
  }

  creerElement(elmParent, balise, contenu, classCSS) {
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
