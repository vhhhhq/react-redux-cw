import { 
    ADD_QUESTION,
    GET_QUESTIONS
  } from './actions';
  
  const initialState = {
    questions: [
        {id: 1,
            question: 'Which was the 1st non Test playing country to beat India in an international match?',
            answers: [
                {
                   answer: 'Canada',
                   correct: false
                },
                {
                    answer: 'Sri Lanka',
                    correct: true
                },
                {
                    answer: 'Zimbabwe',
                    correct: false
                },
                {
                    answer: 'East Africa',
                    correct: false 
                }
            ]

        },
        {id: 2,
            question: 'Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?',
            answers: [
                {
                    answer: 'Two',
                    correct: false
                 },
                 {
                     answer: 'Three',
                     correct: false
                 },
                 {
                     answer: 'Four',
                     correct: true
                 },
                 {
                     answer: 'Eight',
                     correct: false 
                 }
            ]

        },
        {id: 3,
            question: 'Which county did Ravi Shastri play for?',
            answers: [
                {
                    answer: 'Glamorgan',
                    correct: false
                 },
                 {
                     answer: 'Leicestershire',
                     correct: false
                 },
                 {
                     answer: 'Gloucestershire',
                     correct: false
                 },
                 {
                     answer: 'Lancashire',
                     correct: true 
                 }
            ]

        },
        {id: 4,
            question: 'Who was the first Indian to win the World Amateur Billiards title?',
            answers: [
                {
                    answer: 'Geet Sethi',
                    correct: false
                 },
                 {
                     answer: 'Wilson Jones',
                     correct: true
                 },
                 {
                     answer: 'Michael Ferreira',
                     correct: false
                 },
                 {
                     answer: 'Manoj Kothari',
                     correct: false 
                 }
            ]

        },
        {id: 5,
            question: 'Who is the first Indian woman to win an Asian Games gold in 400m run?',
            answers: [
                {
                    answer: 'M.L.Valsamma',
                    correct: false
                 },
                 {
                     answer: 'P.T.Usha',
                     correct: false
                 },
                 {
                     answer: 'Kamaljit Sandhu',
                     correct: true
                 },
                 {
                     answer: 'K.Malleshwari',
                     correct: false 
                 }
            ]

        },
        {id: 6,
            question: 'When was Amateur Athletics Federation of India established?',
            answers: [
                {
                    answer: '1936',
                    correct: false
                 },
                 {
                     answer: '1946',
                     correct: true
                 },
                 {
                     answer: '1956',
                     correct: false
                 },
                 {
                     answer: '1966',
                     correct: false 
                 }
            ]

        },
        {id: 7,
            question: 'Ricky Ponting is also known as what?',
            answers: [
                {
                    answer: 'The Rickster',
                    correct: false
                 },
                 {
                     answer: 'Ponts',
                     correct: false
                 },
                 {
                     answer: 'Ponter',
                     correct: false
                 },
                 {
                     answer: 'Punter',
                     correct: true 
                 }
            ]

        },
        {id: 8,
            question: 'How long are professional Golf Tour players allotted per shot?',
            answers: [
                {
                    answer: '45 seconds',
                    correct: true
                 },
                 {
                     answer: '25 seconds',
                     correct: false
                 },
                 {
                     answer: '1 minute',
                     correct: false
                 },
                 {
                     answer: '2 minutes',
                     correct: false 
                 }
            ]

        },
        {id: 9,
            question: 'Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?',
            answers: [
                {
                    answer: 'Baron Davis',
                    correct: false
                 },
                 {
                     answer: 'Kevin Garnett',
                     correct: false
                 },
                 {
                     answer: 'Stephon Maurbury',
                     correct: false
                 },
                 {
                     answer: 'Reggie Miller',
                     correct: true 
                 }
            ]

        },
        {id: 10,
            question: 'The first hang gliders to be flown were flown in...?',
            answers: [
                {
                    answer: '1600s',
                    correct: false
                 },
                 {
                     answer: '1700s',
                     correct: false
                 },
                 {
                     answer: '1800s',
                     correct: true
                 },
                 {
                     answer: '1900s',
                     correct: false 
                 }
            ]

        }
    ]
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_QUESTIONS: 
        return {
          ...state,
        }

      case ADD_QUESTION: 
        return {
          ...state,
          questions: [...state.questions, action.payloaanswer] 
        }
      default:
        return state;
    }
  }