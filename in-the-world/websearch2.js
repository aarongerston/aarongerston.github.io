const searchEngine = 'Mediastack';

function webSearch() {
    console.log("Scouring the web with " + searchEngine);

    fullQuestion = question + ' in ' + country + '?';
    fullURI = encodeURIComponent(fullQuestion);

    if (searchEngine === 'Mediastack') {
        mediastackSearch(fullQuestion);
    } else {
        console.log("Search engine not found.");
    }
}

function mediastackSearch(query) {
    const apiKey = '0a74648d7cbc7889fba0c4a857a85405';  // Replace with your Mediastack API key
    const sanitizedQuery = encodeURIComponent(query.replace(/[^a-zA-Z0-9 ]/g, ""));  // Remove special characters
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=en&keywords=${sanitizedQuery}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error fetching news:', data.error);
            } else {
                resultsHandler(data);
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}

function resultsHandler(results) {

    // Add Mediastack results to results dict
    resultsDict[country] = results;
    resultsDict[country]["scope"] = scope;
    resultsDict[country]["question"] = question;

    // Add popup
    text = parseSearchResults(results);
    makeInfoPopup(text);

    // Update info box
    info.update({ infoCountry: country, text: '' });

    console.log(searchEngine + ' search success!');
}

function parseSearchResults(resultsObject) {
    if (searchEngine === "Mediastack") {
        return parseMediastackResults(resultsObject);
    } else {
        console.log('Cannot find parser for ' + searchEngine + '!');
        return "Oh no :(<br/>I'm having difficulties parsing the search results!";
    }
}

function parseMediastackResults(resultsObject) {
    let mainText = '';
    const articles = resultsObject.data;
    const nItems = Math.min(articles.length, 5);

    if (nItems > 0) {
        mainText += "<ol class='hovered'>";
        for (let i = 0; i < nItems; i++) {
            const item = articles[i];
            mainText += "<span class='popupBold'><li><a id='popupAnchor' href='" + item.url + "' target='_blank'>" + item.title + "</a></span>" +
                        "<span class='popupText'><br/><a id='popupAnchor' href='" + item.url + "' target='_blank'>" + item.description + "</a>";
            if (isMobile()) {
                if (i < nItems - 1) {
                    mainText += "<br/><br/>";
                }
            } else {
                mainText += "<br/><span class='popupLink'><a id='popupAnchor' href='" + item.url + "' target='_blank'>" + item.url + "</a></span><br/>";
                if (i < nItems - 1) {
                    mainText += "<br/>";
                }
            }
        }
        mainText += '</ol>';
        if (isMobile()) {
            mainText += "<br/>";
        }
    }

    return mainText;
}
