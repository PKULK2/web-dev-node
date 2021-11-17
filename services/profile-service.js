let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        profile[0] = {
            ...profile[0],
            ...req.body,
        }
        res.json(profile[0]);
    }

    app.put('/api/profile', updateCurrentProfile);
}