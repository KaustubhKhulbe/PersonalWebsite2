// $('.navbar a').on('click', function(e) {
//      if(this.hash !== ''){
//           e.preventDefault();

//           const hash = this.hash;
//           $('html, body').animate({
//                scrollTop: $(hash).offset().top
//           }, 400);
//      }
// });

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
     speed: 600
});

new TypeIt("#home", {
     speed: 100,
     loop: false
   }, function(){
     // callback
     $('.ti-cursor').remove();
   }).go();



  
  const about_text = "I am a passionate Robotics and Computer Science student. I am hardworking and will spend time self learning any topics. I have been an extremely active member in FRC Team 846, The Funky Monkeys. In the team, I have worked on both software and design. In addition, I have worked on my own to develop several projects. I primarily use Java, Python, and Kotlin to develop projects."
  document.getElementById("about_paragraph").textContent += about_text