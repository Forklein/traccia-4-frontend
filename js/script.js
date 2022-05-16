console.log('ok');

// Quesito: Al candida	to si chiede di animare la frase "Smashing the UX" mediante gsap.
// Ogni lettera deve entrare in fadein con uno scaleup da 0 a 1.
// L'animazione di ogni lettera deve partire poco prima del termine della precedente realizzando un 
// effetto a cascata.
// Opzionale
// Gradita la costruzione di una meccanica acquistize di una frase custom fornita dall'utente.


gsap.registerPlugin(SplitText);
TweenMax.fromTo('#wrapper', 2, {scale: 0}, {scale: 1}, 0);