function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
  
const showHide1 = () => {
    let readMoreDiv = document.querySelector("#more1");
    if (readMoreDiv.style.display === "block") {
          readMoreDiv.style.transform = 'scale(0)'
      setTimeout(()=>readMoreDiv.style.display = 'none',1000)
       readMoreDiv.style.display = 'none';
       btn1.textContent = "Read More..."
    } else {
      readMoreDiv.style.display = "block";
      btn1.textContent = "Read Less..."
      setTimeout(()=> readMoreDiv.style.transform = 'scale(1)',300)
    }
  }
  const showHide2 = () => {
    let readMoreDiv = document.querySelector("#more2");
    if (readMoreDiv.style.display === "block") {
        readMoreDiv.style.transform = 'scale(0)'
      setTimeout(()=>readMoreDiv.style.display = 'none',1000)
      btn2.textContent = "Read More..."
    } else {
      readMoreDiv.style.display = "block";
      btn2.textContent = "Read Less..."
      setTimeout(()=> readMoreDiv.style.transform = 'scale(1)',300)
    }
  }
  const getRating1 = () => {
    let userRating = parseInt(prompt("Rate this collection (from 1 to 5 stars)"));
    if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
      alert("Try again with a number between 1 and 5!");
    } else {
      document.querySelector("#rating1").innerHTML = "You gave a rating of: ";
      for (let i = 1; i <= userRating; i++) {
        document.querySelector("#rating1").innerHTML += "<i class='yellow star icon'></i>";
      }
    }
  }
  const getRating2 = () => {
    let userRating = parseInt(prompt("Rate this collection (from 1 to 5 stars)"));
    if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
      alert("Try again with a number between 1 and 5!");
    } else {
      document.querySelector("#rating2").innerHTML = "You gave a rating of: <di";
      for (let i = 1; i <= userRating; i++) {
        document.querySelector("#rating2").innerHTML += "<i class='red heart icon'></i>";
      }
    }
  }
  
  let btn1 = document.querySelector('#btn1');
  btn1.addEventListener('click', showHide1);
  let btn2 = document.querySelector('#btn2');
  btn2.addEventListener('click', showHide2);
  let btn3 = document.querySelector('#btn3');
  btn3.addEventListener('click', getRating1);
  let btn4 = document.querySelector('#btn4');
  btn4.addEventListener('click', getRating2);



  

