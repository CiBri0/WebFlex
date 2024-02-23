
var x = 0;
var y = 0;

function mouse(id) {
    var event = window.event;

    var cursor = [x,y];

    var img = document.getElementById(id);

    var center = [img.style.right + img.style.width / 2, img.style.top + img.style.height / 2];
    if (cursor[0] > img.style.right && cursor[0] < img.style.right + img.style.width && cursor[1] > img.style.top && cursor[1] < img.style.top + img.style.height) {
        var vector = [cursor[0] - center[0], cursor[1] - center[1]];
        vector = divise_vector(vector, 4);
        console.log(vector)
    }
}

function divise_vector(vector, diviser) {
    return [vector[0] / diviser, vector[1] / diviser]
}

function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
}


document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
