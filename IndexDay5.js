const input = require('./getInput').input;
const instructionProcessing = require('./instructionProcessing')
const instructionExecution = require('./instructionExecution')

let memory, instructionPointer, programIsRunning, opCode, instructionLength, parameters,parameterModes

const instructionProcessor = new instructionProcessing.instructionProcessor()

memory = input.split(',').map(v => parseInt(v));

if (memory.length >0) {
    instructionPointer = 0;

    programIsRunning = true
}

while (programIsRunning) {
    processInstruction()
    getParameters()
    programIsRunning = instructionExecution.checkEndOfProgram(opCode);
    memory = instructionExecution.executeInstruction(memory, opCode, parameters, parameterModes)

    instructionPointer += instructionLength;

}

function processInstruction() {
    opCode = instructionProcessor.getOpCode(memory[instructionPointer]);
    instructionLength = instructionProcessor.getInstructionLength(opCode);
    parameterModes = instructionProcessor.getParameterModes(memory[instructionPointer], instructionLength)
}

function getParameters() {
    if (instructionLength > 1) {
        parameters = memory.slice(instructionPointer + 1, instructionPointer + instructionLength)
    }
}

// answer to part1: 13294380