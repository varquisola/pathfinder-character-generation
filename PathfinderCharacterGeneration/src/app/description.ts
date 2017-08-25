export class Description {
    id: number;
    name: string;
	alignment: string;
	player: string;
	classname: string;
	level: number;
	deity: string;
	homeland: string;
    race: string;
	size: string;
	gender: string;
    age: number;
	heightfeet: number;
	heightinches: number;
	weight: number;
	hair: string;
    eyes: string;
    

    constructor(id: number, name: string, alignment: string, player: string, classname: string, level: number, deity: string,
        homeland: string, race: string, size: string, gender: string, age: number, heightfeet: number, heightinches: number,
        weight: number, hair: string, eyes: string) {
        this.id = id;
        this.name = name;
        this.alignment = alignment;
        this.player = player;
        this.classname = classname;
        this.level = level;
        this.deity = deity;
        this.homeland = homeland;
        this.race = race;
        this.size = size;
        this.gender = gender;
        this.age = age;
        this.heightfeet = heightfeet;
        this.heightinches = heightinches;
        this.weight = weight;
        this.hair = hair;
        this.eyes = eyes;
    }
}

export const alignments = [
    { value: 'LG', display: 'Lawful Good' },
    { value: 'LN', display: 'Lawful Neutral' },
    { value: 'LE', display: 'Lawful Evil' },
    { value: 'NG', display: 'Neutral Good' },
    { value: 'N', display: 'Neutral' },
    { value: 'NE', display: 'Neutral Evil' },
    { value: 'CG', display: 'Chaotic Good' },
    { value: 'CN', display: 'Chaotic Neutral' },
    { value: 'CE', display: 'Chaotic Evil' }
];

export const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
    'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard'];

export const races = ['Dwarf', 'Elf', 'Gnome', 'Half Elf', 'Half Orc', 'Halfling', 'Human'];

export const sizes = ['Fine', 'Diminutive', 'Tiny', 'Small',
    'Medium', 'Large', 'Huge', 'Gargantuan', 'Colossal'];


export const characters: Description[] = [];