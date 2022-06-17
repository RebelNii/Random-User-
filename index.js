1
var app = Vue.createApp({
    data(){
        return {
            firstName: 'Jeffrey',
            lastName: 'Anyetei',
            Gender: 'male',
            Email: 'Kwadejeffrey@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men//10.jpg'
        }
    },
    props: {},
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.Gender = results[0].gender,
            this.Email = results[0].email,
            this.picture = results[0].picture.large
        }
    }
})




app.mount('#app')