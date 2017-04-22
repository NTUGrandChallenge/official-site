if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // fullpage only active on desktop
    $('#single_team').fullpage({
        anchors: ['header', 'issue', 'product', 'qa', 'team'],
        scrollOverflow: true,
        verticalCentered: false,
        onLeave: function(index, nextIndex, direction){
            // rebuid for long content
            if(index == 3 && direction == 'down'){
                $.fn.fullpage.reBuild();
            }
        },
        // afterResize: function(){
        //     $.fn.fullpage.reBuild();
        // },
    });
    
    // $('.panel a').click(function(){
    //     $.fn.fullpage.reBuild();
    // });
}
