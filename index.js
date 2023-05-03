
/*function startAnimation() {
  var delay = 0;
  registres.forEach(function(registre) {
    animateRegistre(registre, delay);
    delay += 1000; // Increase the delay for each box by 1 second
  });
}*/ 

function selectElement(Element, delay ,string) {
    setTimeout(function() {
  Element.textContent = string ;
    }, delay);
  }
var co = document.getElementById("CO");
var ram = document.getElementById("RAM");
var rim = document.getElementById("RIM");
var ri = document.getElementById("RI");
var caseMemoire = document.getElementById("caseMemoire");
let array = [] ;
let instTAB = ['AAAA',1,2,3,4];
function premierePhase(adr){
    var delay = 0;

   selectElement(co, delay , adr);
         delay += 1000; // Increase the delay for each box by 1 second
         selectElement(ram,delay,adr);
         delay+=1000;
         selectElement(caseMemoire,delay,instTAB[adr-100]);
         delay+=1000;
        // selectElement(rim,delay,instTAB[adr-100]);
    

}

var startButton = document.getElementById('start-button');
startButton.addEventListener('click', premierePhase(100));