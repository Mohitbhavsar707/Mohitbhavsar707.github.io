console.log('It works');

$(document).ready(function() {
  $('.submit').click(function (event) {
    console.log('Clicked button')

    var email = $('.email').val()
    var subject= $('.subject').val()
    var email = $('.message').val()
    var statusElm = $('.status').val()
    statusElm.empty()

    if (email.length > 5 && email.includes('@') && email.includes('.')){
      statusElm.append('<div>Email is valud</div>')
    }else{
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if (subject.length >= 2 ){
      statusElm.append('<div>Subject is valud</div>')
    }else{
      event.preventDefault()
      statusElm.append('<div>Subject is not valid</div>')
    }

    if (message.length >= 10){
      statusElm.append('<div>Message is valud</div>')
    }else{
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }

  })
})
