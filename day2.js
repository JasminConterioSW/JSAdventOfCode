const input = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,23,9,27,1,5,27,31,2,31,13,35,1,35,5,39,1,39,5,43,2,13,43,47,2,47,10,51,1,51,6,55,2,55,9,59,1,59,5,63,1,63,13,67,2,67,6,71,1,71,5,75,1,75,5,79,1,79,9,83,1,10,83,87,1,87,10,91,1,91,9,95,1,10,95,99,1,10,99,103,2,103,10,107,1,107,9,111,2,6,111,115,1,5,115,119,2,119,13,123,1,6,123,127,2,9,127,131,1,131,5,135,1,135,13,139,1,139,10,143,1,2,143,147,1,147,10,0,99,2,0,14,0";

const nValuesInInstruction = 4; //Adding this in is maybe a case of YAGNI, but is is a "magic number" if you don't put it in?
const outputTarget = 19690720;

let memory
let instructionPointer, programRunning, opCode, arg1Pos, arg2Pos, ansPos, output;

for (let noun=0; noun<=99; noun++)
{
    for (let verb = 0; verb<=99; verb++){
        memory = input.split(',').map(v => parseInt(v));
        memory[1] = noun;
        memory[2] = verb;

        if (memory.length >0){
            instructionPointer = 0;

            programRunning = true
        }

        while (programRunning) {
            opCode = memory[instructionPointer];
            if (opCode == 99) {
                programRunning = false;
            }
            else if (opCode==1 || opCode == 2) {
                arg1Pos = memory[instructionPointer+1]
                arg2Pos = memory[instructionPointer+2]
                ansPos = memory[instructionPointer+3]
                if (opCode == 1) {
                    memory[ansPos] = memory[arg1Pos]+memory[arg2Pos]
                }
                else {
                    memory[ansPos] = memory[arg1Pos]*memory[arg2Pos]
                }
                instructionPointer += nValuesInInstruction;
            }
            else {
                console.log(`Error - unrecognised command at position ${instructionPointer}`)
                programRunning = false;
            }
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
