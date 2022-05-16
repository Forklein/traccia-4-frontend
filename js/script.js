console.log('ok');

// Quesito: Al candida	to si chiede di animare la frase "Smashing the UX" mediante gsap.
// Ogni lettera deve entrare in fadein con uno scaleup da 0 a 1.
// L'animazione di ogni lettera deve partire poco prima del termine della precedente realizzando un 
// effetto a cascata.
// Opzionale
// Gradita la costruzione di una meccanica acquistize di una frase custom fornita dall'utente.


// const text = 'Smashing the UX';
// const element = document.querySelector('#wrapper');


// const animateText = (text) => {
//     const splitText = text.split('');
//     splitText.forEach((character)=> {
//         const textnode = document.createTextNode(character);
//         element.append(textnode);
//         TweenMax.fromTo('#wrapper', 1, {scale: 0}, {scale: 1}, 0);
//     })
// }


var textDiv = $("#textDiv"),
    sentence = textDiv.html().split(""),
    tl = new TimelineMax({repeat:10, repeatDelay:0.4, yoyo:true}); 
    
TweenLite.set(textDiv, {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}});
textDiv.html("");

$.each(sentence, function(index, val) {
    if(val === " ") {
        val = "&nbsp;";     
    }
    var letter = $("<span/>", {id : "txt" + index}).html(val).appendTo(textDiv);
    tl.to(letter, 1, {autoAlpha:1, ease:Back.easeOut,  rotationX:360, transformOrigin:"50% 50% -20"}, index * 0.05);
});