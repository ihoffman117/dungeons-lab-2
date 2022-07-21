import axios from 'axios'

const api = 'https://www.dnd5eapi.co/api';

export default function handler(req, res) {
  axios.get(`${api}/monsters`)
    .then((response) => {
      if (!req.query.name) {
        res.send(response.data.results);
        return;
      }
      const results = [];
      response.data.results.forEach((monster) => {
        if (monster.name.contains(req.query.name)) {
          results.push(monster);
        }
      });
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
}
