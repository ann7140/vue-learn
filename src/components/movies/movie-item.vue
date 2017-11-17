<template>
    <li class="movie-item">
        <a :href="movie.alt">
            <img class="pic" :src="movie.images.small" />
        </a>
        <a :href="movie.alt">{{movie.title}}</a>
        <div class="bottom">
            <span class="score">{{movie.rating.average}}</span>
        </div>
    </li>
</template>
<script>
export default {
    props: ['movie'],
    data () {
        return {
            
        }
    }
}
</script>
<style lang="scss">
@import "./../../assets/reset.scss";
@import "./../../assets/main.scss";
.movie-item{
    width: rem(300);
    float: left;
    font-size: rem(36);
    margin-right: rem(20);
    a{
        color: #333;
    }
    a, 
    img.pic{
        display: block;
        width: 100%;
    }
    img{
        margin: rem(20) 0;
    }
    .score{
        display: block;
        margin: rem(10) 0;
        color: #666;
    }
}
</style>
