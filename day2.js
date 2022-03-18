inputProgram = "1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,23,9,27,1,5,27,31,2,31,13,35,1,35,5,39,1,39,5,43,2,13,43,47,2,47,10,51,1,51,6,55,2,55,9,59,1,59,5,63,1,63,13,67,2,67,6,71,1,71,5,75,1,75,5,79,1,79,9,83,1,10,83,87,1,87,10,91,1,91,9,95,1,10,95,99,1,10,99,103,2,103,10,107,1,107,9,111,2,6,111,115,1,5,115,119,2,119,13,123,1,6,123,127,2,9,127,131,1,131,5,135,1,135,13,139,1,139,10,143,1,2,143,147,1,147,10,0,99,2,0,14,0";

let programArray = inputProgram.split(',')

let position, programRunning, command, arg1Pos, arg2Pos, ansPos;
if (programArray.length >0){
    position = 0;
    programRunning = true
}

while (programRunning) {
    command = programArray[position];
    if (command == 99) {
        programRunning = false;
    }
    else if (command==1 || command == 2) {
        arg1Pos = programArray[position+1]
        arg2Pos = programArray[position+2]
        ansPos = programArray[position+3]
        if (command == 1) {
            programArray[ansPos] = Number(programArray[arg1Pos])+Number(programArray[arg2Pos])
        }
        else {
            programArray[ansPos] = Number(programArray[arg1Pos])*Number(programArray[arg2Pos])
        }
        position = position+4;

    }
    else {
        console.log(`Error - unrecognised command at position ${position}`)
        programRunning = false;
    }
}

const outputProgram = programArray.join(',')
console.log(outputProgram)

console.log(`Value at position 0: ${programArray[0]}`)

