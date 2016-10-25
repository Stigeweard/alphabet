function rallyJosh(text) {
    text = text.replace(/[.,\/#!$% \^&\*;:{}=\-_`'~()]/g, "").toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var updated = "";
    for (var i = 0; i < text.length; i++) {
        updated += (alphabet.indexOf(text.charAt(i)) + 1) + " ";
    }
    return updated;
};
console.log(rallyJosh("cameron"));


function Chuckiana(text) {
 function returnNum (input) {
   return parseInt(input, 36) - 9
 }
 var position = '';
 for (var i = 0; i < text.length; i++) {
   if(isNaN(returnNum(text[i])) === false) {
     position += ''+returnNum(text[i])+' '
   }
 }
 return position;
}
console.log(Chuckiana("cameron"));


function JonPaulSudunc(text) {
 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var alphabetArray = [];
 for(var i = 0; i < text.length; i++){
   if(alphabet.indexOf(text[i]) !== -1){alphabetArray.push(alphabet.indexOf(text[i])+1)}
 }
 return(alphabetArray);
}
console.log(JonPaulSudunc("cameron"));
