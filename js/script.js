axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (responseAPI) {
        const result = responseAPI.data.response;
        console.log(result);
    } );

const { createApp } = Vue;


createApp({
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}).mount('#app');

