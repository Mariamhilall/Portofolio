$(window).scroll(function(){
   let aboutOffset=$("#section-about").offset().top;
   let topOffset=$(window).scrollTop();
   if(topOffset>=aboutOffset){
      $(".navbar").css({"background-color":"#f8f8f8" ,"transition":"all 2s"})
   }
   else{
      $(".navbar").css({"background-color":"rgb(204, 204, 255)"})
      
     
      
      
   }

   if(topOffset>=aboutOffset){
      $("#topBtn").fadeIn(500);
   }
   else{
      $("#topBtn").fadeOut(500);
   }
   
})

$(".nav-link").click(function(){
   let currentLink=$(this).attr("href");
   let currentOffset=$(currentLink).offset().top;
   $("body,html").animate({scrollTop:currentOffset},300);
})

$("#aboutBtn").click(function(){
   let currentOffset=$("#section-about").offset().top;
   $("body,html").animate({scrollTop:currentOffset},300);
})

$("#topBtn").click(function(){
   let currentOffset=$("#section-home").offset().top;
   $("body,html").animate({scrollTop:currentOffset},500)
})

// document.getElementById("your-form-id").addEventListener("submit", function (event) {
//    event.preventDefault();

//    // Retrieve form data
//    var formData = {
//      name: document.getElementById("name").value,
//      email: document.getElementById("email").value,
//      phone: document.getElementById("phone").value,
//      message: document.getElementById("message").value,
//    };

//    // Send email
//    emailjs.send("service_wncxra9", "template_475lbnu", formData)
//      .then(function () {
//        alert("Email sent successfully!");
//        // Clear form fields if needed
//      })
//      .catch(function (error) {
//        console.error("Error sending email:", error);
//      });
//  });
