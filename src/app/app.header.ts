import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <section class="header flex justify-between items-center">
      <div class="logo flex flex-col items-center">
        <img src="./images/logo.svg" alt="logo" class="mb-1" />
        <p class="text-base font-bold text-gray-800 uppercase">
          shelter insurance
        </p>
      </div>
      <div class="declaration flex flex-col gap-[0.625rem]">
        <p class="text-base p-1! bg-[#d4dee6] border border-black w-fit ">
          Policy Number: 6M2644W1945N
        </p>
        <h2 class="text-2xl font-bold text-gray-800!">
          House & Home Policy Declarations
        </h2>
        <p class="text-lg text-gray-600">
          Your policy effective date is {{ startDate }}
        </p>
      </div>
    </section>
  `,
})
export class HeaderComponent {
  @Input() startDate!: string; // Receive startDate dynamically
}
