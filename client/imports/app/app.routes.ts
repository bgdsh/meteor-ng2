import { Route } from '@angular/router'
import { PartiesListComponent } from './parties/parties-list.component'
import { PartyDetailsComponent } from './parties/party-details.component'
import { PartiesFormComponent } from './parties/parties-form.component'
export const routes: Route[] = [
  { path: '', component: PartiesListComponent },
  { path: 'party/:partyId', component: PartyDetailsComponent },
  { path: 'new', component: PartiesFormComponent }
];