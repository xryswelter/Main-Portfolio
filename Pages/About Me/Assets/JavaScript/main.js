$(document).ready(function(){
    $('#youtube').on('click',function(e){
        e.preventDefault();
        let url= $(this).val();
        console.log(url);

        // window.location.href=`${url}`;
    })
    console.log($('.youtube').val());
})