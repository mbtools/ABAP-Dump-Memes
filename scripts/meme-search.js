// MEME Search on Reddit
// Returns array of { titel, imageURL } 
//
// Idea based on https://github.com/aDu/meme-search
function memeSearch(keyword) {
    if (keyword) keyword = keyword.trim();

    if (!keyword || keyword == "") keyword = "SAP";

    // Generate the URI containing the meme posts from Reddit
    const uri = encodeURI( 'https://www.reddit.com/r/memes/search.json?q=' + keyword + '&restrict_sr=1&sort=relevance' );

    // Synchronous request to get search results
    let request = new XMLHttpRequest();
    request.open('GET', uri, false);
    request.send(null);
    
    if (request.status === 200) {
        const data = JSON.parse( request.responseText );
        const posts = data.data.children;
        let memes = [];
        for (const post of posts) {
            if (post.data.post_hint != "image") continue; // Ignore posts that aren't images
            memes.push({
                title: post.data.title,
                imageURL: post.data.url
            });
        }
        return memes;
    }
}
