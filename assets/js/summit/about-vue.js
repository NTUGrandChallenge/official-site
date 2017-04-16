$.ajaxSetup({ cache: false });
var partners = new Vue({
    el: '#partners',
    data: {
        partners: []
    },
    created: function(){
        this.fetchData();
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('partners.json', function(data){
                self.partners = data;
            })
        }
    },
    computed: {
    	strategic: function(){
    		return this.partners.filter(function (p) {
		    	return p.type == 1;
		    })
    	},
    	resource: function(){
    		return this.partners.filter(function (p) {
		    	return p.type == 2;
		    })
    	},
    	media: function(){
    		return this.partners.filter(function (p) {
		    	return p.type == 3;
		    })
    	},
    	social: function(){
    		return this.partners.filter(function (p) {
		    	return p.type == 4;
		    })
    	},
    }
});

Vue.component('one-partner', {
	template:`
		<div class="col-sm-4 col-xs-6">
			<a :href="partner.url">
	            <div class="logo-block">
	                <img :src="partner.imgSrc" alt="">
	            </div>
            </a>
        </div>
	`,
	props: {
		partner: Object
	}
})