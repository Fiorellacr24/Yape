'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Componentes
    wrapper.append(Header());
    //wrapper.append(validarNumber());
    //wrapper.append(ingresoCode());
    
    root.append(wrapper);
};

const root = $('.root');
render(root);

const state = {
    data: null,
    screen: null
};

/*$( _ => {

    getJSON('', (err, json) => {

        if (err) { return alert(err.message);}

        state.data = json;

        const root = $('.root');
        render(root);
    });

});*/