import { contenuIntro } from "./contenuIntro.js"; // le contenu de l'intoduction */
import { Introduction } from "./Introduction.js"; //
import { AnimLettre } from "./AnimLettre.js"; //
import { AnimSection } from "./AnimSection.js";

/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector(".header");
let elmConteneur = document.querySelector(".conteneur");
let intro = new Introduction(contenuIntro, elmHeader, animationLettre);

// debutQuestionnaire()

function animationLettre() {
  /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */

  const lesLettres = "Seigneur des Anneaux";
  let monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnimLettre);
}

function finAnimLettre() {
  let films = [
    [
      "../media/UnexpectedJourney.jpeg",
      "An Unexpected Journey",
      "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug."
    ],
    [
      "../media/DesolationSmaug.jpg",
      "The Desolation of Smaug",
      "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
    ],
    [
      "../media/BattleFiveArmies.jpg",
      "The Battle of the Five Armies",
      "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
    ],
    [
      "../media/FellowshipRing.jpg",
      "The Fellowship of the Ring",
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    ],
    [
      "../media/TwoTowers.jpg",
      "The Two Towers",
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
    ],
    [
      "../media/ReturnKing.jpg",
      "The Return of the King",
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    ]
  ];

  let monAnimSections = new AnimSection(films, elmConteneur);
}
