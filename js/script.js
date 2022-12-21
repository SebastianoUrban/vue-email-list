


function requestOneMail() {
    let resultStatus = false;
    let result = '';
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (responseAPI) {
            result = responseAPI.data.response;
            resultStatus = responseAPI.data.success;
            console.log(result);
            console.log(resultStatus);
        } 
    );
    return result;
}













const { createApp } = Vue;


createApp({
    data() {
        return {
            emailList : []
        }
    },
    methods: {
        requestNMail (n) {
            while (this.emailList.length < n) {
                this.emailList.push(requestOneMail());
            }
            console.log(this.emailList)
        }
    }
}).mount('#app');

