<template>
    <div>
        <v-app>
            <v-content>
                <v-flex xs12 sm8 offset-sm2>
                    <div class="block">
                        <h1>Films à l'affiche</h1>
                    </div>
                    <div class="block">
                        <v-btn color="success" v-on:click="add">Add</v-btn>
                    </div>
                    <div class="block">
                        <input id="search" type="text" v-model="search" placeholder="Search">
                    </div>
                    <div class="block">
                        <movie-item v-for="m in filterMovies" v-bind:m="m" :key="m._id"></movie-item>
                    </div>
                </v-flex>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import MovieItem from './movie-item';
    export default {
        components: {MovieItem},
        data() {
            return {
                movies: window.shared_data.movies,
                search: ""
            }
        },
        methods: {
            add() {
                this.$router.push('add')
            }
        },
        computed: {
            filterMovies() {
                return this.search !== ""
                    ? this.movies.filter(m =>
                        m.title.toLowerCase().includes(this.search.toLowerCase())
                        || m.synopsys.toLowerCase().includes(this.search.toLowerCase()))
                    : this.movies;
            }
        }
    }
</script>

<style>
    .block {
        margin: 10px;
    }

    #search {
        width: 100%;
        font-size: 22px;
        padding: 5px 20px;
        background-color: white;
        border-radius: 25px;
    }
</style>