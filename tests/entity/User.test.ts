import { User } from "../../src/entity/User"
import { Zoo } from "../../src/entity/Zoo"

describe('User entity', () => {
    it('is assigned an ID on save', async () => {
        const user = new User()
        user.firstName = 'Steve'
        user.lastName = 'Irwin'
        user.email = 'crikey@user.org'

        await user.save()

        const fetchedUser = await User.findOneByOrFail({id: user.id})

        expect(user.id).not.toBeUndefined()
        expect(typeof user.id).toBe('string')
        expect(fetchedUser.id).toEqual(user.id)
    })

    it('can be saved with an associated zoo', async () => {
        const zoo = new Zoo()
        zoo.name = 'Denver Zoo'
        zoo.shippingAdress = '123 Colfax Ave'
        zoo.city = 'Denver'
        zoo.state = 'CO'
        zoo.postalCode = '80917'

        await zoo.save()

        const user = new User()
        user.firstName = 'Steve'
        user.lastName = 'Irwin'
        user.email = 'crikey@user.org'
        user.zooId = zoo.id
        
        await user.save()

        expect(user.zooId).toEqual(zoo.id)

        const fetchedZoo = await Zoo.findOneByOrFail({id: zoo.id})
        const fetchedUser = await User.findOneByOrFail({id: user.id})

        expect(fetchedZoo.id).toEqual(zoo.id)
        expect(fetchedUser.id).toEqual(user.id)
        expect(fetchedUser.zooId).toEqual(fetchedZoo.id)
    })
})