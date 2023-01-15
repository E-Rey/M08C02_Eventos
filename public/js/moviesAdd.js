window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover',function(){
        this.style.color = 'red'
    })
    titulo.addEventListener('mouseout',function(){
        this.style.color = 'black'
    })

    let estadoSecreto = 0;
    let palabra = 'secreto'
    let pal = ''
    document.addEventListener('keypress',function(e){
        if (e.key == palabra[estadoSecreto]){
            pal += e.key
            estadoSecreto += 1;
            console.log(pal)
        }else{
            estadoSecreto = 0;
            pal='';
        }
        if (pal == 'secreto'){
            alert('palabra secreta');
            pal=''
        }
    })

}