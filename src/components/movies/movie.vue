<template>
    <div class="movie-page">
        <ul class="clearfix">
            <!-- <li is="MoviesItem" v-for="(item,index) in movie_list" :key="index" :movie="item"></li> -->
            <!-- <component :is="keet" keep-alive  class="animated" transition="bounce" transition-mode="out-in" v-for="(item,index) in movie_list" :key="index" :movie="item"></component> -->
            <movies-item v-for="(item,index) in movie_list" :key="index" :movie="item"></movies-item>
            
        </ul>
        <!-- <div>-----------</div>
        <ul class="clearfix">
            <movies-item v-for="(item,index) in top250_list" :key="index" :movie="item"></movies-item>
        </ul> -->
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import MoviesItem from "./movie-item";
export default {
    data () {
        return {
            movie_list: []
        }
    },
    components: {
        MoviesItem
    },
    computed: {
        // ...mapState([
        //     'a'
        // ]),
        ...mapState({
            // movie_list: state =>  {
            //     return state.in_theaters.subjects
            // },
            // top250_list: state =>  {
            //     return state.top250.subjects
            // }
        })
    },
    methods: {
        // ...mapActions([
        //     'GET_IN_THEATERS'
        // ]),
    },
    created () {
        // this.$store.dispatch('GET_IN_THEATERS')
        // this.$store.dispatch('GET_TOP250')
    },
    mounted () {
        this.$axios.get('/v2/movie/in_theaters').then(res => {
            this.movie_list = res.data.subjects
            console.log(res.data.subjects)
        }, res => {
            console.infor('error')
        })
        // this.$axios.get('/shop/userAccount/accountById.json').then(res => {
        //     console.log(res)
        // }, res => {
        //     console.infor('error')
        // })
    }
}
</script>
<style lang="scss">
@import "./../../assets/reset.scss";
@import "./../../assets/main.scss";
.movie-page{
    padding: 0 rem(40);
}
</style>
