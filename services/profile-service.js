let profile = require('../data/profile.json');
//const dao = require('../db/profile/profile-dao');


module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);

 /*   const findProfileById = (req, res) => {
        console.log("Hi");
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));
    }

    app.get('/rest/profile/:id', findProfileById);
*/
    /*const updateProfile = (req,res) => {
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));
    }
    app.put("/rest/profile/:id", updateProfile);
*/

    const updateCurrentProfile = (req, res) => {
        profile[0] = {
            ...profile[0],
            ...req.body,
        }
        res.json(profile[0]);
    }

    app.put('/api/profile', updateCurrentProfile);
}