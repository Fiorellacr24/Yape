'use strict';

const ingresoCode = (update) => {
    const parentcode = $('<section class="container code"></section>')
    const containercode = $('<div class="val-code"></div>');
    const imgmessage = $('<img class="center-block image-responsive message" src="./img/icons/message.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Ahora ingresa tu código</strong></h4>');
    const p = $('<p class="gray-letter text-center">Enviamos un SMS con el código de validación al número <strong>#número</strong></p><br><br>');
    const formgroup = $('<div class="form-group"></div>');
    const imglock = $('<img src="img/icons/lock.png" alt="lock" class="lock">');
    const code = $('<input type="number" class="form-control code" id="input" maxlength="9" required="required" placeholder="- - - - -">');
    const cont_timer = $('<div class="gray-letter cont-timer"></div>')
    const timer = $('<span>Reintentar en<span><img class="clock" src="img/icons/clock.png"/><span>#time</span>');

    containercode.append(imgmessage);
    containercode.append(h4);
    containercode.append(p);
    formgroup.append(imglock);
    formgroup.append(code);
    cont_timer.append(timer);
    formgroup.append(cont_timer);
    containercode.append(formgroup);
    parentcode.append(containercode);

    /*const app_clock = () => {

    };

    $(document).ready(function(){
       app_clock();
        setInterval(function(){app_clock();}, 60);
    }); */  

    code.keypress( (e) =>{
        if(e.which == 13){
            state.url = createUser;
            //alert(state.url);
            update();
        }
    });

    return parentcode;
};