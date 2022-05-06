const input = require('./getInput').input;
const instructionProcessing = require('./instructionProcessing')
const instructionExecution = require('./instructionExecution')

instructionProcessor = new instructionProcessing.instructionProcessor();

const outputTarget = 19690720;

let memory
let instructionPointer, programRunning, opCode, output, instructionLength, parameters,parameterModes

/*let noun = 12
let verb = 2*/

for (let noun=0; noun<=99; noun++)
{
    for (let verb = 0; verb<=99; verb++) {
        memory = input.split(',').map(v => parseInt(v));
        memory[1] = noun;
        memory[2] = verb;

        if (memory.length >0) {
            instructionPointer = 0;

            programRunning = true
        }

        while (programRunning) {
            opCode = instructionProcessor.getOpCode(memory[instructionPointer]);
            instructionLength = instructionProcessor.getInstructionLength(opCode);
            parameterModes = instructionProcessor.getParameterModes(memory[instructionPointer], instructionLength)
            if (instructionLength > 1) {
                parameters = memory.slice(instructionPointer+1, instructionPointer+instructionLength)
            }

            programRunning = instructionExecution.checkEndOfProgram(opCode);
            memory = instructionExecution.executeInstruction(memory, opCode, parameters, parameterModes)

            instructionPointer += instructionLength;

        }

        output = memory[0]


        if (output == outputTarget)
        {
            console.log(`noun: ${noun}, verb = ${verb}`)
        }
    }
}



// for noun = 12, verb = 2, output should be 4930687
// for outputTarget = 19690720, noun should be 53, verb should be 35
