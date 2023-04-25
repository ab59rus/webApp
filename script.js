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
            counter ++;
            if (rect2.value == res){
                rightAns ++;
                res1.textContent = "Верно";
                actionButton.textContent = "Далее";

            }
            else{
                res1.textContent = "Ошибка";
                actionButton.textContent = "Далее";

            }}
        else{
            actionButton.textContent = "Проверить";
            res1.textContent = "";
            getNext();
            rect2.value = "";
        }
        res2.textContent = String(rightAns) + "/" + String(counter) + ' (' + String(Math.floor(rightAns/counter * 100)) + "%)";

    }
});