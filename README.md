This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Things to do

### `small things`

~~ mouseover nav button ~~

~~ alphabetical order the lists ~~

- find a way to extract unique categories from Subjects

### `functionality`

~~ nav buttons actually route places ~~

~~ think we need a model for subjects too ~~

- add avatars
- turn names into Chips (with avatar)
- drawer menu?

###

- model of person?

`{
  "firstName": "Chris",
  "lastName": "Hughes",
  "teaching": [
    {
      subject: "Maths",
      category: "Academic",
      level: "Intermediate"
    },
    {
      subject: "Guitar",
      category: "Music",
      level: "Intermediate"
    }
  ],
  "learning": [
    {
      subject: "React",
      category: "Tech",
      level: "Beginner"
    },
    {
      subject: "Piano",
      category: "Music",
      level: "Novice"
    }
  ]
}`

- model of subject?

`{
  subject: "Maths",
  category: "Academic",
  image: "Maths.png"
}`

### `questions`

- what should I be using as keys when iterating?
- why does css suck so so much?
- i still don't know how to test

## `Notes`

withStyles injects a `classes` prop. So you define a `style` object and then
apply the keys as classes to the elements you want to style
