// App vue
const app = new Vue({
    el: "#app",

    data: {
        // Array albums
        arrayAlbums: [],

        // Option select
        optionSelect: "",
    },

    created() {
        // Richiamo funzione getServerAlbums
        this.getServerAlbums();
    },

    methods: {
        // Chiamata server.php albums
        getServerAlbums: function () {
            axios.get("../milestone_2/php/server.php")
            .then((res) => {
                console.log(res.data);
                this.arrayAlbums = res.data;
            });
        },

        // Chimata server php album filter quando cambia optionSelect
        getOptionSelect: function() {
            // console.log(this.optionSelect);

            if (this.optionSelect == "Default") {

                // Richiamo funzione chiamata server.php
                this.getServerAlbums();

            } else {

                // Chiamata filtrata con parametro genere
                axios.get("../milestone_2/php/server.php", {
                    params: {
                        genere: this.optionSelect
                    }
                })
                .then((res) => {
                    // console.log(res.data);

                    // Svuoto completamente l'array
                    this.arrayAlbums.splice(0, this.arrayAlbums.length);

                    // Salvo la risposta nel mio arrayAlbums
                    this.arrayAlbums = res.data;
                });
            }
        }
    },

});
