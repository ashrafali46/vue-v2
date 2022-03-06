<template>
    <div>
        <h3 class="color-red">New page</h3>
        <h1>{{$route.query.plan}}</h1>
        <button class="btn btn-primary" @click="replaceRoute">
            Replace Route
        </button>
        <button class="btn btn-success" @click="goBack">
            Go Back
        </button>
        <button class="btn btn-danger" @click="goFroward">
            Go Forward
        </button>
        <div class="container">
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
        },
        replaceRoute() {
            this.$router.push({ path: '/', replace: true })
        },
        goBack() {
            this.$router.go(-1)
        },
        goFroward() {
            this.$router.go(1)
        },
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
        // console.log(this.$route.query.plan)
        console.log(this.$route.hash)
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