'use strict';

const createUser = (update) => {
    const parentreg = $('<section class="container register"></section>')
    const container_reg = $('<div class="val-user"></div>');
    const img_lock = $('<img class="center-block image-responsive lock-img" src="./img/icons/lockone.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Crea tu usuario Yape</strong></h4>');
    const p = $('<p class="gray-letter text-center">Ingresa tu nombre, email y clave de usuario.</p><br>');
    const formgroup = $('<div class="form-group"></div>');
    const img_user = $('<img src="img/icons/user.png" alt="user" class="user">');
    const input_user = $('<input type="text" class="form-control" id="usr" required="required" placeholder="Nombre">');
    const img_email = $('<img src="img/icons/message-gray.png" alt="email" class="email">');
    const email = $('<input type="email" class="form-control" id="email" placeholder="correo@ejemplo.com">');
    const imglocked = $('<img src="img/icons/lock.png" alt="lock" class="lock">');
    const code = $('<input type="number" class="form-control code" id="input" maxlength="9" required="required" placeholder="Ingresa clave de 6 dígitos"><small id="pswHelp" class="form-text text-muted">Cuida esta clave como oro, es tu acceso a Yape.</small>');
    const btnaccount = $('<button class="center-block btn btn-warning create">CREAR CUENTA</button>');
    
    container_reg.append(img_lock);
    container_reg.append(h4);
    container_reg.append(p);
    formgroup.append(img_user);
    formgroup.append(input_user);
    formgroup.append(img_email);
    formgroup.append(email);
    formgroup.append(imglocked);
    formgroup.append(code);
    container_reg.append(formgroup);
    container_reg.append(btnaccount);
    parentreg.append(container_reg);
    
    return parentreg;
};