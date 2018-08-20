<template>
    <div class="container">
        <h4> Select your news source: </h4>
        <select id="mainSelect" class="form-control" @change="sourceChanged">
            <option :value="source.id" v-for="source in sources"> {{source.name}} </option>
        </select>
        <h5 class="p-3" v-if="currentlyReading"> <img src="../assets/img/icons/open-book.png" alt=""> You are currently reading from: <span id="curRead">  {{currentlyReading}}  </span> </h5>
        <!-- <button @click="languageChanged"> Get the Latest News in Greek ? </button> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      source: "",
      sources: [],
      currentlyReading: "",
      language: ""
    };
  },
  methods: {
    sourceChanged(e) {
      for (let i = 0; i < this.sources.length; i++) {
        if (this.sources[i].id === e.target.value) {
          this.source = this.sources[i];
        }
      }
      this.currentlyReading = this.source.name;
      this.$emit("source-was-changed", this.source);
    },
    languageChanged() {
      this.language = "country=gr";
      this.$emit("language-was-changed", this.language);
    }
  },
  created() {
    this.$http
      .get(
        "https://newsapi.org/v2/sources?everything&apiKey=e931e3498c99430fb8e03c76d973291a"
      )
      .then(res => {
        this.sources = res.data.sources;
      })
      .catch(err => {
        console.log(err);
      });
  },
  updated() {
    this.$http
      .get(
        "https://newsapi.org/v2/sources?everything&apiKey=e931e3498c99430fb8e03c76d973291a"
      )
      .then(res => {
        this.sources = res.data.sources;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
h4 {
  font-family: Raleway;
}

h5 {
  font-family: Lato;
}

select {
  font-family: Lato;
}

#curRead {
  color: #16a074;
}

#mainSelect {
  border-radius: 0;
  outline: none;
}

#mainSelect:focus {
  outline-color: #16a074;
}
</style>
