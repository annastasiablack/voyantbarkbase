import Component from '@glimmer/component';

export default class DogsFilter extends Component {
  get results() {
    let { dogs, query } = this.args;

    //todo : make not case sensitive & search breed, owner, microchip
    if (query) {
      dogs = dogs.filter((dog) => dog.name.includes(query));
    }

    return dogs;
  }
}
