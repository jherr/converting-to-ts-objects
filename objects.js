const FullTime = "FullTime";
const Temporary = "Temporary";

module.exports.FullTime = FullTime;
module.exports.Temporary = Temporary;

module.exports.introducePerson = (person) =>
  `Hello ${person.name.first} ${person.name.middle} ${person.name.last}`;

module.exports.isFulltimeEmployee = (person) => person.status === FullTime;

module.exports.personToString = (
  person = {
    status: FullTime,
    name: {
      first: "unknown",
      last: "unknown",
    },
    profession: "unknown",
  }
) => JSON.stringify(person, null, 2);

module.exports.getProfessions = (personMap) =>
  Object.values(personMap)
    .map(({ profession }) => profession)
    .join("\n");
