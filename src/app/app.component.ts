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
      <section class="coverage-info">
    <div class="coverage-table mt-4">
        <h2 class="gray-box">Coverage Information</h2>
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Coverage Type
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Limit
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deductible
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dwelling
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $250,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $1,000
                    </td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Personal Property
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $100,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $500
                    </td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Liability
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $300,000
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $0
                    </td>
                </tr>
            </tbody>
        </table>
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
  constructor(private datePipe: DatePipe) {
    const fixedStartDate = new Date('2024-12-06T00:00:00-06:00');
    const endDate = new Date(fixedStartDate);
    endDate.setMonth(fixedStartDate.getMonth() + 6);

    this.startDate = this.datePipe.transform(fixedStartDate, 'MMMM d, y')!;
    this.endDate = this.datePipe.transform(endDate, 'MMMM d, y')!;
  }
}
