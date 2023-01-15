window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo = document.querySelector('figure img');

/*    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    } */

    logo.addEventListener('mouseover',function(){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })

    /* creo no lo pide pero por las dudas..*/
    logo.addEventListener('mouseout',function(){
        body.style.backgroundColor = '#ffffff'
        body.classList.remove('fondoMoviesList');
    })
    
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}