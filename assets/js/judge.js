$.ajaxSetup({ cache: false });
var judges = new Vue({
    el: '.judges',
    data: {
        judges: []
    },
    computed: {
        smartLife: function(){
            console.log(this.judges.filter(function(e){ return e.field == 'sl'}))
            return this.judges.filter(function(e){ return e.field == 'sl'})
        }
    },
    created: function(){
        console.log("create")
        this.fetchData();
    },
    methods: {
        fetchData: function(){
        console.log("fetch")
            var self = this;
            $.get('assets/js/judges.json', function(data){
                self.judges = data;
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