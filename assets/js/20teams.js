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
    // computed: {
    //     coverImgSrc: function(){
    //         return this.current_team.imgBasePath + 'cover.jpg';
    //     },
    //     logoImgSrc: function(){
    //         return this.current_team.imgBasePath + 'logo.png';
    //     },
    //     fieldImgSrc: function(){
    //         return '../assets/img/20teams/' + this.current_team.field + '.png';
    //     },
    //     recordImgSrc: function(){
    //         return this.current_team.imgBasePath + 'record.jpg';
    //     },
    //     productImgSrc: function(){
    //         return this.current_team.imgBasePath + 'product.jpg';
    //     }
    // },
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
            var imgBasePath = '../assets/img/20teams/' + this.current_team.team_id + '/';
            self.$set(self.current_team, 'imgBasePath', imgBasePath);

            $.each(self.current_team.members, function(i, v){
                var imgSrc = self.current_team.imgBasePath + 'members/' + (i + 1) + '.jpg';
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


$('#single_team').fullpage({
    scrollOverflow: true,
    verticalCentered: false
});

$('.fp-tableCell').css("position", "relative");
