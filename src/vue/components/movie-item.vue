<template>
    <v-card class="block">
        <v-img
                height="300px"
                :src="image">
        </v-img>
        <v-card-title primary-title>
            <h3>{{ m.title }}</h3>
        </v-card-title>
        <v-card-text>{{m.synopsys}}</v-card-text>
        <v-rating
                v-model="m.note"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$vuetify.icons.ratingFull"
                hover></v-rating>
        <v-btn class="info" v-on:click="seeMovie(m._id)">See</v-btn>
    </v-card>
</template>

<script>
    const axios = require('axios');
    export default {
        props: ["m"],
        data() {
            return {
                image: './../static/' + this.m._id + '.jpg'
            }
        },
        methods: {
            seeMovie(id) {
                this.$router.push('movie/' + id);
            }
        }
    }
</script>