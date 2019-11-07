export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _planetsModel = ['name', 'population', 'rotation_period:rotationPeriod', 'diameter'];
    _peopleModel = ['name', 'gender', 'birth_year:birthYear', 'eye_color:eyeColor'];
    _starshipsModel = ['name', 'model', 'manufacturer', 'costInCredits', 'length', 'crew', 'passengers', 'cargoCapacity'];

    _getId(item) {
        const idExp = /\/([0-9]*)\/$/;
        return item.url ? item.url.match(idExp)[1] : item;
    }

    _pick = props => obj => props.reduce((acc, prop) => {
        const [p1, p2] = prop.split(':');
        if(obj[p1]) {
            acc[p2||p1] = obj[p1];
        }
        return acc;
    }, {});

    _transformProps(props, obj, _type, _id) {
        const id = this._getId(_id||obj);
        const type = _type === 'people' ? 'characters' : _type;
        return {
            id,
            imgUrl: `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`,
            ...this._pick(props)(obj),
        }
    }

    async _getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    _get = type => async (id = false) => {
        const res = await this._getResource(`/${type}/${id || ''}`);
        const transform = obj => this._transformProps(this[`_${type}Model`], obj, type, id);
        return id ? transform(res) : res.results.map(obj => transform(obj));
    };

    getAllPeople = () => this._get('people')();

    getAllStarships = () => this._get('starships')();

    getAllPlanets = () => this._get('planets')();

    getPeople = id => this._get('people')(id);

    getStarship = id => this._get('starships')(id);

    getPlanet = id => this._get('planets')(id);
}
