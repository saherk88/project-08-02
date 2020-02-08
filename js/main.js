// var myTextarea=document.getElementById("textme").innerHTML;
// var selectSize=document.getElementById("size").innerHTML;
// function sizes() {
//     myTextarea.style.fontSize=selectSize.value;
// }

function changeBold() {
    if (document.getElementById('textme').style.fontWeight != 'bold') {
        document.getElementById('textme').style.fontWeight = 'bold';
    } else {
        document.getElementById('textme').style.fontWeight = 'normal';
   
    }
}
