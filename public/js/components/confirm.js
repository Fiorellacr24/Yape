'use strict';

const confirmRegister = (update) => {
    const parentconfirm = $('<section class="container confirm-register"></section>');
    const containerconfirm = $('<div class="val-confirm"></div>');
    const imgcheck = $('<img src="img/icons/check.png" class="imgcheck center-block"/>');
    const good = $('<p class="purple center sizeletter">!Bien!</p>');
    const use = $('<p class="purple center sizeletter">Ahora puedes usar Yape</p>')

    containerconfirm.append(imgcheck);
    containerconfirm.append(good);
    containerconfirm.append(use);
    parentconfirm.append(containerconfirm);

    /*function reload(){
        state.url = registroTarj;
        setTimeout(state.url, 3000);
    }*/

    const reload = (() => {
        state.url = registroTarj;
        update();
    });
    window.setTimeout(reload,3000);

    return parentconfirm;

};