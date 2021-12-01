//let tweets = require('../data/tweets.json');
const dao = require('../db/tweets/tweet-dao');

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    app.get('/api/tweets', findAllTweets);

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));
    }

    app.delete("/api/tweets/:id", deleteTweet);

    const createTweet = (req, res) => {
        dao.createTweet(req.body)
            .then((postedTweet) => res.json(postedTweet))
    }

    app.post("/api/tweets", createTweet);

    const likeTweet = (req, res) => {
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));

        /*const id = req.params['id'];
          tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }*/

        //res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);

}












/*const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }*/




/*const postNewTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "../../../images/react.svg",
            "logo-image": "../../../images/react.svg",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }
*/

/*const deleteTweet = (req, res) => {
    const id = req.params['id'];
    tweets = tweets.filter(tweet => tweet._id !== id);
    res.json(tweets);
}
app.delete('/api/tweets/:id', deleteTweet);*/