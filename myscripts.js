function build() {

    for (x = 0; x < 40; x++) {
        var columna = document.createElement('div');
        columna.id = 'columna';
        columna.className = 'columna';
        columna.classList.add('c' + x);
        document.getElementsByClassName('tablero')[0].appendChild(columna);
        for (y = 0; y < 30; y++) {
            var casilla = document.createElement('div');
            casilla.id = 'casilla';
            casilla.className = 'disabled';
            //casilla.setAttribute("onclick", "this.classList = 'enabled';");
            casilla.classList.add('f' + y);
            casilla.classList.add('c' + x);
            document.getElementsByClassName('columna')[x].appendChild(casilla);
        }
    }

}

$(function() {
    $('.disabled').click(function() {
        $(this).toggleClass('disabled enabled');
        //var clase = $(this).attr('class');
        alert(clase);
    });
});

$(function() {
    $('.play').click(function() {
        for (x = 0; x < 40; x++) {
            for (y = 0; y < 30; y++) {
                //var clase = $(this).attr('class');
                //if .attr('class') contains 
            }
        }
    });
});

function vecinosVivos(fx, cx) {
    var contador = 0;
    /*if (fx >= f1 && cx >= 1) {
        if (fx - 1)
    } else if ()
}*/


}

window.onload = build;