$.ajaxSetup({ cache: false });
function getParameterByName(name, url){
    if(!url){
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var team = new Vue({
    el: '#single_team',
    data: {
        current_team: {}
    },
    created: function(){
        this.fetchData();
        this.setMembersImgSrc();
    },
    computed: {
        imageBasePath: function(){
            return '../assets/img/20teams/' + this.current_team.team_id + '/';
        }
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('20teams.json', function(data){
                var current_id = getParameterByName('team_id');
                console.log(current_id);
                $.each(data, function(i, v){
                    if(v.team_id == current_id){
                        self.current_team = v;
                        return false;
                    }
                })
            })
        },
        setMembersImgSrc: function(){
            var self = this;
            for(i = 0; i < 5; i++){
                this.current_team.members[i].imgSrc = self.current_team.imageBasePath + (i + 1) + '.jpg';
            }
            
        }
    }
});
// console.log(team)

// Vue.component('team-details', {
//     template: '#single_team_template',
//     props: {
//         team: Object
//     }
// })