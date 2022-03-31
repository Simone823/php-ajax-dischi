// App vue
const app = new Vue({
    el: "#app",

    data: {
        // Array albums
        arrayAlbums: [],
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
                // console.log(res.data);
                this.arrayAlbums = res.data;
            });
        },
    },

});
