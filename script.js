//const screenWidth = window.screen.width;
//const screenHeight = window.screen.height;
//alert(`${screenWidth}, ${screenHeight}`);

//let mainElem = document.querySelector('.main');
//mainElem.style.backgroundColor = 'yellow';

let globalRes;
let counter = 0;
let rightAns = 0;
let res;
const actionButton = document.querySelector('.btn');

const rect1 = document.querySelector('.rect1');
const rect2 = document.querySelector('.rect2');

const res1 = document.querySelector('.res12');
const res2 = document.querySelector('.res22');

function getNext(){
    let randNum1 = Math.floor(Math.random() * 10);
    let randNum2 = Math.floor(Math.random() * 10);
    res = randNum1 * randNum2
    //alert(`${randNum1} * ${randNum2}`);
    rect1.value = `${randNum1} × ${randNum2}`;
}

getNext()

actionButton.addEventListener('click', () => {
    if (rect2.value != ""){
        if(actionButton.textContent != "Далее"){
            actionButton.style.background = "gray";
            counter ++;
            if (rect2.value == res){
                rightAns ++;
                res1.textContent = "Верно";
                res1.style.color = "green"
                actionButton.textContent = "Далее";

            }
            else{
                res1.textContent = "Ошибка";
                res1.style.color = "red"
                actionButton.textContent = "Далее";

            }}
        else{
            actionButton.style.background = "#FFDC40";
            actionButton.textContent = "Проверить";
            res1.textContent = "";
            getNext();
            rect2.value = "";
        }
        res2.textContent = String(rightAns) + "/" + String(counter) + ' (' + String(Math.floor(rightAns/counter * 100)) + "%)";

    }
});