$(function() {
    var popup = $(`<div class="toast" data-autohide="false" style="background-color: #28ADAD;">
        <div class="toast-header">
            <i class="fa fa-book mr-2"></i>
            <strong class="mr-auto">Happy 1 Year!</strong>
            <small>April 29, 2021</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body text-white">
            Happy 1 whole year of Washingtutors! We've come out with our first newsletter: <a href="emails/april.html" class="text-white-50">click here</a> to see it!
        </div>
    </div>`)
    $('body').append(popup)
    $('.toast').toast('show')
})