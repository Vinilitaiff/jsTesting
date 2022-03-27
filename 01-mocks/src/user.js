class User {
  constructor({ id, name, profession, age }) {
    this.id = parseInt(id);
    this.name = name;
    this.profession = profession;
    this.age = Number(age);
  }
}

module.exports = User;