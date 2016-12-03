import { MongoObservable } from 'meteor-rxjs'
import {Party} from '../models/party.collection'
export const Parties = new MongoObservable.Collection<Party>('parties')