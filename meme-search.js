// https://github.com/aDu/meme-search
// NO LICENSE
const request = require('request')

module.exports = (keyword, ops, cb) => {
    // Preprocess arguments
    if (!cb) {
        cb = ops
        ops = {}
    }

    if (keyword) keyword = keyword.trim()

    ops.subreddit = ops.subreddit || 'memes'
    ops.sort = ops.sort || 'relevance'

    if (!keyword || keyword == "") keyword = "meme"

    // Generate the URI containing the meme posts from Reddit
    let uri = encodeURI(
        `https://www.reddit.com/r/${ops.subreddit}/search.json?q=${keyword}&restrict_sr=1&sort=${ops.sort}`
    )

    request({
        method: 'GET',
        uri
    }, (err, response, body) => {
        if (err) return cb(err)
        if (response.status >= 400) return cb(new Error('Status code: ' + response.statusCode))

        let data = JSON.parse(body)

        let posts = data.data.children
        let memes = []
        
        for (var post of posts) {
            if (post.data.post_hint != "image") continue // Ignore posts that aren't images
            memes.push({
                title: post.data.title,
                image_url: post.data.url
            })
        }
        
        cb(null, memes)
    }).on('error', cb)
}
