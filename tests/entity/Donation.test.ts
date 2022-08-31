import { Donation } from '../../src/entity/Donation'
import { Wish } from '../../src/entity/Wish'
import { User } from '../../src/entity/User'
import { Animal } from '../../src/entity/Animal'
import { EnrichmentItem } from '../../src/entity/EnrichmentItem'

describe('Donation entity', () => {
    it('is assigned an ID when saved', async () => {
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

        const user = new User()
        user.firstName = 'Paul'
        user.lastName = 'Blart'
        user.email = 'mallcop@email.com'
        await user.save()

        const donation = new Donation()
        donation.userId = user.id
        donation.wishId = wish.id
        donation.amount = 3.50
        await donation.save()

        expect(donation.id).not.toBeUndefined()
        expect(typeof donation.id).toBe('string')

        const fetchedDonation = await Donation.findOneByOrFail({id: donation.id})
        const fetchedWish = await Wish.findOneByOrFail({id: wish.id})
        const fetchedUser = await User.findOneByOrFail({id: user.id})

        expect(fetchedDonation.userId).toEqual(fetchedUser.id)
        expect(fetchedDonation.wishId).toEqual(fetchedWish.id)
        expect(fetchedDonation.amount).toEqual(donation.amount)
    })
})