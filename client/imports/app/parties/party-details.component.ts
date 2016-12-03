import { Component, OnInit, OnDestroy } from '@angular/core';
import template from './party-details.component.html'
import { Subscription } from 'rxjs/Subscription'
import { ActivatedRoute } from '@angular/router'
import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'party-details',
  template
})
export class PartyDetailsComponent implements OnInit, OnDestroy {
  partyId: string
  paramsSub: Subscription
  party: Party
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramsSub = this.route.params
      .map(params => params['partyId'])
      .subscribe(partyId => {
        this.partyId = partyId
        this.party = Parties.findOne(this.partyId);
      });
  }

  saveParty(): void {
    Parties.update(this.party._id,{
      $set: {
        name: this.party.name,
        description: this.party.description,
        location: this.party.location
      }
    })
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}