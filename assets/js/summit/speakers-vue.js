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
                    <div class="title" v-html="speaker.title">  </div>
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
                        <div class="close-button visible-xs" data-dismiss="modal"><i class="fa fa-times fa-2x" aria-hidden="true"></i></div>
                        <article>
                            <section class="left">
                                <figure>
                                    <img :src="speaker.img_path" alt="">
                                </figure>
                            </section>
                            <section class="right">
                                <section class="content">
                                    <h1 class="name">{{ speaker.name }} / {{ speaker.name_en }}</h1>
                                    <h3 class="title" v-html="speaker.title">   </h3>
                                    <hr />
                                    <p class="introduction" v-html="speaker.introduction"></p>
                                    <h3>{{ speaker.activity }} <span><img src="../assets/img/summit/bullhorn.png" alt="" style="height: 24px;" /></span>{{speaker.issue }}</h3>
                                </section>
                                <div class="close-button hidden-xs" data-dismiss="modal"><i class="fa fa-times fa-2x" aria-hidden="true"></i></div>
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
