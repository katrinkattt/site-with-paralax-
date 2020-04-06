function paralax(event){
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/100}px)`
    })
}
document.addEventListener('mousemove', paralax);

const commentInput = document.getElementById('inputSend');
const commentAdd = document.getElementById('btnAdd');

const btnMain = document.getElementById('mainBtn');

let CommentInput = document.getElementById('inputComm');
var nableBody = document.getElementById("tableBody");
