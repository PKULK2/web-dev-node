let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        const newProfile = {
            _id: (new Date()).getTime() + '',
            "firstName": "Poornapragna",
            "lastName": "Kulkarni",
            "bio": "Software Engineer, AI, Space, and renewable enthusiast.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "9/23/2000",
            ...req.body,
        }
        profile = [
            newProfile,
            ...profile
            ]
        res.json(newProfile);
    }

    app.put('/api/profile', updateCurrentProfile);
}