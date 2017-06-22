'use strict';

const registroTarj = (update) => {
    const parentregcard = $('<section class="container regcard"></section>')
    const container_regcard = $('<div class="cont-data-card"></div>');
    const img_card = $('<img class="center-block image-responsive card-img" src="./img/icons/bcp-logo.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Registra tu tarjeta débito BCP</strong></h4>');
    const p = $('<p class="gray-letter text-center">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p><br>');
    const formgroup = $('<div class="form-group"></div>');
    const ico_card = $('<img src="img/icons/card.png" alt="card" class="card">');
    const input_tarj = $('<input type="number" class="form-control" maxlength="14" pattern="[0-9]{14}" required>');
    const scan = $('<div class="center"><img class="scan" src="./img/icons/scan.png"/><span class="turquesa-letter">Escanear tarjeta</span></div><br>');
    const cont_venc = $('<div class="cont-venc"></div>');
    const text_venc = $('<span>Fecha de vencimiento</span>');
    const div = $('<div class="right"></div>')
    const month = $('<input type="number" class="month" placeholder="Mes" min="01" max="12" required><span>/</span>');
    const year = $('<input type="number" class="year" min="17" max="24" placeholder="Año" required>');
    const btncontinue = $('<button type="submit" class="btn btn-warning" >CONTINUAR</button>');
    
    container_regcard.append(img_card);
    container_regcard.append(h4);
    container_regcard.append(p);
    formgroup.append(ico_card);
    formgroup.append(input_tarj);
    container_regcard.append(formgroup);
    container_regcard.append(scan);
    cont_venc.append(text_venc);
    div.append(month);
    div.append(year);
    cont_venc.append(div);
    container_regcard.append(cont_venc);
    container_regcard.append(btncontinue);
    parentregcard.append(container_regcard);
    
    btncontinue.on('click', (e)=> {
        e.preventDefault();
        $.post('api/registerCard', {
            phone: state.cell,
            cardNumber: input_tarj.val(),
            cardMonth: month.val(),
            cardYear: year.val(),
            cardPassword: state.code
        }, function(results){
            console.log(results);
            if(results.success == false){
                alert("Datos incorrectos");
            }else{
                state.card = results.data.cardNumber;
                state.month = results.data.cardMonth;
                state.year = results.data.cardYear;
                state.url = card;
                update();;
            }
        });
    });
    
    return parentregcard;
};