$('button').on('click', function () {
    console.log($(this).val());
    let value = $(this).val();
    // if($(`.${value}`).css('display').toLowerCase()==='none'){
    //     $(`.${value}`).css('display:block');
    //     console.log('poo')
    // } else{
    //     $(this).css('display:none');
    //     console.log('shoe');
    // }
    switch (value) {
        case 'unit-4':
            if ($('#unit-4').css('display') === 'none') {
                $('#unit-4').css('display', 'block')
            } else {
                $('#unit-4').css('display', 'none')
            }
            break;
        case 'trivia':
            if ($('#trivia').css('display') === 'none') {
                $('#trivia').css('display', 'block')
            } else {
                $('#trivia').css('display', 'none')
            }
            break;
        case 'train':
            if ($('#train').css('display') === 'none') {
                $('#train').css('display', 'block')
            } else {
                $('#train').css('display', 'none')
            }
            break;
        case 'giphy':
            if ($('#giphy').css('display') === 'none') {
                $('#giphy').css('display', 'block')
            } else {
                $('#giphy').css('display', 'none')
            }
            break;
        case 'bamazon':
            if ($('#bamazon').css('display') === 'none') {
                $('#bamazon').css('display', 'block')
            } else {
                $('#bamazon').css('display', 'none')
            }
            break;
        case 'Friend-Finder':
            if ($('#Friend-Finder').css('display') === 'none') {
                $('#Friend-Finder').css('display', 'block')
            } else {
                $('#Friend-Finder').css('display', 'none')
            }
            break;
        case 'project2':
            if ($('#project2').css('display') === 'none') {
                $('#project2').css('display', 'block')
            } else {
                $('#project2').css('display', 'none')
            }
            break;
        default:
            break;
    }
})