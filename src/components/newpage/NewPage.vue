<template>
    <div>
        <h3 class="color-red">New page</h3>
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
import demo_api from '../../mixins/demo_api'
export default {
    mixins:[demo_api],
    data() {
        return {
            // user_data: []
        }
    },
    methods: {
        async getUsersData() {
            try {
                let response = await this.fetchUsersData();
                console.log(response);
                let user_data = response.data;
                console.log(user_data);
                this.$store.commit('usersData', user_data);
            }
            catch(error) {
                console.log(error);
                this.$store.commit('errorMessage', error);
            }
        }
    },
    computed: {
        user_data() {
            return this.$store.getters.getUsersData;
        }
    },
    mounted() {
        this.getUsersData();
        setTimeout(() => {
            console.log(this.user_data)
        }, 1000);
    }
}
</script>

<style scoped>
    .color-red {
        color: red;
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