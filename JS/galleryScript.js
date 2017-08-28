var imgadr= ['images/activities/Activity-1.jpg','images/activities/Activity-2.jpg',
            'images/activities/Activity-3.jpg','images/activities/Activity-4.jpg',
            'images/activities/Activity-5.jpg', 'images/activities/Activity-6.jpg',
            'images/activities/Activity-7.jpg','images/activities/Activity-8.jpg',
            'images/activities/Activity-9.jpg'];
var headArray= ['NASA Space Apps Challenge','Scale Reaching Program\'s Hackathon', 'NASA Space Poop Challenge',
                'CeNAT HPC WorkShops', 'GoTouch\'s Promote','GoTouch Mini Hackathon',
                'Git WorkShop', 'Jocici', 'MPI WorkShop'];
var paraArray= ['Mentored the 16 Costa Rican teams on subjects like software and hardware prototyping and business. This  is an international NASA organized hackathon that occurs over 48 hours in cities around the world, to address challenges we face on Earth and in space.',
				'Lead a multidisciplinary team to develop a app/business idea to enhance the tour experience of the tour of Caminos de Osa Association. This through the use of the available resources.', 
				'Lead a multidisciplinary team to develop a solution on NASA\'s problem with the waste management for extended periods of time. The solution was planned but not implemented.',
        'Attended to a week long program of the National Center of High Technology on HPC subjects, specifically parallel programing.',
				'Promote GoTouch iniciative in different activities, while learning different subjects in this activities.',
        'Started the development of a flexible app creator to inform about the activities of the Computer Investigation Center of the Costa Rica Institute of Technology.',
        'Elaborated and imparted a Git WorkShop for the Circuits and Systems Society of the IEEE TEC Branch.', 
        'Formed part of the Costa Rica Institute of Technology organization staff for the JOCICI(Costa Rican Conference on Computer and Computer Research).',
        'Elaborated and imparted a MPI WorkShop for the Computer Society of the IEEE TEC Branch.'];
var cnt= 0;
var timer;
//gradient
//var slider= document.getElementById('slider');??  add script at the end of html?
// onload body ----or---- call the function at the beginning of script?-> script must be top or buttom?  
function sliderTimer()
{
  timer= setInterval(slider, 5000);
}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;
    
  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
  
  sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
    
  sliderTimer();
}
