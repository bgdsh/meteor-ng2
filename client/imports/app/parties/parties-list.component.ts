import { Component } from '@angular/core';
import { Parties } from '../../../../both/collections/parties.collection'
import { Party } from '../../../../both/models/party.model'
import template from './parties-list.component.html';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'parties-list',
  template
})
export class PartiesListComponent {
  private parties: Observable<Party[]>
  constructor() {
    this.parties = Parties.find({}).zone();
  }
  removeParty(party:Party) :void {
    Parties.remove(party._id);
  }
}
