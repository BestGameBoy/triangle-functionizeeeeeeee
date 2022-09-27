// Triangle Perimeter Assignment Start Code

document.getElementById('btn').addEventListener('click', btnClicked);



function btnClicked(){
    let verAX = +document.getElementById('vertexAX').value;
    let verAY = +document.getElementById('vertexAY').value;
    let verBX = +document.getElementById('vertexBX').value;
    let verBY = +document.getElementById('vertexBY').value;
    let verCX = +document.getElementById('vertexCX').value;
    let verCY = +document.getElementById('vertexCY').value;

    document.getElementById('ab-value').innerHTML = dist(verAX, verAY, verBX, verBY)
    document.getElementById('ac-value').innerHTML = dist(verAX, verAY,verCX, verCY)
    document.getElementById('bc-value').innerHTML = dist(verBX, verBY, verCX, verCY)
    let AB = dist(verAX, verAY, verBX, verBY)
    let AC = dist(verAX, verAY, verCX, verCY)
    let BC = dist(verBX, verBY, verCX, verCY)

    document.getElementById('abc-value').innerHTML = (AB + AC + BC)
}

function dist(x1, y1, x2, y2){
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}   