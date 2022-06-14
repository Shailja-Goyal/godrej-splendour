$(document).ready(function () {
  $(".banner-slider").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  });
});

(function () {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll(".scroll");
  links.forEach((each) => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  let interval = 410;
  if (window.innerWidth > 991) {
    interval = 1;
  }
  setTimeout(function () {
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  }, interval);
}

function hideForm() {
  $(".enquire-form").addClass("hide");
  $(".enquire-btn").addClass("show-btn");
  $('.success-msg').removeClass('d-flex')
}

function showForm() {
  $(".enquire-form").removeClass("hide");
  $(".enquire-btn").removeClass("show-btn");
  $('.enquire-form').addClass('show')
}

function tabActive(obj) {
  $(".tab-nav").removeClass("active");
  $("." + obj).addClass("active");
  $(".connectivity").removeClass("active");
  $("#" + obj).addClass("active");
}

//Modal CSS

function showModal(obj) {
  let imgSrc = obj.getAttribute("src");
  console.log(imgSrc);
  $(".modal-img").attr("src", imgSrc);
  $(".modal").addClass("active");
  $("body").css("overflow", "hidden");
}

function hideModal() {
  $(".modal").removeClass("active");
  $("body").css("overflow", "auto");
}

function showNav() {
  $(".mobile-nav").addClass("active");
}

function hideNav() {
  $(".mobile-nav").removeClass("active");
}

$('#enquiry-form').submit(function(e){
  e.preventDefault();
  $('.success-msg').removeClass('d-flex')
  let valid = true
  let name = document.getElementById('name').value;
  let number = document.getElementById('number').value;
  let NAME_REGEX = /^[a-zA-Z]{3}[a-zA-Z ]{0,37}$/;
  let NUMBER_REGEX = /^[6789]\d{9}/;
  if(!NAME_REGEX.test(name)){
    $('.name-error').addClass('d-flex');
    valid = false
  } 
  else $('.name-error').removeClass('d-flex');
  if(!NUMBER_REGEX.test(number)){
    $('.number-error').addClass('d-flex');
    valid = false
  } 
  else $('.number-error').removeClass('d-flex');
  if(valid){
    $('.success-msg').addClass('d-flex')
    handleSubmit(name,number)
  } 
})

function handleSubmit(name,number){
  $('#enquiry-form')[0].reset();
  var form = $('#myform')[0];
  var data = new FormData(form);
  let ajax_request = new XMLHttpRequest();
  ajax_request.open('POST', 'query.php');
  ajax_request.send(data)
}
