//IFEE
const asignarVideo = (() => {
// funcion privada
    let asignar = (url, idIframe) => {
        document.getElementById(idIframe).setAttribute("src", url);
    }

// retornando funcion publica
    return {
        mostrarVideo: (url, idIframe) => asignar(url, idIframe)
    }
})();

class Multimedia {
    constructor (url){
// protegiendo el atributo url usando "_"
    let _url = url;
        this.getUrl = () => _url;
    }

    get obtenerUrl(){
        return this.getUrl();
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor (id, url) {
        super(url);
        let _id = id;
        this.getId = () => _id;
    }

    get obtenerId(){
        return this.getId();
    }

playMultimedia() {
// IIFE asignar video
    asignarVideo.mostrarVideo(this.obtenerUrl, this.obtenerId);
    }
    setInicio(tiempo) {
        document.getElementById(this.obtenerId).setAttribute("src", this.obtenerUrl + `?start=${tiempo}`);
    }
}

// ejecutando codigo
// Instanciando las clases hijas de cada iframe.
// 4. Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta iframe, 
//por lo que se deben crear tres instancias, una para música, otra para película y otra para serie, con sus respectivas URL.
    const musica = new Reproductor("musica", "https://www.youtube.com/embed/9bZkp7q19f0");
    const peliculas = new Reproductor("peliculas", "https://www.youtube.com/embed/1JLUn2DFW4w");
    const series = new Reproductor("series", "https://www.youtube.com/embed/5hAXVqrljbs");

// 5. Invocar al método “playMultimedia” para cada instancias creadas, mostrando así los videos en el documento HTML.
    musica.playMultimedia();
    peliculas.playMultimedia();
    series.playMultimedia();

// 6. Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las instancias creadas.
    musica.setInicio("10");
    peliculas.setInicio("15");
    series.setInicio("20");