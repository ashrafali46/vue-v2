<template>
  <div class="hello">
    <h3>
      {{counter}}
    </h3>
    <h3>
      {{new_counter}}
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
    <h1>{{emitted_data_text}}</h1>
    <h1>{{emitted_data_text_again}}</h1>
    <div class="mt-3">
      <!-- Props Example is a child component here. -->
      <props-example @emitted_data="newEmittedData" @emitted_data_again="newEmittedDataAgain" :props_data="data_new" :counter="new_counter" :arr_day="arr_day" :arr_day_obj="arr_day_obj" ></props-example>
    </div>
    <!-- <div class="container">
        <div class="row mt-5">
            <div class="col-lg-12 mb-3" v-for="(data, index) in user_data" :key="index">
                <div class="d-flex align-items-center ms-auto me-auto" style="max-width: 300px;">
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
    </div> -->
  </div>
</template>

<script>
import operations from '../mixins/operations.js';
import NewPage from './newpage/NewPage.vue'
import PropsExample from './PropsExample/PropsExample.vue'
export default {
  name: 'HelloWorld',
  mixins: [operations],
  props: {
    msg: String
  },
  components: {
    NewPage,
    PropsExample
  },
  data() {
    return {
      new_counter: 0,
      data_new: "Hello Props Example",
      arr_day: [],
      arr_day_obj: {},
      emitted_data_text: '',
      emitted_data_text_again: ''
    }
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
    // increment() {
    //   this.$store.commit('increase');
    // },
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
    performOperations(operation) {
      switch (operation) {
        case 'add':
          this.new_counter = this.addition(this.new_counter, 10);
          break;
        case 'subtract':
          this.new_counter = this.subtraction(this.new_counter, 10);
          break;
        case 'multiply':
          this.new_counter = this.multiplication(this.new_counter, 10);
          break;
        case 'divide':
          this.new_counter = this.division(this.new_counter, 10);
          break;
        default:
          this.new_counter = 0;
          break;
      }
    },
    newEmittedData(emitted_data) {
      console.log(emitted_data);
      this.emitted_data_text = emitted_data;
    },
    newEmittedDataAgain(data) {
      console.log(data)
      this.emitted_data_text_again = data;
    }
  },
  mounted() {
    console.log(this.user_data);
    this.performOperations('subtract');
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
