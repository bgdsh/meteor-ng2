import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { ActivatedRoute } from '@angular/router'
import { Meteor } from 'meteor/meteor';
import { CanActivate } from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';
import 'rxjs/add/operator/map';

import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';
import template from './party-details.component.html'


@Component({
  selector: 'party-details',
  template
})
export class PartyDetailsComponent implements OnInit, OnDestroy, CanActivate {
  partyId: string
  paramsSub: Subscription
  partySub: Subscription
  party: Party
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramsSub = this.route.params
      .map(params => params['partyId'])
      .subscribe(partyId => {
        this.partyId = partyId
        if (this.partySub) {
          this.partySub.unsubscribe();
        }
        this.partySub = MeteorObservable
          .subscribe('party', this.partyId).subscribe(() => {
            this.party = Parties.findOne(this.partyId);
          });
      });
  }

  canActivate(): boolean {
    const party = Parties.findOne(this.partyId);
    return (party && party.owner == Meteor.userId());
  }

  saveParty(): void {
    if (!Meteor.userId()) {
      alert('Please login to edit the party detail');
      return;
    }
    Parties.update(this.party._id, {
      $set: {
        name: this.party.name,
        description: this.party.description,
        location: this.party.location
      }
    })
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.partySub.unsubscribe();
  }
}