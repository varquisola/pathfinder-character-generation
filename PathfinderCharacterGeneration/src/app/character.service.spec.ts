import { Description } from './description';

import { CharacterService } from './character.service';
import * as _ from 'lodash';

describe('CharacterService', () => {
    it('should collect descriptions and have them available for output', () => {

        const description1: Description = new Description(0, 'Virgille', 'LG', 'Dwarf', 40);

        const characterService: CharacterService = new CharacterService();

        characterService.currentDescription
            .subscribe((description: Description) => {
            })
    });
});