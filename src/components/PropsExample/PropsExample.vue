<template>
    <div>
        <h1 class="text-dark fw-bold">Props Example</h1>
        {{props_data}}
        {{passed_data}}
    </div>
</template>
<script>
export default {
    props: ['props_data', 'counter', 'arr_day', 'arr_day_obj'],
    data() {
        return {
            passed_data: ''
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