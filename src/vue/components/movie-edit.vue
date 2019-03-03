<template>
    <div>
        <v-form v-model="valid">
            <v-container>
                <v-flex xs12 sm6 offset-sm3>
                    <v-layout>
                        <v-flex xs12><h1>{{m.title}}</h1></v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs3>
                            <picture-input
                                    :prefill="imageInit"
                                    ref="pictureInput"
                                    @change="onChanged"
                                    @remove="onRemoved"
                                    :width="150"
                                    :height="150"
                                    :removable="true"
                                    removeButtonClass="ui red button"
                                    accept="image/jpeg, image/png, image/gif"
                                    buttonClass="ui button primary"
                                    :customStrings="{
                                upload: '<h1>Upload it!</h1>',
                                drag: 'Choose your image'}"
                            ></picture-input>
                        </v-flex>
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
                                    hover></v-rating>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-btn
                                :disabled="!valid"
                                color="success"
                                @click="validate">
                            Validate
                        </v-btn>
                        <v-btn
                                :disabled="!image"
                                color="success"
                                @click="attemptUpload">
                            Upload image
                        </v-btn>
                    </v-layout>
                </v-flex>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import PictureInput from "vue-picture-input";
    import FormDataPost from '../upload';

    const axios = require('axios');

    export default {
        name: "movie-edit",
        components: {PictureInput},
        data() {
            return {
                m: window.shared_data.movies.filter(m => m._id === this.$route.params.id)[0],
                valid: false,
                image: '',
                imageInit: ''
            }
        },
        methods: {
            validate() {
                try {
                    axios.patch('http://localhost:3000/movie', this.m).then(() => this.$router.push('/'))
                } catch (error) {
                    return []
                }
            },
            onChanged() {
                console.log("New picture loaded");
                if (this.$refs.pictureInput.file) {
                    this.image = this.$refs.pictureInput.file;
                } else {
                    console.log("Old browser. No support for Filereader API");
                }
            },
            onRemoved() {
                this.image = '';
            },
            attemptUpload() {
                if (!this.image)
                    return;
                FormDataPost('http://localhost:3000/movie/' + this.m._id + '/image', this.image).then(response => {
                    if (response.data.success) {
                        this.image = '';
                        console.log("Image uploaded successfully ✨");
                    }
                }).catch(err =>
                    console.error(err))
            }
        },
        mounted() {
            this.imageInit = './../static/' + this.m._id + '.jpg'
        }
    }
</script>