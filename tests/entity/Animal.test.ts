import { Animal } from '../../src/entity/Animal'
import { Zoo } from '../../src/entity/Zoo'

describe('Animal entity', () => {
    it('is assigned an ID on save', async () => {
        const animal = new Animal()
        expect(animal.id).toBeUndefined()

        animal.name = 'Shere Kahn'
        animal.species = 'Bengal Tiger'
        animal.bio = 'Actually the good guy.'

        await animal.save()
        expect(animal.id).not.toBeUndefined()
        expect(typeof animal.id).toBe('string')
    })

    it('can be saved with an associated zoo', async () => {
        const zoo = new Zoo()
        const animal = new Animal()

        zoo.name = 'Denver Zoo'
        zoo.shippingAdress = '123 Colfax Ave'
        zoo.city = 'Denver'
        zoo.state = 'CO'
        zoo.postalCode = '80917'

        animal.name = 'Caesar'
        animal.species = 'Bengal Tiger'
        animal.bio = 'Once killed a dude.'
        animal.zoo = zoo

        animal.save()
        zoo.save()

        expect(animal.zooId).toEqual(zoo.id)
    })
})