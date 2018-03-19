/*                     | \                    
  ________             |  |                   
 /  _____/___________  |  |_______    _____  
/   \  __\   __ \__  \ |    \___  \  /     \ 
\    \_\  \  | \// _  \|  |  |/ _  \|  Y Y  \
 \______  /__|  (____  /__|  (____  /__|_|  /
        \/           \/    \/     \/      \/ 
*/

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = '5d576382955ff5829fc3844390db4427';
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

// SEARCH STRING EXAMPLE: https://api.themoviedb.org/3/discover/movie?with_genres=12&primary_release_year=2018&popularity.desc&api_key=5d576382955ff5829fc3844390db4427

$(function () {
  $('button').click(afterGoClicked);
  $('#movieImg').hide();
  $('#info').hide();
})

function afterGoClicked() {
  var genreSelected = $('#genre').val();
  var yearSelected = $('#year').val();
// EXPECTED OUTPUT: 'https://api.themoviedb.org/3/discover/movie?with_genres=' + genreSelected + '&primary_release_year=' + yearSelected + '&popularity.desc&api_key=5d576382955ff5829fc3844390db4427';

  var completeUrl = buildQueryString(baseAPIUrl, genreSelected, yearSelected) // << CREATES VARIABLE CALLED 'completeUrl' TYING QUERY STRING TOGETHER AS URL.
  if (genreSelected == '') {
    alert("Don't forget to select a Genre!")
  } else {
    $.getJSON(completeUrl, afterDataLoaded);// << LOADS 'completeUrl' THEN CALLS 'afterDataLoaded' FUNCTION.
  }
}

function buildQueryString(baseUrl, genreSelected, yearSelected) {
  var theUrl = baseAPIUrl + '&with_genres=' + genreSelected + '&primary_release_year=' + yearSelected;
  return theUrl;
}

// EXAMPLES OF QUERY PARAMETERS: https://www.themoviedb.org/documentation/api/discover

function afterDataLoaded(dataObject) {
  $("#movies").empty();
  $('#info').show();
  for (var i = 0; i < 15; i++) {
    $("#movies").append('<img id="mouseOver" src="' + posterBaseUrl + dataObject.results[i].poster_path + '" align="middle" class="hover"' + 'data-title="' + dataObject.results[i].title + '" data-year="(' + dataObject.results[i].release_date.slice(0, -6) + ')" data-summary="' + dataObject.results[i].overview + '"/>')
  }

  $('.hover').mousemove(function () {
    $('#hoverTitle').text($(this)[0].dataset.title);
    $('#hoverYear').text($(this)[0].dataset.year);
    $('#hoverSummary').text($(this)[0].dataset.summary);
  })
  $('.hover').mouseout(function () {
  });
}