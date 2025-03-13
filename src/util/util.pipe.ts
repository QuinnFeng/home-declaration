import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressBreak',
  standalone: true, // This makes it usable without needing a module
})
export class AddressBreakPipe implements PipeTransform {
  transform(address: string): string {
    if (!address) return ''; // Handle empty case

    const parts = address.split(','); // Split at the first comma
    return parts.length > 1
      ? `${parts[0]}<br>${parts.slice(1).join(', ')}`
      : address;
  }
}

@Pipe({
  name: 'partyBreak',
  standalone: true, // Also standalone
})
export class PartyBreakPipe implements PipeTransform {
  transform(party: string): string {
    if (!party) return ''; // Handle empty case

    const parts = party.split(' '); // Split at the first comma
    if (parts[0].length > 13) {
      return `${parts[0]}<br>${parts.slice(1).join(' ')}`;
    }
    return parts.length > 2
      ? `${parts[0]} ${parts[1]}<br>${parts.slice(2).join(' ')}`
      : party;
  }
}
