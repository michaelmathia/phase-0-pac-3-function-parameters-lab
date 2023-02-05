function introduction(name) {
    return `Hi, my name is ${name}.`;
}

console.log(introduction("Michael"));

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
}

logTwoValues(1, 2);

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Michael", "JavaScript"));

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }

  sayHelloTo();

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  console.log(introductionWithLanguageOptional("Jenny"));