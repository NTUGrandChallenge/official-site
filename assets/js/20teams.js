$.ajaxSetup({ cache: false });
var pathname = window.location.pathname.split('/');
console.log(pathname)
var team = new Vue({
    el: '#one-team',
    data: {
        "current_team": {}
    },
    created: function(){
        this.fetchData();
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('../20teams.json', function(data){
                var str = pathname[pathname.length - 1];
                var current_id = str.slice(0, -5);
                $.each(data, function(i, v){
                    console.log(v.team_id)
                    if(v.team_id == current_id){
                        self.current_team = v;
                        return false;
                    }
                })
            })
        }
    }
})