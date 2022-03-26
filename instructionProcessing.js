exports.getOpCode = function(param0) {
    const param0_string = param0.toString();
    const opCode = parseInt(param0_string.slice(-2));
    return opCode
}

exports.getInstructionLength = function(opCode) {
    let instructionLength = 4;
    if (opCode == 3 || opCode ==4) instructionLength = 2;
    else if (opCode == 99) instructionLength = 1;
    return instructionLength
}

exports.getParameterModes = function(param0, instructionLength) {
    let paramModes = Array.from(param0.toString().slice(0,-2)).map(m => parseInt(m));
    while (paramModes.length < instructionLength-1) {
        paramModes.unshift(0)
    }
    return paramModes.reverse();
}
