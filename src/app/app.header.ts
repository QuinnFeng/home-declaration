import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <section class="header flex justify-between items-center">
      <div class="logo flex flex-col items-center space-x-2">
        <img src="./images/logo.svg" alt="logo" class="mb-1" />
        <p class="text-sm font-semibold text-gray-800 uppercase">
          shelter insurance
        </p>
      </div>
      <div class="declaration flex flex-col space-around">
        <h2 class="text-2xl font-bold text-gray-800 mb-2!">
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
