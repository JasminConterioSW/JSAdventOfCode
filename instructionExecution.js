const readline = require('readline-sync');


exports.checkEndOfProgram = function(opCode) {
    if (opCode == 99) {
        return false;
    }
    else return true;
}

exports.executeInstruction = function(memory, opCode, parameters, parameterModes) {

    const arguments = getArguments(opCode, parameters,parameterModes, memory)

    switch(opCode) {
        case 1:
            memory[arguments[2]] = arguments[0]+arguments[1];
            break;
        case 2:
            memory[arguments[2]] = arguments[0]*arguments[1];
            break
        case 3:
            console.log('INPUT!')
            memory[arguments[0]] = Number(readline.prompt());
            break
        case 4:
            console.log(arguments[0])
    }

    return memory
}

getArguments = function(opCode, parameters, parameterModes, memory) {
    let arguments = [];
    if (opCode == 1 || opCode == 2) {
        for (let i=0; i<2; i++) {
            if (parameterModes[i] == 1) {
                arguments.push(parameters[i])
            }
            else {
                arguments.push(memory[parameters[i]])
            }
        }
    }
    if (opCode == 4 && parameterModes[0]==0) {
        arguments.push(memory[parameters[0]])
    }
    else {
        arguments.push(parameters.slice(-1)[0])
    }


    return arguments
}