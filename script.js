//Toggle between image and Text
$(document).ready(function() {
    $(".design").click(function() {
      $("#designtext").toggle();
      $("#design_img").toggle();
    });
  });

  $(document).ready(function() {
    $(".development").click(function() {
      $("#developmenttext").toggle();
      $("#development_img").toggle();
    });
  });
  $(document).ready(function() {
    $(".product").click(function() {
      $("#producttext").toggle();
      $("#product_img").toggle();
    });
  });

  /*portfolio*/
//Add hover and text
$('#port').hover(function () {
    $(this).css("opacity", "1.7");
    $('.pf1').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.pf1').addClass('text');//addclass adds one or more class names to the selected elements
});
$('#port2').hover(function () {
  $(this).css("opacity", "1.7");
  $('.pf2').removeClass('text');
}, function () {
  $(this).css("opacity", "1");
  $('.pf2').addClass('text');
});

$('#port3').hover(function () {
  $(this).css("opacity", "1.7"); //this selector points to the css property
  $('.pf3').removeClass('text');
}, function () {
  $(this).css("opacity", "1");
  $('.pf3').addClass('text');
});

$('#port4').hover(function () {
  $(this).css("opacity", "1.7");
  $('.pf4').removeClass('text');
}, function () {
  $(this).css("opacity", "1");
  $('.pf4').addClass('text');
});

$('#port5').hover(function () {
  $(this).css("opacity", "1.7");
  $('.pf5').removeClass ('text');
}, function () {
  $(this).css("opacity", "1");
  $('.pf5').addClass('text');
});

$('#port6').hover(function () {
  $(this).css("opacity", "1.7");
  $('.pf6').removeClass('text');
}, function () {
  $(this).css("opacity", "1");
  $('.pf6').addClass('text');
});

$('#port7').hover(function () {
  $(this).css("opacity", "1.7");
  $('.pf7').removeClass('text');
}, function () {
  $(this).css("opacity", "1");
  $('.pf7').addClass('text');
});

$('#port8').hover(function () {
  $(this).css("opacity", "1.7");
  $('.pf8').removeClass ('text');
}, function () {
  $(this).css("opacity", "1");
  $('.pf8').addClass('text');
});

//validating user form 
document.getElementById('sub_btn').addEventListener('click', function () {
  var userName = $("#intext").val();
  var email = $("#email").val();
  var message = $("#comment").val();
  if ($("#intext").val() && $("#email").val() && $("#comment").val()) {
      alert(userName + " we have received your message. Thank you for reaching out to us.");
  } else {
      alert("Please fill all fields!");
  }
});