export default class SwapiService {
  constructor() {
    this.apiBase = "https://swapi.co/api";
    this.planetsModel = ["name", "population", "rotation_period:rotationPeriod", "diameter"];
    this.peopleModel = ["name", "gender", "birth_year:birthYear", "eye_color:eyeColor"];
    this.starshipsModel = [
      "name",
      "model",
      "manufacturer",
      "costInCredits",
      "length",
      "crew",
      "passengers",
      "cargoCapacity"
    ];
  }

  getId = item => (item.url ? item.url.match(/\/([0-9]*)\/$/)[1] : item);

  pick = props => obj =>
    props.reduce((acc, prop) => {
      const [p1, p2] = prop.split(":");
      if (obj[p1]) {
        acc[p2 || p1] = obj[p1];
      }
      return acc;
    }, {});

  transformProps(props, obj, _type, _id) {
    const id = this.getId(_id || obj);
    const type = _type === "people" ? "characters" : _type;
    return {
      id,
      imgUrl: `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`,
      ...this.pick(props)(obj)
    };
  }

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  }

  request = type => async (id = false) => {
    const res = await this.getResource(`/${type}/${id || ""}`);
    const transform = obj => this.transformProps(this[`${type}Model`], obj, type, id);
    return id ? transform(res) : res.results.map(obj => transform(obj));
  };

  getAllPeople = () => this.request("people")();

  getAllStarships = () => this.request("starships")();

  getAllPlanets = () => this.request("planets")();

  getPeople = id => this.request("people")(id);

  getStarship = id => this.request("starships")(id);

  getPlanet = id => this.request("planets")(id);
}
