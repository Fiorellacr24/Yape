'use strict';

const card = () => {
    const parentcard = $('<section class="container card"></section>')
    const container_card = $('<div class="cont-data-card"></div>');
    const img_card = $('<img class="center-block image-responsive card-img" src="./img/icons/bcp-logo.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Ingresa la clave de tu tarjeta</strong></h4>');
    const p = $('<p class="gray-letter text-center">Tarjeta '+ state.card +'</p><br>');
    const formgroup = $('<div class="form-group"></div>');
    const imglock = $('<img src="img/icons/lock.png" alt="lock" class="lock">');
    const code = $('<input type="password" class="form-control code" placeholder="- - - - -">');
    const div = $('<div class="center"></div>');
    const register = $('<button type="submit" class="btn btn-warning register" >REGISTRAR</button>');
    
    container_card.append(img_card);
    container_card.append(h4);
    container_card.append(p);
    formgroup.append(imglock);
    formgroup.append(code);
    container_card.append(formgroup);
    div.append(register);
    container_card.append(div);
    parentcard.append(container_card);
    
    return parentcard;
}