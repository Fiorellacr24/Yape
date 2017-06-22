'use strict';

const validarNumber = (update) => {
    const parentval = $('<section class="container"></section>')
    const containerval = $('<div class="val-number"></div>');
    const image = $('<img class="center-block image-responsive phone" src="./img/icons/phone.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Para comenzar validemos tu número</strong></h4>');
    const p = $('<p class="text-center">Recibirás un SMS con un código de validación</p><br><br>');
    const form = $('<form data-toggle="validator" role="form"></form>');
    const formgroup = $('<div class="form-group"></div>');
    const input = $('<input class="form-control" type="text" placeholder="- - - - - - - - -" title="Debe empezar con 9" pattern="[9]{1}[0-9]{8}" required>');
    const imgcell = $('<img src="img/icons/phoneandnumber.png" alt="phoneandnumber">');
    const check = $('<input class="form-check-input" type="checkbox" id="terms"> Acepto los <a class="turquesa-letter" href="#">Términos y condiciones</a>');
    const btncontinue = $('<div class="form-group mrgn-top center"><button type="submit" class="btn btn-warning" >CONTINUAR</button></div>');

    //results.data
    containerval.append(image);
    containerval.append(h4);
    containerval.append(p);
    formgroup.append(imgcell);
    formgroup.append(input);
    form.append(formgroup);
    form.append(check);
    form.append(btncontinue);
    containerval.append(form);
    parentval.append(containerval);

    /*check.is(':checked')*/
    /*check.on('change', () =>{
        if(cell.val().length == 9 && check.prop('checked', true)){
            btncontinue.removeAttr('disabled');
        }
        else{
             btncontinue.attr('disabled', 'disabled');
        }
    });*/
    
    btncontinue.on('click', (e)=> {
        e.preventDefault();
        $.post('api/registerNumber',{
            "phone" : input.val(),
            "terms" : true
        }, function(results){
            console.log(results);
            if(results.success == false){
                alert("Datos incorrectos");
            }else{
                state.cell = results.data.phone;
                state.code = results.data.code;
                state.url = ingresoCode;
                update();
            }
        });
    });


    return parentval;
};
/*state.url = ingresoCode;
               update();*/ 
