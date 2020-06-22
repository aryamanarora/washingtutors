$(function() {
    $('.jumbotron img').addClass('d-none d-md-inline')
    $('.jumbotron, .body, .footer').toggle()
    $('.jumbotron, .footer').fadeToggle('slow')
    $('.body').delay(600).slideToggle('slow')
    // var popup = $(`<div class="toast" data-autohide="false">
    //     <div class="toast-header">
    //         <i class="fa fa-book mr-2" style="color: blue;"></i>
    //         <strong class="mr-auto">Test Prep Books Available</strong>
    //         <small>June 3, 2020</small>
    //         <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //         </button>
    //     </div>
    //     <div class="toast-body">
    //         We are offering many new and gently used SAT, ACT, and AP test-prep books for free. Reach out to us at <a href="mailto:washingtutors@gmail.com">washingtutors@gmail.com</a> or call us at (571) 758-2905 if you are interested.
    //     </div>
    // </div>`)
    // $('body').append(popup)
    // $('.toast').toast('show')
})