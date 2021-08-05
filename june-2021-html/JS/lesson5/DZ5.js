//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//-- отримує текст з параграфа з id "content"
const paragraph = document.getElementById('content');
const p_text = paragraph.innerText;
console.log(p_text);
//-- отримує текст з блоку з id "rules"
const block = document.getElementById("rules")
const b_text = block.innerText;
console.log(b_text);
//-- замініть текст параграфа з id 'content' на будь-який інший
paragraph.innerText='Корупція made in China. Китайська допомога перетворює країни третього світу на колонії Піднебесної'
//-- замініть текст параграфа з id 'rules' на будь-який інший
block.innerText='111111111111111111111 Корупція made in China. Китайська допомога перетворює країни третього світу на колонії Піднебесної'
//-- змініть кожному елементу колір фону на червоний
paragraph.style.background = 'red';
block.style.background = 'red';
//-- змініть кожному елементу колір тексту на синій
paragraph.style.color = 'blue';
block.style.color = 'blue';
//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
const rulesElement = document.getElementById('rules');
// const classList = rulesElement.classList;
// classList.forEach((c) => {
//     console.log(c);
// })
const classList = rulesElement.getAttribute('class');
console.log(classList)
//-- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
const elements = document.getElementsByClassName('fc_rules');
for (const element of elements) {
    // element.onclick = () => {
    //     console.log('bla bla');
    // }
    //
    // element.onmousemove = () => {
    //     console.log('bla bla');
    // }
    //
    // element.oncontextmenu = (e) => {
    //     e.preventDefault();
    //     console.log('bla bla');
    // }
    element.addEventListener('click', () => {
        console.log('bla bla')
    })

    element.addEventListener('click', () => {
        console.log(element.innerText);
    })

//-- поміняти колір тексту у всіх елементів fc_rules на червоний*/
    element.style.color = 'red'
}






