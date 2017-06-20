'use strict';

const validarNumber = () => {
    const parentval = $('<section class="container"></section>')
    const containerval = $('<div class="val-number"></div>');
    const image = $('<img class="center-block image-responsive phone" src="./img/icons/phone.png"/>');
    const h4 = $('<h4 class="text-center"><strong>Para comenzar validemos tu número</strong></h4>');
    const p = $('<p class="text-center">Recibirás un SMS con un código de validación</p><br><br>');
    const form = $('<form data-toggle="validator" role="form">');
    const formgroup = $('<div class="form-group"></div>');
    const imgcell = $('<img src="img/icons/phoneandnumber.png" alt="phoneandnumber">');
    const cell = ('<input type="number" class="form-control" id="input" data-maxlength="9" required="required" placeholder="- - - - - - - - -">');
    const check = $('<input class="form-check-input" type="checkbox" id="terms"> Acepto los <a href="#">Términos y condiciones</a></label>');
    const btncontinue = $('<div class="form-group mrgn-top"><button type="submit" class="btn btn-warning" disabled>CONTINUAR</button></div></form>');
    
    containerval.append(image);
    containerval.append(h4);
    containerval.append(p);
    formgroup.append(imgcell);
    formgroup.append(cell);
    form.append(formgroup);
    form.append(check);
    form.append(btncontinue);
    containerval.append(form);
    parentval.append(containerval);
    
    return parentval;
    
};