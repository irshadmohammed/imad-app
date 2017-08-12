var button = document.getElementById('counter');
var counter = 0;
button.onClick = function() {
    counetr = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counetr.toString();
}