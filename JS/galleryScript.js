var imgadr = [
  "images/activities/Activity-1.jpg",
  "images/activities/Activity-2.jpg",
  "images/activities/Activity-3.jpg",
  "images/activities/Activity-4.jpg",
  "images/activities/Activity-5.jpg",
  "images/activities/Activity-6.jpg",
  "images/activities/Activity-7.jpg",
  "images/activities/Activity-8.jpg",
  "images/activities/Activity-9.jpg",
  "images/activities/Activity-10.jpg",
  "images/activities/Activity-11.jpg",
  "images/activities/Activity-12.jpg",
  "images/activities/Activity-13.jpg",
  "images/activities/Activity-14.jpg"
];
var headArray = [
  "NASA Space Apps Challenge",
  "IEEEXtreme 11.0",
  "NASA Space Poop Challenge",
  "CeNAT HPC WorkShops",
  "GoTouch's Promote",
  "GoTouch Mini Hackathon",
  "Git WorkShop",
  "Jocici",
  "MPI WorkShop",
  "CeNAT Big Data WorkShops",
  "How to Get a Job at Big 5 Lecture",
  "Scale Reaching Program's Hackathon",
  "Outstanding Chapter Award",
  "Network Of Intel African Ancestry"
];
var paraArray = [
  "Mentored the 16 Costa Rican teams on subjects like software and hardware prototyping and business. This  is an international NASA organized hackathon that occurs over 48 hours in cities around the world, to address challenges we face on Earth and in space.",
  "Help the organizers to make the IEEExtreme 11.0 in Costa Rica possible and Lead a Computer Science Team.",
  "Lead a multidisciplinary team to develop a solution on NASA's problem with the waste management for extended periods of time. The solution was planned but not implemented.",
  "Attended to a week long program of the National Center of High Technology on HPC subjects, specifically parallel programing.",
  "Promote GoTouch initiative in different activities, while learning different subjects in this activities.",
  "Started the development of a flexible app creator to inform about the activities of the Computer Investigation Center of the Costa Rica Institute of Technology.",
  "Elaborated and imparted a Git WorkShop for the Circuits and Systems Society of the IEEE TEC Branch.",
  "Formed part of the Costa Rica Institute of Technology organization staff for the JOCICI(Costa Rican Conference on Computer and Computer Research).",
  "Elaborated and imparted a MPI WorkShop for the Computer Society of the IEEE TEC Branch.",
  "Attended to a week long program of the National Center of High Technology on HPC subjects, specifically Big Data.",
  "Elaborated and imparted a How to Get a Job at Big 5 Lecture for the Computer Society of the IEEE TEC Branch.",
  "Lead a multidisciplinary team to develop a app/business idea to enhance the tour experience of the tour of 'Caminos de Osa' Association. This through the use of the available resources.",
  'Every year Computer Society chapters worldwide conduct technical and social activities for their members. To recognize the professional chapter and student branch chapter that have provided their membership with the best overall experience, the IEEE Computer Society established the Outstanding Chapter Award. More on the <a href="http://interface.computer.org/outstanding-ieee-computer-society-chapter-awards-poland-costa-rica/">link</a>',
  "Co-lead the development pillar to generate value to the members of the employee resource group by providing the available resources in order to develop their careers and help them grow. Participated in different inclusion related activities."
];
var cnt = -1;
var timer;
function gallerySlider() {
  var i;
  var slides = document.getElementsByClassName("activitiesSlides");
  var headers = document.getElementsByClassName("sliderHeader");
  var paragraphs = document.getElementsByClassName("sliderPara");
  if (slides.length != headers.length || slides.length != paragraphs.length) {
    console.log("The length of the activities does not match");
    return;
  }
  for (i = 0; i < slides.length; i++) {
    headers[i].innerHTML = headArray[i];
    paragraphs[i].innerHTML = paraArray[i];
  }
  slider();
  start();
}

function start() {
  timer = setInterval(slider, 8000);
}

function slider() {
  var i;
  var slides = document.getElementsByClassName("activitiesSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  cnt++;
  if (cnt >= slides.length) {
    cnt = 0;
  }
  slides[cnt].style.background =
    "url(" + imgadr[cnt] + ") no-repeat no-repeat fixed center center ";
  slides[cnt].style.backgroundSize = "cover";
  slides[cnt].style.display = "block";
}

function next() {
  clearInterval(timer);
  slider();
  start();
}

function prev() {
  clearInterval(timer);
  cnt -= 2;
  if (cnt < 0) cnt = imgadr.length - 2;
  slider();
  start();
}
