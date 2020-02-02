var api = 'https://newsapi.org/v2/top-headlines?';

var apiKey = 'apiKey=c72f350d3ad047e4bbbb5150441337e9';

function changeCountry(id){

    var country = 'country=' + id + '&';
    var url = api + country + apiKey;
    console.log(api + " " + country + " " + apiKey)

    $.getJSON(url, function(data){
    console.log(data);

    var icon = data.articles[0].urlToImage;
    var author = data.articles[0].author;
    var title = data.articles[0].title;
    var description = data.articles[0].description;

    var icon1 = data.articles[1].urlToImage;
    var author1 = data.articles[1].author;
    var title1 = data.articles[1].title;
    var description1 = data.articles[1].description;

    var icon2 = data.articles[2].urlToImage;
    var author2 = data.articles[2].author;
    var title2 = data.articles[2].title;
    var description2 = data.articles[2].description;

    $("p").empty();

    $(".icon").attr("src", icon);
    $(".author").append(author);
    $(".title").append(title);
    $(".description").append(description);

    $(".icon1").attr("src", icon1);
    $(".author1").append(author1);
    $(".title1").append(title1);
    $(".description1").append(description1);

    $(".icon2").attr("src", icon2);
    $(".author2").append(author2);
    $(".title2").append(title2);
    $(".description2").append(description2);

    });

}
