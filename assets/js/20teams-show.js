$('#single_team').fullpage({
    scrollOverflow: true,
    verticalCentered: false,
    onLeave: function(index, nextIndex, direction){
        // rebuid for long content
        if(index == 3 && direction == 'down'){
            $.fn.fullpage.reBuild();
        }
    },
    afterResize: function(){
        $.fn.fullpage.reBuild();
    },

});