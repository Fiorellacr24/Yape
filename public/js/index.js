'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Componentes
    //wrapper.append(Header());
    //wrapper.append(validarNumber());
    //wrapper.append(ingresoCode());
    wrapper.append(state.url(_ => render(root))); 

    root.append(wrapper);
};

const state = {
    data: null,
    id: null,
    url: Header
};

const root = $('.root');
render(root);


$( _ => {

    $.get('http://localhost:3000/api/', (data) => {

        //if (err) { return alert(err.message);}

        state.data = data;

    });

});