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

// for index
var teams = new Vue({
    el: '#index',
    data:{
        all_teams: []
    },
    created: function(){
        this.fetchData();
    },
    computed: {
        smartLife: function(){
            return this.all_teams.filter(function(team){
                return team.field == 'sl'
            });
        },
        healthCare: function(){
            return this.all_teams.filter(function(team){
                return team.field == 'hc'
            });
        },
        environment: function(){
            return this.all_teams.filter(function(team){
                return team.field == 'et'
            });
        },
        societyCulture: function(){
            return this.all_teams.filter(function(team){
                return team.field == 'sy'
            });
        },
        foodAgriculture: function(){
            return this.all_teams.filter(function(team){
                return team.field == 'fa'
            });
        }
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('20teams.json', function(data){
                self.all_teams = data;

                self.setOtherData();
            });

        },
        setOtherData: function(){
            var self = this;
            var imgBasePath = '../assets/img/20teams/';
            var linkBase = 'show20.html?team_id=';

            $.each(self.all_teams, function(i, v){
                var coverImgSrc = imgBasePath + v.team_id + '/cover.jpg';
                var link = linkBase + v.team_id;
                self.$set(v, 'coverImgSrc', coverImgSrc);
                self.$set(v, 'link', link);
            });
        },
        shuffle: function(array){
            // Fisher-Yates (aka Knuth) Shuffle
            var currentIndex = array.length;
            var tmpValue, randomIndex;

            while(currentIndex !== 0){
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                tmpValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = tmpValue;
            }
            return array;
        }
    }
})

// for single_team
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
                self.setImgSrc();
            })
        },
        setImgSrc: function(){
            var self = this;
            var imgBasePath = '../assets/img/20teams/' + self.current_team.team_id + '/';
            self.$set(self.current_team, 'imgBasePath', imgBasePath);

            $.each(self.current_team.members, function(i, v){
                var imgSrc = imgBasePath + 'members/' + (i + 1) + '.jpg';
                self.$set(v, 'imgSrc', imgSrc);
            });

            self.$set(self.current_team, 'coverImgSrc', imgBasePath + 'cover.jpg');
            self.$set(self.current_team, 'logoImgSrc', imgBasePath + 'logo.png');
            self.$set(self.current_team, 'recordImgSrc', imgBasePath + 'record.jpg');
            self.$set(self.current_team, 'productImgSrc', imgBasePath + 'product.jpg');
            self.$set(self.current_team, 'fieldImgSrc', '../assets/img/20teams/' + self.current_team.field + '.png');
        }
    }
});