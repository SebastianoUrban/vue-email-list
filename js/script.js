










const { createApp } = Vue;


createApp({
    data() {
        return {
            emailList : []
        }
    },
    methods: {
        requestNMail (n) {
            for (let i=0; i<n; i++) {
                this.requestOneMail();
            }
        },
        requestOneMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (responseAPI) => {
                    const result = responseAPI.data.response;
                    this.emailList.push(result);
                } 
            );
        }
    }
}).mount('#app');

