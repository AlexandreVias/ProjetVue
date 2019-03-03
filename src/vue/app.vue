<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "app",
        mixins: {
            methods: {
                getMovies() {
                    try {
                        axios.get('http://localhost:3000/listMovies').then(value => {
                            window.shared_data = {
                                movies: value.data
                            }
                        })
                    } catch (error) {
                        return []
                    }
                }
            }
        }
    }
</script>

<style>
    body {
        background-color: #f5f5f5;
    }
</style>