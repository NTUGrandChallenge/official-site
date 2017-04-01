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
    template: `
        <div class="col-md-12">
            <div class="one-teacher flexbox-center">
            <div>
                <div class="col-sm-3 col-xs-6">
                    <img class="circular-img" :src="judge.imageUrl" />
                </div>
                <div class="col-sm-9 col-xs-12">
                    <div class="col-sm-12">
                        <h3 class="teacher-name">{{ judge.name }} |<span><br class="visible-xs" />{{ judge.title }}</span></h3>
                    </div>
                    <div class="col-sm-6">
                        <div class="content">
                            <h4>專長項目</h4>
                            <p v-for="expertise in judge.expertises">{{ expertise }}</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="content">
                            <h4>經歷</h4>
                            <p v-for="experience in judge.experiences">{{ experience }}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    `,
    props: {
        judge: Object
    }
})