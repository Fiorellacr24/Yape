'use strict';

const Header = (update) => {
    const parent = $('<header></header>');
    const container = $('<div class="container"></div>');
    const carousel = $('<div id="carousel-example-generic" class="carousel slide" data-ride="carousel"></div>');
    const indicators = $('<ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"> </li><li data-target="#carousel-example-generic" data-slide-to="1"></li><li data-target="#carousel-example-generic" data-slide-to="2"> </li></ol>');
    const inner = $('<div class="carousel-inner"><div class="item active"><img class="center-block" src="img/icons/icon-people.png" alt="First slide"/><h3 class="text-center">Paga a tus amigos</h3><p class="text-center">Paga a quien quieras desde donde quieras, sin usar efectivo</p></div><div class="item"><img class="center-block" src="img/icons/happy-person.png" alt="Second slide"/><h3 class="text-center">Sin número de cuenta</h3><p class="text-center">Elige a quién pagar desde tu lista de contactos</p></div><div class="item"><img class="center-block" src="img/icons/group-people.png" alt="Third slide"/><h3 class="text-center">Gratis y seguro</h3><p class="text-center">La transferencia es inmediata y gratuita de una cuenta a otra</p></div></div>')
    const registrar = $('<button class="center-block btn btn-warning">REGISTRARME</button>');
    
    carousel.append(indicators);
    carousel.append(inner);
    container.append(carousel);
    container.append(registrar);
    parent.append(container);

    registrar.on('click', _ => {
        state.url = validarNumber;
        //alert(state.url);
        update();
    });
    return parent;
};


