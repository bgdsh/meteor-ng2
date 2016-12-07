import { Meteor } from 'meteor/meteor';
import { Parties } from '../../../both/collections/parties.collection';

Meteor.publish('parties', () => Parties.find(buildQuery.call(this)));
Meteor.publish('party', (partyId: string) => buildQuery.call(this, partyId))

function buildQuery(partyId?: string): Object {
  const isAvailable = {
    $or: [{
      public: true
    }, {
      $and: [{
        owner: this.userId
      }, {
        owner: {
          $exists: true
        }
      }]
    }]
  };
  if (partyId) {
    return {
      $and: [{
        _id: partyId
      },
        isAvailable
      ]
    }
  }
  return isAvailable;
}