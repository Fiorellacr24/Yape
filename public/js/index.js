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
    url: Header,
    cell: null,
    terms: null,
    name: null,
    email: null,
    password: null,
    code: null,
    card: null,
    month: null,
    year: null
};

$( _ => {
    const root = $('.root');
    render(root);
});