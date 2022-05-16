// const text = 'Smashing the UX';
const text = prompt('Please, insert the text: ');
const element = document.querySelector('#wrapper');

const animateText = (text) => {
    const splitText = text.split('');
    let i = 0;
    const runAnimate = setInterval(() => {
        if(i === (splitText.length -1)){
            clearInterval(runAnimate);
        }
        const textnode = document.createElement(`div-${i}`);
        if(splitText[i] === " ") {
            splitText[i] = "&nbsp;";     
        }
        element.append(textnode);
        textnode.innerHTML = splitText[i];
        console.log(textnode);
        TweenMax.fromTo(textnode, 1+i, {scale: 0}, {scale: 1}, 0);
        i++;
    }, 500);
}


animateText(text);



// const animateText = (text) => {
//     const splitText = text.split('');
//     splitText.forEach((character)=> {
//         const textnode = document.createTextNode(character);
//         element.append(textnode);
//         TweenMax.fromTo('#wrapper', 1, {scale: 0}, {scale: 1}, 0);
//     })
// }

// animateText(text);


// var textDiv = $("#textDiv"),
//     sentence = textDiv.html().split(""),
//     tl = new TimelineMax({repeat:10, repeatDelay:0.4, yoyo:true}); 
    
// TweenLite.set(textDiv, {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}});
// textDiv.html("");

// $.each(sentence, function(index, val) {
//     if(val === " ") {
//         val = "&nbsp;";     
//     }
//     var letter = $("<span/>", {id : "txt" + index}).html(val).appendTo(textDiv);
//     tl.to(letter, 1, {autoAlpha:1, ease:Back.easeOut,  rotationX:360, transformOrigin:"50% 50% -20"}, index * 0.05);
// });