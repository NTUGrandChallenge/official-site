$.ajaxSetup({ cache: false });

var speakers = new Vue({
    el: '#speakers',
    data: {
        speakers: []
    },
    created: function(){
        this.fetchData();
    },
    methods: {
        fetchData: function(){
            var self = this;
            $.getJSON('summit-speakers.json', function(data){
                self.speakers = data;
		        self.setModalNum();
            });
        },
        setModalNum: function(){
        	var self = this;
        	$.each(self.speakers, function(i, v){
        		var modalId = "modal_" + (i + 1);
                self.$set(v, 'modalId', modalId);
        	})
        }
    }
});

Vue.component('one-speaker', {
    template: `
        <div class="col-md-3 col-xs-6">
            <div class="one-man" data-toggle="modal" :data-target="'#'+speaker.modalId">
                <div class="img-wrapper">
                    <img :src="speaker.img_path" alt="">
                </div>
                <div class="info-wrapper">
                    <div class="name">{{ speaker.name }}</div>
                    <div class="title">{{ speaker.title }}</div>
                </div>
            </div>
        </div>
    `,
    props: {
        speaker: Object
    }
});

Vue.component('speaker-modal', {
	template: `
		<div :id="speaker.modalId" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="close-button" data-dismiss="modal"><i class="fa fa-times fa-2x" aria-hidden="true"></i></div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4" style="padding: 0;">
                                     <div class="img-wrapper">
                                        <img :src="speaker.img_path" alt="">
                                     </div>
                                </div>
                                <div class="col-md-8" style="padding: 0;">
                                    <div class="content">
                                        <h1 class="name">{{ speaker.name }}</h1>
                                        <p class="title">{{ speaker.title }}</p>
                                        <h2>{{ speaker.activity }} -- {{speaker.issue }}</h2>
                                        <p class="introduction" v-html="speaker.introduction"></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`,
	props: {
		speaker: Object
	}
});
