export class AbilityScores {
    id: number;
    strscore: number;
    strmodifier: number;
    dexscore: number;
    dexmodifier: number;
    conscore: number;
    conmodifier: number;
    intscore: number;
    intmodifier: number;
    wisscore: number;
    wismodifier: number;
    chascore: number;
    chamodifier: number;
    
    constructor(id: number, strscore: number, strmodifier: number, dexscore: number, dexmodifier: number, conscore: number, conmodifier: number,
        intscore: number, intmodifier: number, wisscore: number, wismodifier: number, chascore: number, chamodifier: number) {

        this.id = id;
        this.strscore = strscore;
        this.strmodifier = strmodifier;
        this.dexscore = dexscore;
        this.dexmodifier = dexmodifier;
        this.conscore = conscore;
        this.conmodifier = conmodifier;
        this.intscore = intscore;
        this.intmodifier = intmodifier;
        this.wisscore = wisscore;
        this.wismodifier = wismodifier;
        this.chascore = chascore;
        this.chamodifier = chamodifier;
    }
}