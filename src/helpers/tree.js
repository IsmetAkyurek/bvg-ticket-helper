const tree = {
  name: {
    keyword: 'name',
    question: 'Please enter your name below and let us find you the ticket you need!',
    input: 'text',
    next: 'howLong'
  },
  howLong: {
    keyword: 'howLong',
    question: 'How long (days) are you planning on staying in the city?',
    input: 'number',
    next: 'isAlone'
  },
  isAlone: {
    keyword: 'isAlone',
    question: 'Are you coming alone to the city?',
    buttons: [
      {
        text: 'Yes',
        value: true,
        next: 'isOlderThan24'
      },
      {
        text: 'No',
        value: false,
        next: 'howMany'
      },
    ]
  },
  isOlderThan24: {
    keyword: 'isOlderThan24',
    question: 'How old are you?',
    buttons: [
      {
        text: 'Younger than 24',
        value: true,
        next: 'isStudent'
      },
      {
        text: 'Older than 24',
        value: false,
        next: 'hasBikes'
      }
    ]
  },
  isStudent: {
    keyword: 'isStudent',
    question: 'Are you a student?',
    buttons: [
      {
        text: 'Yes',
        value: true,
        next: 'hasBikes'
      },
      {
        text: 'No',
        value: false,
        next: 'hasBikes'
      }
    ]
  },
  howMany: {
    keyword: 'howMany',
    question: 'How many people are there with you?',
    input: 'number',
    next: 'hasBikes'
  },
  hasBikes: {
    keyword: 'hasBikes',
    question: 'Will you bring your bike(s)?',
    buttons: [
      {
        text: 'Yes',
        value: true,
        next: 'bikesCount'
      },
      {
        text: 'No',
        value: false,
        next: false
      }
    ]
  },
  bikesCount: {
    keyword: 'bikesCount',
    question: 'How many bike(s)?',
    input: 'number',
    next: false
  },
};

export default tree;