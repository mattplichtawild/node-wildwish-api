import { toEditorSettings } from 'typescript'
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
        
        const fetchedAnimal = await Animal.findOneByOrFail({id: animal.id})

        expect(animal.id).not.toBeUndefined()
        expect(typeof animal.id).toBe('string')
        expect(fetchedAnimal.id).toEqual(animal.id)
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

        await zoo.save()
        await animal.save()
        expect(animal.zooId).toEqual(zoo.id)

        const fetchedZoo = await Zoo.findOneByOrFail({id: zoo.id})
        const fetchedAnimal = await Animal.findOneByOrFail({id: animal.id})

        expect(fetchedZoo.id).toEqual(zoo.id)
        expect(fetchedAnimal.id).toEqual(animal.id)
        expect(fetchedAnimal.zooId).toEqual(fetchedZoo.id)
    })
})