import { Animal } from '../../src/entity/Animal'
import { EnrichmentItem } from '../../src/entity/EnrichmentItem'
import { Wish } from '../../src/entity/Wish'

describe('Wish entitiy', () => {
    it('is assigned an ID on save', async () => {
        const animal = new Animal()
        animal.name = 'Zamba'
        animal.species = 'African Lion'
        await animal.save()

        const enrichmentItem = new EnrichmentItem()
        enrichmentItem.name = 'Boomer Ball'
        enrichmentItem.description = 'A big red ball.'
        await enrichmentItem.save()

        const wish = new Wish()
        wish.animalId = animal.id
        wish.enrichmentItemId = enrichmentItem.id 
        wish.fundAmount = 99.98
        await wish.save()

        expect(wish.id).not.toBeUndefined()
        expect(typeof wish.id).toBe('string')
    })
})