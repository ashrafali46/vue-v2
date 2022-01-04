import axios from "axios";
export default {
    data() {
        return {
            err_msg: "",
            is_error: false,
        }
    },
    methods:{
        async fetchUsersData() {
            return new Promise(async (resolve, reject) => {
                try{
                    let response = await axios.get('https://reqres.in/api/users?page=1');
                    if (response.status === 200) {
                        resolve(response.data)
                    } else {
                        reject(response.reason)
                        this.err_msg = response.data.reason
                    }
                }
                catch(error){
                    this.err_msg = error.response.data
                }
            })
        },
    }
}
