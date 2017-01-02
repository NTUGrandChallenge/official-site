$.ajaxSetup({ cache: false });
var judges = new Vue({
    el: '#judges',
    data: {
        judges: []
    },
    created: function(){
        this.fetchData();
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('judges.json', function(data){
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