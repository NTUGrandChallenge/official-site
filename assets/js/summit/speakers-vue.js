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
                        <article>
                            <section class="left">
                                <figure>
                                    <img :src="speaker.img_path" alt="">
                                </figure>
                            </section>
                            <section class="right">
                                <section class="content">
                                    <h1 class="name">{{ speaker.name }}</h1>
                                    <h3 class="title">{{ speaker.title }}</h3>
                                    <hr />
                                    <p class="introduction" v-html="speaker.introduction"></p>
                                    <h3>演講主題：<br />{{speaker.issue }} @ {{ speaker.activity }}</h3>
                                </section>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </div>
	`,
	props: {
		speaker: Object
	}
});
