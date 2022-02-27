<template>
    <div>
        <h1 class="text-dark fw-bold">Props Example</h1>
        {{props_data}}
        {{passed_data}}
        <button class="btn btn-primary" @click="performEmit">Emit Data</button>
        <button class="btn btn-secondary" @click="performEmit1">Emit Data 1</button>
    </div>
</template>
<script>
export default {
    props: ['props_data', 'counter', 'arr_day', 'arr_day_obj'],
    data() {
        return {
            passed_data: '',
            emitted_data: 'Emitted Data',
            emitted_data_again: 'Hello New world'
        }
    },
    methods: {
        performEmit() {
            this.$emit('emitted_data', this.emitted_data);
        },
        performEmit1() {
            this.$emit('emitted_data_again', this.emitted_data_again);
        }
    },
    mounted() {
        console.log(this.props_data);
        console.log(this.counter);
        console.log(this.arr_day);
        console.log(this.arr_day_obj);
        this.passed_data = this.props_data;
    }
}
</script>
<style scoped>

</style>