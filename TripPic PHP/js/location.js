var dodgyTags = 
[
    'sex',
    'slut'
]

var maxTags = 29

var container = $('#pictures-container')


navigator.geolocation.getCurrentPosition(function(position) 
{
  getInstagramByLatLon(position.coords.latitude, position.coords.longitude)
});

setTimeout(function()
{ 
    getInstagramHashtag('touristspot')
    getInstagramHashtag('tourism')
    getInstagramHashtag('tourist')
    getInstagramHashtag('sightseeing')
}, 3000);


// FUNCTIONS

function getInstagramHashtag(hashtag)
{
  var URL = 'https://api.instagram.com/v1/tags/'
      + hashtag
      + '/media/recent?'
      + 'client_id=27d6ee649376455285f2e25345debf3a'
  getMediaFromInstagramByURL(URL)  
}

// we use the Instagram API
// specifically, we want to get media from a certain location
// see https://instagram.com/developer/endpoints/media/#get_media_search
function getInstagramByLatLon(latitude, longitude, tags)
{
  var URL = 'https://api.instagram.com/v1/media/search?lat=' 
          + latitude 
          + '&lng=' + longitude 
          + '&distance=2000' 
          + '&client_id=27d6ee649376455285f2e25345debf3a'
  
  getMediaFromInstagramByURL(URL)  
}

function getMediaFromInstagramByURL(URL)
{
    // we're using jQuery's AJAX function to get data from Instagram
    // see http://api.jquery.com/jquery.ajax
    $.ajax(
    {
      dataType: "jsonp", // we want JSON data, but we need to state "jsonp" here. Otherwise Instagram would refuse our request, as it comes from a different domain. If you really want to know wtf JSONP is, take a look at https://learn.jquery.com/ajax/working-with-jsonp/
      url: URL, // the url to get data from
      success: gotMediaFromInstagram // the function to execute once we get data back from Instagram
    })
}


function gotMediaFromInstagram( json )
{
  console.log(json)

  // we store the array of pictures in a new variable
  var pictures = json.data

  // we loop through the pictures, one at a time
  for (var counter = 0; counter < pictures.length; counter = counter + 1)
  {
    var picture = pictures[counter]
    // console.log(picture)
    
    var imageURL = picture.images.standard_resolution.url
    
    // using underscorejs to filter out dodgy tags
    
    
    var pictureDodgyTags = _(picture.tags).intersection(dodgyTags)
    if (pictureDodgyTags.length > 0)
    {
        console.log('this image has ' + pictureDodgyTags.length + ' dodgy tags and is prolly dodgy ' + imageURL)
        // don't display this picture
    }
    else if (picture.tags.length > maxTags) 
    {
        console.log('this image has ' + picture.tags.length + ' tags and is prolly spammy ' + imageURL)
    }
    else
    {
        var img = '<img src="' + imageURL + '" >'
        container.append(img)
    }

    
//    var likesCount = picture.likes.count
//    if (likesCount == 0) likesCount = 1
//    var tagsCount = picture.tags.length
//    var tagsLikesRatio = tagsCount / likesCount
//    var width = 100 - tagsLikesRatio
//    console.log(tagsCount, likesCount, width)

//    var img = '<img src=' + imageURL + ' width=' + width +'% >'
    
  }
}



