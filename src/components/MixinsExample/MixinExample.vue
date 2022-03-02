<template>
  <div class="container-background">
    <div class="container mt-5">
      <div class="output-text-container">
        <h1 class="output-text m-0">
          {{counter_value}}
        </h1>
      </div>
      <div class="row mt-5">
        <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <!-- @ is a shortcut v-on: -->
          <button class="btn-grad-green" @click="performOperations('add')" type="button">
            Add 10
          </button>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <button class="btn-grad-purple" @click="performOperations('subtract')" type="button">
            Subtract 10
          </button>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <button class="btn-grad-red" @click="performOperations('multiply')" type="button">
            Multiply By 10
          </button>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <button class="btn-grad-blue" @click="performOperations('divide')" type="button">
            Divide By 10
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <button class="btn-grad-blue" @click="performEventBus" type="button">
          Event Bus
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import operations from '../../mixins/operations.js';
import demo_api from '../../mixins/demo_api.js';
import {EventBus} from '../../event-bus.js';
export default {
  mixins: [operations, demo_api],
  data() {
    return {
      counter_value: 0
    }
  },
  methods: {
    performOperations(operation) {
      switch (operation) {
        case 'add':
          this.counter_value = this.addition(this.counter_value, 10);
          break;
        case 'subtract':
          this.counter_value = this.subtraction(this.counter_value, 10);
          break;
        case 'multiply':
          this.counter_value = this.multiplication(this.counter_value, 10);
          break;
        case 'divide':
          this.counter_value = this.division(this.counter_value, 10);
          break;
        default:
          this.counter_value = 0;
          break;
      }
    },
    performEventBus() {
      // EventBus.$emit('event_bus_emitted') // Without payload or data
      this.$router.push('/');
      setTimeout(() => {
        EventBus.$emit('event_bus_emitted', { // with payload or data
          name: 'test',
          age: 24
        })
      }, 1000);
    }
  },
  // computed: {
  //   counter() {
  //     return this.$store.getters.getCounter
  //   },
  // },
  // watch: {
  //   counter(new_value) {
  //     console.log(new_value);
  //     this.counter_value = new_value;
  //   }
  // }
}
</script>

<style scoped>
  .container-background {
    
  }
  .output-text-container {
    padding: 30px;
    background-image: linear-gradient(to right, rgb(229, 45, 39) 0%, rgb(179, 18, 23) 51%, rgb(229, 45, 39) 100%);
  }
  .output-text {
    font-size: 100px;
    color: #fff;
    font-weight: bold;
  }
</style>>
