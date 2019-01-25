class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name} I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
      this.speciality = attributes.speciality;
      this.favLanguage = attributes.favLanguage;
      this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} recieves a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    `${this.favSubjects.forEach(function(subject) {
      console.log(subject);
    })}`
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject} `
  }
}


class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standup(slack) {
    return `${this.name} announces to ${slack}, @channel study times`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

// new instructors

const cameron = new Instructor({
  name: 'Cameron',
  location: 'Utah',
  age: 35,
  gender: 'male',
  favLanguage: 'JavaScript',
  speciality: 'Front-end',
  catchPhrase: 'I got the pizza'
});

const josh = new Instructor({
  name: 'Josh',
  location: 'Silicon Valley',
  age: 34,
  gender: 'male',
  favLanguage: 'Ruby',
  speciality: 'Back-end',
  catchPhrase: 'Hold on its a bumpy ride'
});

// new students

const cam = new Student({
  name: 'Cam',
  location: 'OKC',
  age: 28,
  gender: 'male',
  previousBackground: 'cashier',
  className: 'WEBPT4',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const miguel = new Student({
  name: 'Miguel',
  location: 'LA',
  age: 25,
  gender: 'male',
  previousBackground: 'bartender',
  className: 'WEBPT4',
  favSubjects: ['jQuery', 'React', 'Vue']
});

// project managers

const elvis = new ProjectManagers({
  name: 'Elvis',
  location: 'Seattle',
  age: 26,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: 'Yo guys',
  gradClassName: 'CS14',
  favInstructor: 'Dan'
});

const shawn = new ProjectManagers({
  name: 'Shawn',
  location: 'Provo',
  age: 27,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'React',
  gradClassName: 'FSW14',
  favInstructor: 'Josh'
});


console.log(cameron.demo('JavaScript'));
console.log(josh.grade(cam, 'JavaScript'));
console.log(cam.listsSubjects());
console.log(miguel.PRAssignment('JavaScript'));
console.log(cam.sprintChallenge('JavaScript'));
console.log(elvis.standup('WEBPT4-Elvis'));
console.log(shawn.debugsCode(miguel, 'JavaScript'));
