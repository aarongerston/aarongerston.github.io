
const searchEngine = "NYT"
const NYT_API_ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
NYT_API_KEY = "PAz44Cb1mv88KzTAqBSAnYqJSn5Q1CXG"

function searchNYTArticles(subject, country) {

    const query = `${subject}`;

    // Fetch data from NYT API with filters
    return fetch(`${NYT_API_ENDPOINT}?q=${encodeURIComponent(query)}&fq=glocations:("${country}")&api-key=${NYT_API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data.response.docs)  // Return the list of articles
        .catch(error => {
            console.error('Error fetching NYT articles:', error);
        });
}

function webSearch(country) {

    console.log("Scouring the web with " + searchEngine);

    fullQuestion = question + ' in ' + country + '?'
    fullURI = encodeURIComponent(fullQuestion).replace("'", "%27")
    
    if (searchEngine == 'Contextual') {

        contextualSearch(fullURI)

    } else if (searchEngine == "NewsAPI") {

        fetch(`${NewsAPIEndpoint}?q=${encodeURIComponent(fullQuestion)}&language=en&apiKey=${NewsAPIKey}`)
        .then(response => response.json())  // Ensure the response is parsed as JSON
        .then(resultsHandler)
        .catch(error => console.error('Error fetching data: ', error));

//        const newsapi = new NewsAPI(NewsAPIKey)
//        newsapi.v2.topHeadlines({
//            q: fullQuestion,
//            language: "en",
//        }).then(response => {
//            resultsHandler(results);
//        });

//    } else if (searchEngine == 'Google') {
//
//        var GoogleNews, googleNews, track;
//
//        GoogleNews = require('google-news');
//        import GoogleNews from 'google-news';
//        googleNews = new GoogleNews();
//
//        googleNews.stream(fullQuestion, function(stream) {
//
//          stream.on(GoogleNews.DATA, function(data) {
//            return console.log('Data Event received... ' + data.title);
//          });
//
//          stream.on(GoogleNews.ERROR, function(error) {
//            return console.log('Error Event received... ' + error);
//          });
//        });

//        var googleURL = "https://www.googleapis.com/customsearch/v1?key=" + GoogleAPIKey + "&cx=" + GoogleProjectKey + "&q=" + fullURI + "&num=5&callback=GoogleSearchHandler"
//        GoogleSearch(googleURL)

    } else if (searchEngine == "NYT") {

        searchNYTArticles(
            fullQuestion,
            country
        ).then(nytResults => {
            resultsHandler(nytResults)
            // Parse and format the results
//            const formattedResults = parseNYTResults(nytResults);
//            console.log(formattedResults);  // Display the formatted results
        });

    } else {
        console.log("Search engine not found.");
    }
}

function resultsHandler(results) {

    console.log("RESULTS")
    console.log(results)
    console.log("=======")

    // Add Google results to results dict
    resultsDict[country] = results
    resultsDict[country]["scope"] = scope
    resultsDict[country]["question"] = question

    // add popup
    text = parseSearchResults(results)
    makeInfoPopup(text)

    // update info box
    info.update({infoCountry: country, text: ''})

    console.log(searchEngine + ' search success!');
}

function parseNYTResults(nytResults) {
    let mainText = '';
    let nItems = Math.min(nytResults.length, 5);  // Limiting to 5 articles

    if (nItems > 0) {
        mainText += '<ol class="hovered"><br>';
        for (let i = 0; i < nItems; i++) {
            let article = nytResults[i];
            mainText += "<span class='popupBold'>" +
                        "<li><a id='popupAnchor' href='" + article.web_url + "' target='_blank'>" + article.headline.main + "</a></span>" +
                        "<span class='popupText'>" +
                        "<br><a id='popupAnchor' href='" + article.web_url + "' target='_blank'>" + article.snippet + "</a><br>" +
                        "<span class='popupLink'><a id='popupAnchor' href='" + article.web_url + "' target='_blank'>" + article.source + "</a></span><br><br>";
        }
        mainText += '</ol>';
    }

    return mainText;
}

function parseNewsAPIResults(newsAPIResultsObject) {

    console.log(newsAPIResultsObject.articles)

    let mainText = '';

    // Ensure the articles key exists and is an array
    if (newsAPIResultsObject && Array.isArray(newsAPIResultsObject.articles)) {
        let nItems = Math.min(newsAPIResultsObject.articles.length, 5);

        if (nItems > 0) {
            mainText += '<ol class="hovered"><br>';
            for (let i = 0; i < nItems; i++) {
                let article = newsAPIResultsObject.articles[i];
                mainText += "<span class='popupBold'>" +
                            "<li><a id='popupAnchor' href='" + article.url + "' target='_blank'>" + article.title + "</a></span>" +
                            "<span class='popupText'>" +
                            "<br><a id='popupAnchor' href='" + article.url + "' target='_blank'>" + article.description + "</a><br>" +
                            "<span class='popupLink'><a id='popupAnchor' href='" + article.url + "' target='_blank'>" + article.source.name + "</a></span><br><br>";
            }
            mainText += '</ol>';
        }
    } else {
        console.error("Invalid response structure: ", newsAPIResultsObject);
    }

    return mainText;
}



function parseSearchResults(resultsObject) {
    if (searchEngine == "Google") {
        return parseGoogleResults(resultsObject)
    } else if (searchEngine == "Contextual") {
        return parseContextualResults(resultsObject)
    } else if (searchEngine == "NewsAPI") {
        return parseNewsAPIResults(resultsObject)
    } else if (searchEngine == "NYT") {
        return parseNYTResults(resultsObject)
    } else {
        console.log('Cannot find parser for '+searchEngine+'!');
        return "Oh no :(<br/>I'm having difficulties parsing the search results!"
    }
}


/* CONTEXTUAL */

function contextualSearch(qURI) {

    pageNumber = 1;
    pageSize = 5;
    URL = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=" +
          qURI + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize + "&autoCorrect=false&fromPublishedDate=null&toPublishedDate=null"
            
    try {
        $(document).ready(function () {
            $.ajax(contextualSearchSettings(URL)).done(contextualSearchHandler);
        });
    } catch (err) {
        alert(err)
    }
}

const contextualSearchSettings = function(fullURL) {
    return {
        // "async": false,
        "timeout": 10000,
        "error": function(jqXHR, textStatus, errorThrown) {alert("Error! Failed to load search results: " + errorThrown)},
        "crossDomain": true,
        "url": fullURL,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "62fd8f4dc6msh903481034dac164p1cab13jsn38dffd9f752b",
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
        }
    }
};

function contextualSearchHandler(response) {
    // Check if error

    // if no error:
    resultsHandler(response)
}

parseContextualResults = function(contextualResultsObject) {

    mainText = ''
    nItems = Math.min(contextualResultsObject.value.length, 5)
    if (nItems > 0) {
        mainText += "<ol class='hovered'>"
        for (i = 0; i < nItems; i++) {
            item = contextualResultsObject.value[i]
            mainText += "<span class='popupBold'>" + "<li><a id='popupAnchor' href=" + item.url + " target='_blank'>" + item.title + "</a></span>" +
                        "<span class='popupText'>" + "<br/><a id='popupAnchor' href=" + item.url + " target='_blank'>" + item.description + "</a>"
            if (isMobile()) {
                if (i < nItems - 1) {
                    mainText += "<br/><br/>"
                }
            } else {
                mainText += "<br/><span class='popupLink'><a id='popupAnchor' href=" + item.url + " target='_blank'>" + item.url + "</a></span><br\>"
                if (i < nItems - 1) {
                    mainText += "<br/>"
                }
            }
        }
        mainText += '</ol>'
        if (isMobile()) {
            mainText += "<br/>"
        }
    }

    return mainText
}


/* GOOGLE */

function GoogleSearch(URL) {
    console.log("Googling: " + URL);				
    
    // Prepare Google search script
    var jsElm = document.createElement(id="script"); // DOM: Create the script element
    jsElm.type = "application/javascript";
    jsElm.async = true;
    jsElm.src = URL; // make the script element load file

    // Insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(jsElm, s);

    console.log(jsElm)
    console.log(s)
}

function GoogleSearchHandler(response) {

    try {
        var code = response.error.code
        if (code == 429) {
            console.log("Google Search error:")
            console.log(response.error)
            alert('Unfortunately In The World has reached its quota of Google queries per day :(\n\n'+
                  'If you\'d like to support this website and the use and development thereof, please consider making a small financial contribution to the developer!\n' +
                  'Every $5 pays for 1000 more Google queries!\n\n' +
                  'patreon.com/aarongerston')
        } 
    } catch (err) {
        console.log('No Google error.')

        resultsHandler(response)
    }
}

function parseGoogleResults(googleResultsObject) {

    mainText = ''
    nItems = Math.min(googleResultsObject.items.length, 5)
    if (nItems > 0) {
        mainText += '<ol class="hovered"><br\>'
        for (i = 0; i < nItems; i++) {
            item = googleResultsObject.items[i]
            mainText += "<span class='popupBold'>" + "<li><a id='popupAnchor' href=" + item.link + " target='_blank'>" + item.title + "</a></span>" +
                        "<span class='popupText'>" + "<br\><a id='popupAnchor' href=" + item.link + " target='_blank'>" + item.snippet + "</a><br>" +
                        "<span class='popupLink'><a id='popupAnchor' href=" + item.link + " target='_blank'>" + item.displayLink + "</a></span><br\><br\>"
        }
        mainText += '</ol>'
    }

    return mainText
}