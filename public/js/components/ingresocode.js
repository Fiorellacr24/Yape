'use strict';

const ingresoCode = () => {
    const parentcode = $('<section class="container code"></section>')
    const containercode = $('<div class="val-code"></div>');
    const imgmessage = $('<img class="center-block image-responsive message" src="./img/icons/message.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Ahora ingresa tu código</strong></h4>');
    const p = $('<p class="text-center">Enviamos un SMS con el código de validación al número <strong>#número</strong></p><br><br>');
    const formgroup = $('<div class="form-group"></div>');
    const imglock = $('<img src="img/icons/lock.png" alt="lock">');
    const cell = ('<input type="number" class="form-control" id="input" data-maxlength="9" required="required" placeholder="- - - - -">');
        
    containercode.append(imgmessage);
    containercode.append(h4);
    containercode.append(p);
    formgroup.append(imglock);
    formgroup.append(cell);
    containercode.append(formgroup);
    parentcode.append(containercode);
    
    return parentcode;
}