function introduction(name) {
    return `Hi, my name is ${name}.`
}
console.log(introduction("Nathan"))

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage("Nathan", "Ruby"))

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional("Nathan"))
console.log(introductionWithLanguageOptional("Nathan", "C"))