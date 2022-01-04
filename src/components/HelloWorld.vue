<template>
  <div class="hello">
    <h3>
      {{counter}}
    </h3>
    <!-- <button @click="increment">
      Increment
    </button> -->
    <button @click="incrementWithPayload">
      Increment 10
    </button>
    <button @click="decrementWithPayload">
      Decrement 10
    </button>
    <div class="container">
            <div class="row">
                <div class="col-lg-12 mb-3" v-for="(data, index) in user_data" :key="index">
                    <div class="d-flex align-items-center">
                        <div class="image">
                            <img :src="data.avatar" alt="images" width="50" height="50" style="border-radius: 50%;" />
                        </div>
                        <div class="ms-2">
                            <h1 class="heading-name">
                                {{data.first_name}} {{data.last_name}}
                            </h1>
                            <h1 class="heading-email mb-0">
                                {{data.email}}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import NewPage from './newpage/NewPage.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    NewPage
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter
    },
    user_data() {
        return this.$store.getters.getUsersData;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increase');
    },
    incrementWithPayload() {
      this.$store.commit('increase', {
        value: 10
      });
    },
    decrement() {
      this.$store.commit('decrement');
    },
    decrementWithPayload() {
      this.$store.commit('decrement', {
        value: 10
      });
    },
  },
  mounted() {
    console.log(this.user_data)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.heading-name {
  font-size: 14px;
  margin-bottom: 5px;
  text-align: left;
}
.heading-email {
  font-size: 14px;
  text-align: left;
}
</style>
