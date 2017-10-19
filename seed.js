const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

const campuses = [
  { name: 'Node', image: 'https://www.techuz.com/wp-content/themes/techuz/images/nodejs-icon.png', info: 'Node.js is an open source development platform for executing JavaScript code server-side. Join Node Campus now!' },
  { name: 'Express', image: 'https://ucarecdn.com/f9ce1326-cb12-46d9-8eff-fb3feabfb627/', info: 'Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications. It is the de facto standard server framework for node.js. Join Express Campus now!' },
  { name: 'Sequelize', image: 'https://seanjs.org/img/sequelize.png', info: 'Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more. Join Sequelize campus now!' },
  { name: 'PostgreSQL', image: 'https://devinstechblog.com/wp-content/uploads/2016/08/postgresql-logo_Large.png', info: 'PostgreSQL is an open source relational database management system ( DBMS ). Join PostgreSQL Campus now!'},
  { name: 'React', image: 'https://s-media-cache-ak0.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png', info: 'React.js is an open-source JavaScript library developed by Facebook that uses server-side rendering and the Virtual DOM to provide a performance-oriented solution for building user interfaces. Join React Campus now!' },
  { name: 'Redux', image: 'https://kyleshevlin.com/wp-content/uploads/2016/11/redux_logo_2.png', info: 'Redux is a predictable state container for JavaScript apps. Redux works especially well with libraries like React because they let you describe UI as a function of state, and Redux emits state updates in response to actions. Join Redux Campus now!'}
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
