const $gridItem = document.getElementsByClassName("lottie1");
console.log($gridItem)
const gridItem = Array.from($gridItem)
console.log(gridItem)

var _speed = 0.1

function aniClick(event){
    console.log("클릭~");
    console.log(event.target)
    console.log(event.target.speed == 0)

    //on - off 모드
    // if(event.target.mode == "play"){
    //     event.target.stop();
    //     event.target.mode="stop"
    // }else{
    //     event.target.play();
    //     event.target.mode = "play"
    // }
    
    //가속도 모드
    event.target.setSpeed(_speed);
    _speed = _speed+0.7;
    console.log("완료~")
}

function initGrid(item){
    for (var index = 0; index < item.length; index++) {
        item[index].addEventListener("click",aniClick);
    }
    console.log(item);
    console.log(item.length);
    
}

initGrid(gridItem);



const bust = document.getElementById("bust");
const touchButton = document.getElementById("touchButton");

touchButton.addEventListener("click",onClickBust)

function onClickBust(event){

    console.log(bust.style.display)

    bust.style.display = 'block'

}




