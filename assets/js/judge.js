$.ajaxSetup({ cache: false });
var judges = new Vue({
    el: '.judges',
    data: {
        judges: []
    },
    created: function(){
        this.fetchData();
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('assets/js/judges.json', function(data){
                self.judges = data;
                console.log(data)
                console.log("hello")
            })
        }
    }
});

Vue.component('one-judge', {
    template: '#judge-template',
    props: {
        judge: Object
    }
})