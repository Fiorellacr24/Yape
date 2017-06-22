'use strict';

const createUser = (update) => {
    const parentreg = $('<section class="container register"></section>')
    const container_reg = $('<div class="val-user"></div>');
    const img_lock = $('<img class="center-block image-responsive lock-img" src="./img/icons/lockone.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Crea tu usuario Yape</strong></h4>');
    const p = $('<p class="gray-letter text-center">Ingresa tu nombre, email y clave de usuario.</p><br>');
    const formgroup = $('<div class="form-group"></div>');
    const img_user = $('<img src="img/icons/user.png" alt="user" class="user">');
    const input_user = $('<input type="text" class="form-control" id="usr" required="required" placeholder="Nombre" required>');
    const img_email = $('<img src="img/icons/message-gray.png" alt="email" class="email">');
    const email = $('<input type="email" class="form-control" id="email" placeholder="correo@ejemplo.com" required>');
    const imglocked = $('<img src="img/icons/lock.png" alt="lock" class="lock">');
    const code = $('<input type="password" class="form-control code" id="input" maxlength="9" required="required" placeholder="Ingresa clave de 6 dígitos" required><div id="pswHelp" class="form-text text-muted center">Cuida esta clave como oro, es tu acceso a Yape.</div>');
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

    const validate = () => {
        if((input_user.val().length != 0) && (/[A-Za-z]+@[a-z]+\.[a-z]+/.test(email.val())) && (/^\d{6}$/.test(code.val())) ){
            btnaccount.prop('disabled', false);
        }else{
            btnaccount.prop('disabled', true);
        }
    }
    
    input_user.on('keyup', () => {
       validate(); 
    });
    
    email.on('keyup', () => {
        validate(); 
    });
    
    code.on('keyup', () => {
        validate(); 
    });

    btnaccount.on('click', (e)=> {
        e.preventDefault();
        $.post('api/createUser', {
            phone: state.cell,
            name: input_user.val(),
            email: email.val(),
            password: code.val()
        }, function(results){
            console.log(results);
            if(results.success == false){
                alert("Datos incorrectos");
            }else{
                state.name = results.data.name;
                state.email = results.data.email;
                state.password = results.data.password;
                state.url = confirmRegister;
                update();;
            }
        });
    });
    return parentreg;
};