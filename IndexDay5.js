const input = require('./getInput').input;
const instructionProcessing = require('./instructionProcessing')
const instructionExecution = require('./instructionExecution')

let memory, instructionPointer, programRunning, opCode, output, instructionLength, parameters,parameterModes


memory = input.split(',').map(v => parseInt(v));

if (memory.length >0) {
    instructionPointer = 0;

    programRunning = true
}

while (programRunning) {
    opCode = instructionProcessing.getOpCode(memory[instructionPointer]);
    instructionLength = instructionProcessing.getInstructionLength(opCode);
    parameterModes = instructionProcessing.getParameterModes(memory[instructionPointer], instructionLength)
    if (instructionLength > 1) {
        parameters = memory.slice(instructionPointer+1, instructionPointer+instructionLength)
    }

    programRunning = instructionExecution.checkEndOfProgram(opCode);
    memory = instructionExecution.executeInstruction(memory, opCode, parameters, parameterModes)

    instructionPointer += instructionLength;

}

// answer to part1: 13294380