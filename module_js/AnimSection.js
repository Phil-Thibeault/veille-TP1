import { Util } from "./Util.js";

export class AnimSection {
  /**
       * Classe permettant de créer et d'animer une introduction
       * @param {string} lesFilms - contient l'ensemble des mots d'intro
       * @param {DOMElement} elementParent - Conteneur de l'animation
           
       }}
       */

  constructor(lesFilms, elementParent) {
    //Récupérer les valeurs passées en paramètre
    this.lesFilms = lesFilms;
    this.elmParent = elementParent;
    this.animFilms(this.lesFilms);
  }

  animFilms(lesFilms) {
    /* Création des élément DOM qui seront animés. 
            Les éléments seront intégré dans le conteneur elmParent
            */
    for (let i = 1; i <= lesFilms.length; i++) {
      let classe = "movie" + i;
      console.log(classe);
      let elmConteneur = this.creerElement(
        this.elmParent,
        "section",
        "",
        ["box", "film", classe],
        classe
      );
      let elmImage = this.creerElement(
        elmConteneur,
        "img",
        lesFilms[i - 1][0],
        "imageAffiche",
        null
      );
      let conteneurTexte = this.creerElement(
        elmConteneur,
        "div",
        "",
        "conteneurTexte",
        null
      );
      let elmTitre = this.creerElement(
        conteneurTexte,
        "h1",
        lesFilms[i - 1][1],
        "titreFilm",
        null
      );
      let elmDescription = this.creerElement(
        conteneurTexte,
        "p",
        lesFilms[i - 1][2],
        "descFilm",
        null
      );
    }

    /*for (let uneLettre of lesLettres) {
      let elmLettres = this.creerElement(elmConteneur, "div", uneLettre, "mot");
      elmLettres.style.animationDelay = i * 0.3 + "s";
      elmLettres.style.color = tabCouleur[i++ % 7];
    }*/
    /* On garde une référence sur la fonction terminerIntro */
    let refTerminerIntro = this.terminerAnim.bind(this);
    //elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
  }

  creerElement(elmParent, balise, contenu, classCSS, id) {
    let noeud = document.createElement(balise);
    if (balise === "img") {
      noeud.src = contenu;
      noeud.setAttribute("alt", classCSS);
    } else if (contenu != "") {
      noeud.innerHTML = contenu;
    }

    if (typeof classCSS === "string") {
      noeud.classList.add(classCSS);
    } else {
      for (let i = 0; i < classCSS.length; i++) {
        noeud.classList.add(classCSS[i]);
      }
    }

    if (id != null) {
      noeud.setAttribute("id", id);
    }

    elmParent.appendChild(noeud);
    return noeud;
  }

  terminerAnim(evt) {
    this.elmParent.firstChild.classList.add("deplacementContenuIntro");
    this.elmParent.firstChild.addEventListener(
      "animationend",
      this.passerVersAnimationSuivante.bind(this)
    );
  }

  passerVersAnimationSuivante(evt) {
    Util.detruireTousLesNoeud(this.elmParent, this.elmParent);
    this.fonction();
  }
}
