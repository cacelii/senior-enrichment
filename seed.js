const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

const campuses = [
  { name: 'Node', image: 'https://www.techuz.com/wp-content/themes/techuz/images/nodejs-icon.png' },
  { name: 'Express', image: 'https://ucarecdn.com/f9ce1326-cb12-46d9-8eff-fb3feabfb627/' },
  { name: 'Sequelize', image: 'https://seanjs.org/img/sequelize.png' },
  { name: 'PostgreSQL', image: 'https://devinstechblog.com/wp-content/uploads/2016/08/postgresql-logo_Large.png'},
  { name: 'React', image: 'https://s-media-cache-ak0.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png' },
  { name: 'Redux', image: 'https://kyleshevlin.com/wp-content/uploads/2016/11/redux_logo_2.png'}
];

const students = [{
  name: 'Cecilia',
  email: 'cecilia@123.com',
  campusId: 2
}, {
  name: 'Mark',
  email: 'mark@123.com',
  campusId: 5
}, {
  name: 'Jenn',
  email: 'jenn@jenn.com',
  campusId: 6
}, {
  name: 'Emma',
  email: 'emma@emma.com',
  campusId: 3
}, {
  name: 'Elliott',
  email: 'elliott@elliott.com',
  campusId: 1
}, {
  name: 'Marcy',
  email: 'marcy@marcy.com',
  campusId: 4
}, {
  name: 'Stacey',
  email: 'stacey@stacey.com',
  campusId: 1
}, {
  name: 'Jerry',
  email: 'jerry@jerry.com',
  campusId: 3
}, {
  name: 'Lea',
  email: 'lea@lea.com',
  campusId: 2
}, {
  name: 'Kenneth',
  email: 'kenneth@kenneth.com',
  campusId: 4
}, {
  name: 'Jean',
  email: 'jean@jean.com',
  campusId: 5
}];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
