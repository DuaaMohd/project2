/*
  Please add all Javascript code to this file.
*/


$(function(){
 function FirstSource() {
  $.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ed391384098d4f25b48f890336153b44", function (res) {
    $("#loading").toggle();
    let titleArr = [];
    let contentArr = [];
    for (let i = 0; i < 4; i++) {
      titleArr.push(res.articles[i].title)
      contentArr.push(res.articles[i].content)
      $(".art" + i).empty();
      $(".art" + i).append(`<li>${res.articles[i].title}</li>`)
      $(".art" + i).on("click", function () {
        $("#popUp").show();
        $(".title").empty();
        $(".content").empty();
        $(".title").append(`${titleArr[i]}`)
        $(".content").append(`${contentArr[i]}`)

      })
    }
  }) 
  titleArr = [];
  contentArr = [];
}

function SecondSource() {
  $.get("https://content.guardianapis.com/search?api-key=ac4e58f7-ba0c-458d-93e8-79821a487229", function (res) {
    $("#loading").toggle();
    let titleArr = [];
    let contentArr = [];
    for (let i = 0; i < 4; i++) {
      titleArr.push(res.response.results[i].webTitle)
      contentArr.push(res.response.results[i].webUrl)
      $(".art" + i).empty();
      $(".art" + i).append(`<li>${res.response.results[i].webTitle}</li>`)
      $(".art" + i).on("click", function () {
        $("#popUp").show();
        $(".title").empty();
        $(".content").empty();
        $(".title").append(`${titleArr[i]}`)
        $(".content").append(`<a href="#">${contentArr[i]}</a>`)

      })
    }
  }) 
  titleArr = [];
  contentArr = [];
}




// popUp hide
$("#popUp").hide();
// loader hide
$("#loading").hide();

//call FirstSource
$(".src1").click(function () {
  $("#loading").toggle();
  setTimeout(() => { FirstSource(); }, 1000)
});

//call SecondSource
$(".src2").click(function () {
  $("#loading").toggle();
  setTimeout(() => { SecondSource(); }, 1000)
});

//closepopup function
$(".closePopUp").click(function () {
  $("#popUp").hide();
  $('.title').empty();
  $('.content').empty();
})


})






















