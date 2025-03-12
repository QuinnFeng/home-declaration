import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './app.header';

interface Contact {
  party: string;
  name?: string;
  address: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  template: `
    <main class="main flex flex-col mt-6 ml-8 mr-8">
      <app-header [startDate]="startDate"></app-header>
      <hr />
      <section class="info">
        <div *ngFor="let contact of contacts | slice : 0 : 2" class="prop-info">
          <p>{{ contact.party }}</p>
          <div>
            <p *ngIf="contact.name">{{ contact.name }}</p>
            <p>{{ contact.address }}</p>
          </div>
        </div>
        <div class="comp-info"></div>
        <div class="support-info"></div>
      </section>
      <hr />
    </main>
  `,
  styleUrl: './app.component.css',
  providers: [DatePipe],
})
export class AppComponent {
  title = 'home-declaration';
  startDate: string;
  endDate: string;
  contacts: Contact[] = [
    {
      party: 'policy holder name insured',
      name: 'Beihong Feng',
      address: '5720 Broadway Dr W, Southaven, MS 38672',
    },
    {
      party: 'property address',
      address: '5720 Broadway Dr W, Southaven, MS 38672',
    },
    {
      party: "Insurance company's",
      name: 'Shelter Mutual Insurance Co.',
      address: '789 Oak St, Chicago, IL',
    },
    {
      party: "AGENTAGENT'S",
      name: 'Tracie Napier',
      address: '7193 Swinnea Rd Ste B, Southaven, MS 38671',
    },
  ];
  constructor(private datePipe: DatePipe) {
    const fixedStartDate = new Date('2024-12-06T00:00:00-06:00');
    const endDate = new Date(fixedStartDate);
    endDate.setMonth(fixedStartDate.getMonth() + 6);

    this.startDate = this.datePipe.transform(fixedStartDate, 'MMMM d, y')!;
    this.endDate = this.datePipe.transform(endDate, 'MMMM d, y')!;
  }
}
