import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './app.header';
import { AddressBreakPipe, PartyBreakPipe } from '../util/util.pipe';

interface Contact {
  party: string;
  name?: string;
  address: string;
}

interface Coverage {
  id: number;
  type: string;
  limit: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CommonModule, AddressBreakPipe, PartyBreakPipe],
  template: `
    <main class="main flex flex-col mt-6 ml-8 mr-8 justify-center">
      <app-header [startDate]="startDate"></app-header>
      <hr />
      <section class="info font-bold text-sm">
        <div class="flex justify-between">
          <div class="policy-info flex flex-col gap-2">
            <h2 class="gray-box">Policy Type: HO-3 - Standard Special Form</h2>
            <div
              *ngFor="let contact of contacts | slice : 0 : 2"
              class="prop-info flex"
            >
              <p
                class="contact-party"
                [innerHTML]="contact.party | partyBreak"
              ></p>
              <div class="flex flex-col">
                <p class="contact-name" *ngIf="contact.name">
                  {{ contact.name }}
                </p>
                <p [innerHTML]="contact.address | addressBreak"></p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-around">
            <div class="flex" *ngFor="let contact of contacts | slice : 2 : 4">
              <p
                class="contact-party"
                [innerHTML]="contact.party | partyBreak"
              ></p>
              <div class="flex flex-col">
                <p>{{ contact.name }}</p>
                <p [innerHTML]="contact.address | addressBreak">
                  {{ contact.address }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="support-info flex justify-between ">
          <div class="insurance-agreement flex flex-col w-[20rem] gap-2">
            <h2 class="gray-box ">INSURANCE AGREEMENT</h2>
            <p class="text-center">
              We will provide the insurance described in this policy in return
              for the premium and compliance with all applicable provisions
            </p>
          </div>
          <div class="claim flex flex-col w-[23rem] gap-2">
            <h2 class="gray-box">REPORTING CLAIMS</h2>
            <p class="text-center">
              Shelter Insurance Agency Customer Care Center<br />+1 (800)
              743-5837
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section
        class="policy-period flex items-center text-sm justify-around font-bold"
      >
        <p>Policy Period</p>
        <div class="grid grid-cols-2 gap-1">
          <p>Effective Date:</p>
          <p>{{ startDate }}</p>
          <p>Expiration Date:</p>
          <p>{{ endDate }}</p>
        </div>
        <p>Policy Period Begins: 12:01 a.m. Standard Time</p>
      </section>
      <hr />
      <section class="coverage-info flex justify-between items-center">
        <div class="coverage-table w-auto">
          <table
            class="coverage-data border-collapse border-[2px] border-black"
          >
            <tbody>
              <tr>
                <td class="border p-2">Section 1 - Coverages</td>
                <td class="border p-2">Limit of Coverage</td>
              </tr>
              <tr *ngFor="let coverage of coverages | slice : 0 : 4">
                <td class="pl-2 border p-2">{{ coverage.type }}</td>
                <td class="border p-2">{{ coverage.limit }}</td>
              </tr>
              <tr>
                <td class="border p-2">Section 2 - Coverages</td>
                <td class="border p-2">Limit of Coverage</td>
              </tr>
              <tr
                *ngFor="
                  let coverage of coverages | slice : 4 : coverages.length
                "
              >
                <td class="pl-2">{{ coverage.type }}</td>
                <td>{{ coverage.limit }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="deductible-info w-[12.5rem] border-[2px] border-black p-[0.625rem] font-bold flex flex-col justify-between items-center gap-[0.625rem]"
        >
          <p class="underline ">Deductible = $1000</p>
          <p>
            In case of loss under Section 1 and 2, we cover only the amount of
            loss in excess of the deductible amount.
          </p>
        </div>
      </section>
      <hr />
      <section class="discounts flex justify-between font-bold">
        <ul class="discount-list text-sm">
          <li
            *ngFor="
              let discount of discounts | slice : 0 : discounts.length / 2;
              let i = index
            "
          >
            <div class="flex">
              <span class="w-96 whitespace-nowrap">{{
                getDiscountsPair(i).first
              }}</span>
              <span>{{ getDiscountsPair(i).second }}</span>
            </div>
          </li>
        </ul>
        <div class="premium flex items-end">
          <div class="gray-box whitespace-nowrap">
            <span class="text-xs pl-2 pr-2">Policy Premium = $856.15</span>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
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
      party: "Insurance company's contact information",
      name: 'Shelter Mutual Insurance Co.',
      address: '789 Oak St, Chicago, IL',
    },
    {
      party: "AGENT\\AGENCY'S contact information",
      name: 'Tracie Napier',
      address: '7193 Swinnea Rd Ste B, Southaven, MS 38671',
    },
  ];

  coverages: Coverage[] = [
    {
      id: 1,
      type: 'Dwelling',
      limit: '$450,000',
    },
    {
      id: 2,
      type: 'Other Structures',
      limit: '$45,000',
    },
    {
      id: 3,
      type: 'Personal Property',
      limit: '$100,000',
    },
    {
      id: 4,
      type: 'Loss of Use',
      limit: '$90,000',
    },
    {
      id: 5,
      type: 'Liability',
      limit: '$300,000 Each Occurrence',
    },
    {
      id: 6,
      type: 'Medical Payments',
      limit: '$1,000 Each Person',
    },
  ];

  discounts: string[] = [
    'Construction: Single Family Residence/Townhouse',
    'Year Built: 1960',
    'Not more than 100 feet from the hydrant',
    'Not more than 5 miles from the fire department',
    'No prior losses in the last 3 years',
    'Occupancy Type: Primary residence',
    'Forms and Endorsements',
    'Safe Driver Discount',
    'loyalty customer',
    'Bundle Package',
    'Sprinkler System',
    'Security System',
    'Electrical System',
    'Non-Smoker Discount',
  ];

  constructor(private datePipe: DatePipe) {
    const fixedStartDate = new Date('2024-12-06T00:00:00-06:00');
    const endDate = new Date(fixedStartDate);
    endDate.setMonth(fixedStartDate.getMonth() + 6);

    this.startDate = this.datePipe.transform(fixedStartDate, 'MMMM d, y')!;
    this.endDate = this.datePipe.transform(endDate, 'MMMM d, y')!;
  }

  getDiscountsPair(i: number): { first: string; second: string } {
    const halfLength = Math.floor(this.discounts.length / 2);
    const firstIndex = i;
    const secondIndex = i + halfLength;

    return {
      first: this.discounts[firstIndex],
      second: this.discounts[secondIndex] || 'No second item', // Handle case when i + halfLength exceeds the array length
    };
  }
}
