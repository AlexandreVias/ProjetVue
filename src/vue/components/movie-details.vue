<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-img
                    height="25%"
                    :src="image">
            </v-img>
            <v-card>
                <v-card-title primary-title>
                    <h1>{{m.title}}</h1>
                </v-card-title>
                <v-card-text>
                    <v-card-title><h2>Synopsys</h2></v-card-title>
                    {{ m.synopsys }}
                </v-card-text>
                <v-card-text>
                    <v-card-title><h2>Year</h2></v-card-title>
                    {{ m.year }}
                </v-card-text>
                <v-card-text>
                    <v-card-title><h2>Language</h2></v-card-title>
                    {{ m.language }}
                </v-card-text>
                <v-card-text>
                    <v-card-title><h2>Genre</h2></v-card-title>
                    {{ m.genre}}
                </v-card-text>
                <v-card-text>
                    <v-card-title><h2>Creator name</h2></v-card-title>
                    {{ m.creator.name}}
                </v-card-text>
                <v-card-text>
                    <v-card-title><h2>Creator nationality</h2></v-card-title>
                    {{ m.creator.nationality}}
                </v-card-text>
                <v-card-text>
                    <v-card-title><h2>Creator date of birth</h2></v-card-title>
                    {{ m.creator.dateBirth}}
                </v-card-text>
                <v-card-actions>
                    <v-btn class="warning" v-on:click="edit">Edit</v-btn>
                    <v-btn color="error" v-on:click="remove">Remove</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "movie-details",
        data() {
            return {
                m: window.shared_data.movies.filter(m => m._id === this.$route.params.id)[0],
                image: ''
            }
        },
        methods: {
            edit() {
                this.$router.push(this.$route.path + '/edit');
            },
            remove() {
                try {
                    axios.delete('http://localhost:3000/movie/' + this.m._id).then(() => this.$router.push('/'))
                } catch (error) {
                    return []
                }
            }
        },
        mounted() {
            this.image = './../static/' + this.m._id + '.jpg'
        }
    }
</script>

<style scoped>
    .v-card__text {
        font-size: 18px;
    }
</style>