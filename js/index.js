//https://codepen.io/freeCodeCamp/full/qRZeGZ
const citas = [
    {
        text: "Los ordenadores son inútiles. Sólo pueden darte respuestas",
        author: "Pablo Picasso"
    },
    {
        text: "Java es, en muchos sentidos, C++-",
        author: "Michael Feldman"
    },
    {
        text: "Tienen ordenadores, y pueden tener otras armas de destrucción masiva",
        author: "Janet Reno"
    },
    {
        text: "Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza",
        author: "Paul Leary"
    },
    {
        text: "Si la industria automovilística hubiera seguido el mismo desarrollo que los ordenadores, un Rolls-Royce costaría hoy 100 dólares, circularía un millón de millas con 3,7 litros y explotaría una vez al año, eliminando a todo el que estuviera dentro en ese momento",
        author: "Robert X. Cringely"
    },
    {
        text: "He notado últimamente que el miedo paranoico hacia ordenadores inteligentes tomando el control del mundo ha desaparecido totalmente. Todo lo que puedo contar es que este hecho coincide con la aparición de MS-DOS",
        author: "Larry DeLuca"
    },
    {
        text: "R2D2, ¿te lo dijo la computadora central de la ciudad? ¡R2D2, sabes bien que no debes confiar en una computadora extraña!",
        author: "C3PO"
    },
    {
        text: "Nunca confíes en un ordenador que no puedas lanzar por una ventana",
        author: "Steve Wozniak"
    },
    {
        text: "Hardware: las partes de un ordenador que pueden ser pateadas",
        author: "Jeff Pesis"
    },
    {
        text: "Hay dos grandes productos que salieron de Berkeley: LSD y UNIX. No creemos que esto sea una coincidencia",
        author: "Jeremy S. Anderson"
    },
    {
        text: "¿Internet? ¿Todavía anda eso por ahí?",
        author: "Homer Simpson"
    },
    {
        text: "La mayoría de las patentes son una mierda. Dedicar tiempo a leerlas es estúpido. Es cosa de los propietarios de las patentes hacerlo y procurar que se respeten",
        author: "Linus Torvalds"
    },
    {
        text: "Controlar la complejidad es la esencia de la programación",
        author: "Brian Kernigan"
    },
    {
        text: "Hay dos maneras de diseñar software: una es hacerlo tan simple que sea obvia su falta de deficiencias, y la otra es hacerlo tan complejo que no haya deficiencias obvias",
        author: "C.A.R. Hoare"
    },
    {
        text: "Los proveedores de software están intentando hacer sus productos más amigables para el usuario. Su mejor aproximación hasta el momento ha sido tomar sus antiguos folletos y estampar las palabras 'amigable para el usuario' en la portada",
        author: "Bill Gates"
    },
    {
        text: "Hay una antigua historia sobre una persona que quería que su ordenador fuese tan fácil de utilizar como su teléfono. Estos deseos se han hecho realidad, ya no sé cómo usar mi teléfono",
        author: "Bjarne Stroustrup"
    },
    {
        text: "Cualquier idiota puede usar un ordenador. De hecho, muchos lo hacen",
        author: "Ted Nelson"
    },
    {
        text: "Esto es lo que ocurre con la gente que piensa que odia los ordenadores. Lo que realmente odia es a los malditos programadores",
        author: "Larry Niven"
    },
    {
        text: "No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo",
        author: "Ley de Mosher de la Ingeniería del Software"
    }];
const colores = ["#573391", "#EF6D6D", "#139487", "#524A4E", "#557C55", "#F1D00A", "#BB6464", "#F76E11", "#064635", "#2D4263"];
const aleatorio = (num) => Math.floor(Math.random() * num);
const colorear = ((texto, author, num) => {
    $(texto).css("color", colores[num]);
    $(author).css("color", colores[num]);    
});
const textosCitas = ((texto, author, num) => {
    $(texto).text(citas[num].text);
    $(author).text(citas[num].author);
});
const entrada = ((text, author,tiempo) => {
    $(text).fadeIn(tiempo);
    $(author).fadeIn(tiempo);
});
const salida = ((text, author,tiempo) => {
    $(text).fadeOut(tiempo);
    $(author).fadeOut(tiempo);


});
$(document).ready(function () {
    let indiceColor=aleatorio(10);
    $("body").css("background-color", colores[indiceColor])
    salida("#text", "#author",0);
    setTimeout(() => {
        textosCitas("#text", "#author", aleatorio(19));
        colorear("#text", "#author", indiceColor);
    }, 100);
        entrada("#text", "#author");

    $("#new-quote").click(function () {
        salida("#text", "#author",400);
        let indiceColor=aleatorio(10);
    $("body").css("background-color", colores[indiceColor])
        setTimeout(() => {
            textosCitas("#text", "#author", aleatorio(19));
            colorear("#text", "#author", indiceColor);
        }, 400);

        entrada("#text", "#author");
    });  
});



