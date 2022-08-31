import { EnrichmentItem } from '../../src/entity/EnrichmentItem'

describe('Enrichment Item entity', () => {
    it('is assigned an ID upon save', async () => {
        const toy = new EnrichmentItem()
        toy.name = 'Boomer Ball'
        toy.description = 'A big indestructable plastic ball. Good for tigers or hippos even.'
        toy.url = 'https://www.wildlifetoybox.com'
        toy.price = 800

        expect(toy.id).toBeUndefined()

        await toy.save()
        expect(toy.id).not.toBeUndefined()
        expect(typeof toy.id).toBe('string')
    })

    it('can save a decimal amount as the price', async () => {
        const toy = new EnrichmentItem()
        toy.name = 'Crinkly bag'
        toy.description = 'A bag that crinkles. Cats love it.'
        toy.url = 'https://www.wildlifetoybox.com'
        toy.price = 99.98

        expect(await toy.save()).toBeTruthy()

        const fetchedToy = await EnrichmentItem.findOneByOrFail({id: toy.id})
        expect(fetchedToy.price).toEqual(99.98)
    })

    it('can be saved with only a name and description', async () => {
        const toy = new EnrichmentItem()
        toy.name = 'Tube'
        toy.description = 'Tuuuuube'

        expect(await toy.save()).toBeTruthy()
        const fetchedToy = await EnrichmentItem.findOneByOrFail({id: toy.id})
        expect(fetchedToy.name).toEqual('Tube')
    })
})