<template>
    <div>
        <h1>Advanced router concepts</h1>
        <h2>{{$route.params.username}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods() {

        /** Navigate to a different location **/

        // literal string path
        this.$router.push('/users/eduardo')

        // object with path
        this.$router.push({ path: '/users/eduardo' })

        // named route with params to let the router build the url
        this.$router.push({ name: 'user', params: { username: 'eduardo' } })

        // with query, resulting in /register?plan=private
        this.$router.push({ path: '/register', query: { plan: 'private' } })

        // with hash, resulting in /about#team
        this.$router.push({ path: '/about', hash: '#team' })

        /** Replace current location **/

        this.$router.push({ path: '/home', replace: true })
        // equivalent to
        this.$router.replace({ path: '/home' })

        /** Traverse history **/

        // go forward by one record, the same as router.forward()
        this.$router.go(1)

        // go back by one record, the same as router.back()
        this.$router.go(-1)

        // go forward by 3 records
        this.$router.go(3)

        // fails silently if there aren't that many records
        this.$router.go(-100)
        this.$router.go(100)

    },
    mounted() {
        console.log(this.$route.params.username)
    }

}
</script>

<style>

</style>