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
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('20teams.json', function(data){
                var current_id = getParameterByName('team_id');
                $.each(data, function(i, v){
                    if(v.team_id == current_id){
                        self.current_team = v;
                        return false;
                    }
                })
                self.setMembersImgSrc();
            })
        },
        setMembersImgSrc: function(){
            var self = this;
            var imgBasePath = '../assets/img/20teams/' + this.current_team.team_id + '/';
            self.$set(self.current_team, 'imgBasePath', imgBasePath);
            $.each(self.current_team.members, function(i, v){
                var imgSrc = self.current_team.imgBasePath + 'members/' + (i + 1) + '.jpg';
                console.log(imgSrc);
                self.$set(v, 'imgSrc', imgSrc);
            })
            
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