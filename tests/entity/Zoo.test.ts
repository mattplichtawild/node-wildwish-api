import { Zoo } from "../../src/entity/Zoo"

describe('Zoo entity', () => {
    it('is assigned an ID on save', async () => {
        const zoo = new Zoo()
        expect(zoo.id).toBeUndefined()

        zoo.name = 'Denver Zoo'
        zoo.shippingAdress = '123 Colfax Ave'
        zoo.city = 'Denver'
        zoo.state = 'CO'
        zoo.postalCode = '80917' 
        await zoo.save()
        
        const fetchedZoo = await Zoo.findOneByOrFail({id: zoo.id})

        expect(zoo.id).not.toBeUndefined()
        expect(typeof zoo.id).toBe('string')
        expect(fetchedZoo.id).toEqual(zoo.id)
    })
})