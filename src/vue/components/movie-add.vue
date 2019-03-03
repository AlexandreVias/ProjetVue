<template>
    <div>
        <v-form v-model="valid">
            <v-container>
                <v-layout>
                    <v-flex xs12><h1>{{m.title}}</h1></v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-text-field
                                v-model="m.title"
                                :rules="[ v => !!v || 'Title is required']"
                                label="Title"
                                required>
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-text-field
                                v-model="m.year"
                                type="number"
                                label="Title">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-text-field
                                v-model="m.language"
                                :rules="[ v => !!v || 'Language is required']"
                                label="Language"
                                required>
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-text-field
                                v-model="m.synopsys"
                                label="Synopsys">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs4>
                        <v-text-field
                                v-model="m.creator.name"
                                :rules="[ v => !!v || 'Creator name is required']"
                                label="Creator"
                                required>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs4>
                        <v-text-field
                                v-model="m.creator.nationality"
                                label="Creator nationality">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs4>
                        <v-text-field
                                v-model="m.creator.dateBirth"
                                type="date"
                                label="Creator date of birth">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-text-field
                                v-model="m.genre"
                                label="Genre">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex x4>
                        <v-rating
                                v-model="m.note"
                                color="yellow darken-3"
                                background-color="grey darken-1"
                                empty-icon="$vuetify.icons.ratingFull"
                                hover>
                        </v-rating>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-btn
                            :disabled="!valid"
                            color="success"
                            @click="validate">
                        Validate
                    </v-btn>
                </v-layout>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "movie-add",
        data() {
            return {
                valid: false,
                m: {
                    title: "",
                    year: new Date().getFullYear(),
                    language: "",
                    synopsys: "",
                    creator: {
                        name: "",
                        nationality: "",
                        dateBirth: ""
                    },
                    genre: "",
                    note: 0
                }
            }
        },
        methods: {
            validate() {
                try {
                    axios.post('http://localhost:3000/movie', this.m).then(() => this.$router.push('/'))
                } catch (error) {
                    return []
                }
            }
        }
    }
</script>