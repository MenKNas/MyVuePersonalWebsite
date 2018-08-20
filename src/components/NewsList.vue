<template>
    <div>
        <div class="container text-center m-3">
            <source-selection @source-was-changed = "source = $event" @language-was-changed="language = $event"> </source-selection>
            <hr>
            <div v-if="source">
                <h6> {{source.description}}</h6>
                <a :href="source.url" class="btn btn-green" target="_blank"> Visit <span class="website-name"> {{source.name}} </span>website </a>
         </div> 
         </div> 
        <div class="container">
            <div class="row">
               <ul class="media-list">
                   <li class="media m-4" v-for="article in articles"> 
                       <div class="col-sm-6 col-md-4 col-lg-4">
                           <a :href="article.url" target="_blank"> <img :src="article.urlToImage" alt="Article's image" class="img img-fluid"> </a>
                       </div>
                       <div class="col-sm-6 col-md-4 col-lg-4">
                           <h4 class="media-heading article-heading"> <a :href="article.url" target="_blank"> {{article.title}} </a> </h4>
                           <h5> <i v-if="article.author">by {{article.author}} </i>  <i v-else> unregisted author </i> </h5>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4">
                            <p class="para"> {{article.description}} </p>
                        </div>
                   </li>
                </ul>
            </div>
            </div>
        </div>
</template>

<script>
    import SourceSelection from './SourceSelection.vue';
    
    export default {
        data(){
            return {
                source:'',
                articles:[],
                language:''
            }
        },
        components: {
            sourceSelection:SourceSelection
        },
        // watch:{
        //     source: function(val){
                
        //     }
        // },
        created(){
            this.$http.get('https://newsapi.org/v2/top-headlines?sources=' + this.source.id + '&apiKey=e931e3498c99430fb8e03c76d973291a')
                .then(res => {
                    this.articles = res.data.articles ;
                });
                console.log(this.source.id);
                console.log(this.articles);
        },
        updated(){
            this.$http.get('https://newsapi.org/v2/top-headlines?sources=' + this.source.id + '&apiKey=e931e3498c99430fb8e03c76d973291a')
                .then(res => {
                    this.articles = res.data.articles ;
                });
                console.log(this.source.id);
                console.log(this.articles);
                if (this.language){
                    this.$http.get('https://newsapi.org/v2/top-headlines?' + this.language + '&apiKey=e931e3498c99430fb8e03c76d973291a')
                    .then(res => {
                        this.articles = res.data.articles ;
                    }) 
                    .catch(err => {
                        console.log(err)
                    })
                }
        }
    }
</script>

<style scoped>
.website-name{
    font-family: Lato;
    font-weight:400;
    font-style: italic;
}

.article-heading{
    font-family: Raleway;
    text-decoration:none;
}

.media-heading {
    text-decoration: none;
}

h4 a{
    text-decoration: none;
    color:#16a085;
    font-size:85%;
}

.para{
    font-size:90%;
}

.btn {
    border-radius: 0;
}
.btn-green {
    color: #fff;
    background-color: #1abc9c;
    border-color: #1abc9c;
    font-weight: 300;
}
.btn-green:hover, .btn-green:focus, .btn-green:active, .btn-green.active, .open .dropdown-toggle.btn-green {
    color: #fff;
    background-color: #16a085;
    border-color: #16a085;
    font-weight: 300;
}

</style>