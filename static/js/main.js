$(function() {
    $('.jumbotron img').addClass('d-none d-md-inline')
    $('.jumbotron, .body, .footer').toggle()
    $('.jumbotron, .footer').fadeToggle('slow')
    $('.body').delay(600).slideToggle('slow')
})