![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.001.png)

Programación Web Full Stack![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.002.png)

![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.003.png) **Agregando interacción con eventos**

**Práctica integradora**

**Objetivo**

Seguimos practicando y aprendiendo nuevos trucos con JavaScript. Ahora llegó el momento de que veamos cómo incorporar interacción a nuestro sitio **Digital Movies**, haciendo uso de los eventos del mouse y del teclado**.**

¡Buena suerte! 😎👍✨

` `**1**

![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.004.png)

![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.005.png)**Micro desafío - Paso 1:![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.002.png)**

Utilizaremos de base el siguiente **pro[yecto creado con Express** (record](https://drive.google.com/file/d/1J-rBttX_ZLPdPqQrFL9YrhGZR4n03Sbs/view?usp=sharing)**emos instalar todas las dependencias del proyecto, ejecutando el comando **npm install** 😉). Además, aprovecharemos la base de datos **mov[ies_db** (no ol](https://drive.google.com/file/d/1hTfCUmhsW6onS0_pMf7kipGbaIA7UHjZ/view?usp=sharing)**videmos activar el servicio de MySQL

en nuestro equipo). De esta manera, todo funcionará correctamente.

Una vez realizado todos los pasos anteriores, debemos hacer lo siguiente:

- En **index.ejs**, agregar un evento para que cada vez que el usuario haga clic sobre el logo de Digital House se muestre el menú lateral con  **id="menu"**. El estilo y el menú lateral ya existe en el proyecto de base. Tips: podemos usar el atributo **classLis[t con el método toggle** par](https://developer.mozilla.org/es/docs/Web/API/Element/classList)**a agregar o quitar la clase  **class="menu"**.
- En **index.ejs**, agregar un evento que permita ocultar el menú lateral cuando el mouse deje el área del menú.** 
- En **movies.ejs**, modificar el práctico de la clase anterior para que el modo oscuro se aplique si el usuario pasa el mouse sobre el logo de Digital House, en la vista del listado de películas.
- En **moviesAdd.ejs**, establecer que, cada vez que se pase el mouse por el título 'AGREGAR PELÍCULA', este cambie su color.

![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.005.png)**Micro desafío - Paso 2:**

En **moviesAdd.ejs** vamos con un desafío bastante más complejo. Tenemos que crear una máquina de estados. Nuestro objetivo será detectar cuando el usuario tipee de corrido la palabra “**secreto**”, en el input para ingresar el título de la película. El problema es que solamente podemos definir un evento cuando el usuario presiona una tecla y no cuando escribe toda una palabra. Por eso es que para empezar el ejercicio vamos a definir una variable **estadoSecreto** que empiece con el número **0**. A partir de ahí, vamos a implementar un código interno que solo nosotros sabemos:

- 0 significa que todavía no escribió nada.![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.002.png)
- 1 significa que escribió “s”.
- 2 significa que escribió “se”.
- 3 significa que escribió “sec”.
- 4 significa que escribió “secr”.
- 5 significa que escribió “secre”.
- 6 significa que escribió “secret”.

**¿Qué debe hacer nuestro código?**

Definiremos un evento al presionar una tecla que implemente la siguiente lógica:

1. Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1.
1. Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2.
1. Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3.
1. Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4.
1. Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5.
1. Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6.
1. Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y se dispara una alerta que diga **“SECRETO MAGICO**”.
1. Si no se cumple ninguna de las condiciones, el estado vuelve a 0.

**Conclusión![](Aspose.Words.331ccb72-f73c-469b-a513-a1f171d2e5a6.002.png)**

Existen muchos eventos que podemos utilizar para agregar interacción a nuestros sitios, por lo que a la hora de programarlos debemos preguntarnos qué es lo que queremos hacer y en base a ello buscar el evento que nos permita hacerlo.

**¡Hasta la próxima!**
`  `**4****
