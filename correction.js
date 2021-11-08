//1
let divContent = document.querySelector('#content')
console.log(divContent);

//2
let divContentAll = document.querySelectorAll('#content')
console.log(divContentAll);

//3 
let classImporant = document.querySelector('.important')
console.log(classImporant);

//4
let classImporantAll = document.querySelectorAll('.important')
console.log(classImporantAll);

classImporantAll.forEach(el => {
    let monText = el.textContent
    console.log(
            monText.substring(0, monText.length-1).toLowerCase() 
            + 
            monText.substring(monText.length-1).toUpperCase()
        );

});

//6
let idContent = document.getElementById('content')
console.log(idContent);
let paraGrand = document.getElementsByClassName('grandParagraphe')[0]
console.log(paraGrand);