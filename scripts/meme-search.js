// Based on https://github.com/aDu/meme-search
// NO LICENSE
function memeSearch( keyword ) {
    if (keyword) keyword = keyword.trim();

    if (!keyword || keyword == "") keyword = "SAP";

    // Generate the URI containing the meme posts from Reddit
    let uri = encodeURI(
        `https://www.reddit.com/r/memes/search.json?q=${keyword}&restrict_sr=1&sort=relevance`
    );

    let request = new Request(uri);

    fetch(request)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        let posts = data.data.children;
        let memes = [];
        for (var post of posts) {
            if (post.data.post_hint != "image") continue; // Ignore posts that aren't images
            memes.push({
                title: post.data.title,
                image_url: post.data.url
            });
        } 
        return memes;
      })
      .catch(console.error);
}
