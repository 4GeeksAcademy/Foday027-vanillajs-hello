/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let endings = [".com", ".net", ".us", ".io"];

  let alertElement = document.querySelector(".alert");

  if (alertElement) {
    alertElement.innerHTML = "";
    for (let i = 0; i < pronouns.length; i++) {
      let currentPronoun = pronouns[i];
      for (let j = 0; j < adjs.length; j++) {
        let currentAdj = adjs[j];
        for (let k = 0; k < nouns.length; k++) {
          let currentNoun = nouns[k];
          for (let l = 0; l < endings.length; l++) {
            let currentEnding = endings[l];
            let newDomain = `${currentPronoun}${currentAdj}${currentNoun}${currentEnding}`;
            alertElement.innerHTML += newDomain + "<br>";
          }
        }
      }
    }
  }
};
