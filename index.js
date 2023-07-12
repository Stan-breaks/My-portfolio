


export function canExecuteFastAttack(knightIsAwake) {
return  knightIsAwake= false;
}
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
return (knightIsAwake||archerIsAwake||prisonerIsAwake )=true;
}
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
return((!archerIsAwake)&&prisonerIsAwake)=true;
}

export function canFreePrisoner(
knightIsAwake,
archerIsAwake,
prisonerIsAwake,
petDogIsPresent
) {
return((petDogIsPresent&&(!archerIsAwake))||((!petDogIsPresent)&&prisonerIsAwake&&((!knightIsAwake)||(!archerIsAwake))   ))=true;
}
