let div_content = document.querySelector('#content')
console.log(div_content)
let div_contentAll = document.querySelectorAll('#content')
console.log(div_contentAll)
let li = document.querySelector('.important')
console.log(li)
let li_all = document.querySelectorAll('.important')
console.log(li_all)
li_allArray= Array.from(li_all)
li_allArray.forEach(element => {
    console.log(element)
});