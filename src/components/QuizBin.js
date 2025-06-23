export default function QuizBin(genre, difficulty) {

    const jsEasy = [
        {
            question: "What is the correct syntax for referring to an external script called 'script.js'?",
            options: [
                "<script href='script.js'>",
                "<script name='script.js'>",
                "<script src='script.js'>",
                "<script file='script.js'>"
            ],
            answer: 2
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function myFunction()",
                "function = myFunction()",
                "create myFunction()",
                "myFunction() = function"
            ],
            answer: 0
        },
        {
            question: "What is the correct way to write an array in JavaScript?",
            options: [
                "var colors = 'red', 'green', 'blue'",
                "var colors = ['red', 'green', 'blue']",
                "var colors = (1:'red', 2:'green', 3:'blue')",
                "var colors = {red, green, blue}"
            ],
            answer: 1
        },
        {
            question: "How do you add a comment in JavaScript?",
            options: [
                "// This is a comment",
                "<!-- This is a comment -->",
                "' This is a comment",
                "/* This is a comment */"
            ],
            answer: 0
        }
    ];

    const jsMedium = [
        {
            question: "What is the output of the following code: console.log(typeof null);",
            options: [
                "null",
                "undefined",
                "object",
                "string"
            ],
            answer: 2
        },
        {
            question: "Which of the following is a JavaScript data type?",
            options: [
                "String",
                "Number",
                "Boolean",
                "All of the above"
            ],
            answer: 3
        },
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
                "To refer to the global object",
                "To refer to the current function",
                "To refer to the current object",
                "To refer to the previous object"
            ],
            answer: 2
        },
        {
            question: "How do you declare a variable in JavaScript?",
            options: [
                "var myVar;",
                "variable myVar;",
                "declare myVar;",
                "myVar = variable;"
            ],
            answer: 0
        }
    ];

    const jsHard = [
        {
            question: "What is a closure in JavaScript?",
            options: [
                "A function that has access to its own scope, the outer function's scope, and the global scope",
                "A function that can only access its own scope",
                "A function that can only access the global scope",
                "A function that can only access the outer function's scope"
            ],
            answer: 0
        },
        {
            question: "What is the purpose of the 'bind' method in JavaScript?",
            options: [
                "To create a new function with a specific 'this' value",
                "To create a new object with a specific prototype",
                "To create a new array with a specific length",
                "To create a new string with a specific length"
            ],
            answer: 0
        },
        {
            question: "What is the output of the following code: console.log(1 + '1');",
            options: [
                "11",
                "2",
                "'11'",
                "'2'"
            ],
            answer: 0
        },
        {
            question: "What is the purpose of the 'async' keyword in JavaScript?",
            options: [
                "To declare a function as asynchronous",
                "To declare a variable as asynchronous",
                "To declare an object as asynchronous",
                "To declare an array as asynchronous"
            ],
            answer: 0
        }
    ];

    const pythonEasy = [
        {
            question: "What is the correct syntax to output 'Hello World' in Python?",
            options: [
                "print('Hello World')",
                "echo 'Hello World'",
                "console.log('Hello World')",
                "write('Hello World')"
            ],
            answer: 0
        },
        {
            question: "How do you create a function in Python?",
            options: [
                "def myFunction():",
                "function myFunction():",
                "create myFunction():",
                "myFunction() = function:"
            ],
            answer: 0
        },
        {
            question: "What is the correct way to create a list in Python?",
            options: [
                "myList = [1, 2, 3]",
                "myList = (1, 2, 3)",
                "myList = {1, 2, 3}",
                "myList = '1, 2, 3'"
            ],
            answer: 0
        },
        {
            question: "How do you add a comment in Python?",
            options: [
                "# This is a comment",
                "// This is a comment",
                "' This is a comment",
                "/* This is a comment */"
            ],
            answer: 0
        }
    ];

    const pythonMedium = [
        {
            question: "What is the output of the following code: print(type(None))?",
            options: [
                "<class 'NoneType'>",
                "<class 'null'>",
                "<class 'undefined'>",
                "<class 'object'>"
            ],
            answer: 0
        },
        {
            question: "Which of the following is a Python data type?",
            options: [
                "String",
                "Number",
                "Boolean",
                "All of the above"
            ],
            answer: 3
        },
        {
            question: "What is the purpose of the 'self' keyword in Python?",
            options: [
                "To refer to the global object",
                "To refer to the current function",
                "To refer to the current object",
                "To refer to the previous object"
            ],
            answer: 2
        },
        {
            question: "How do you declare a variable in Python?",
            options: [
                "myVar = 10",
                "var myVar = 10",
                "declare myVar = 10",
                "myVar : int = 10"
            ],
            answer: 0
        }
    ];

    const pythonHard = [
        {
            question: "What is a closure in Python?",
            options: [
                "A function that has access to its own scope, the outer function's scope, and the global scope",
                "A function that can only access its own scope",
                "A function that can only access the global scope",
                "A function that can only access the outer function's scope"
            ],
            answer: 0
        },
        {
            question: "What is the purpose of the 'lambda' keyword in Python?",
            options: [
                "To create an anonymous function",
                "To create a new object with a specific prototype",
                "To create a new array with a specific length",
                "To create a new string with a specific length"
            ],
            answer: 0
        },
        {
            question: "What is the output of the following code: print(1 + '1')?",
            options: [
                "11",
                "2",
                "'11'",
                "'2'"
            ],
            answer: 2
        },
        {
            question: "What is the purpose of the 'async' keyword in Python?",
            options: [
                "To declare a function as asynchronous",
                "To declare a variable as asynchronous",
                "To declare an object as asynchronous",
                "To declare an array as asynchronous"
            ],
            answer: 0
        }
    ];

    const getQuizSet = (genre, difficulty) => {

        if (genre === 'js') {
            if (difficulty === 'easy') {
                return jsEasy;
            } else if (difficulty === 'medium') {
                return jsMedium;
            } else if (difficulty === 'hard') {
                return jsHard;
            }
        }
        else if (genre === 'python') {
            if (difficulty === 'easy') {
                return pythonEasy;
            } else if (difficulty === 'medium') {
                return pythonMedium;
            } else if (difficulty === 'hard') {
                return pythonHard;
            }
        }
    };

    const quizSet = getQuizSet(genre, difficulty);


  return (
    quizSet
  );
}
