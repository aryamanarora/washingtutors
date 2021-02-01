$(function() {
    var popup = $(`<div class="toast" data-autohide="false">
        <div class="toast-header">
            <i class="fa fa-book mr-2" style="color: #28ADAD;"></i>
            <strong class="mr-auto">Secretary Needed!</strong>
            <small>January 31, 2020</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            We are looking for a secretary to help manage our growing numbers of students and tutors. If you are interested, please <a href="./volunteer-with-us.html">volunteer</a> and mention your interest. We will be providing community service hours in compensation.
        </div>
    </div>`)
    $('body').append(popup)
    $('.toast').toast('show')
})