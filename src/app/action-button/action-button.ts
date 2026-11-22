import { Component, input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  templateUrl: './action-button.html',
  styleUrl: './action-button.css'
})
export class ActionButton {

  // Appearance
  backgroundColor = input('#059669');
  textColor = input('#ffffff');
  borderColor = input('transparent');

  // Hover appearance
  hoverBackground = input('#34d399');
  hoverTextColor = input('#020617');
  hoverBorderColor = input('transparent');

  // Text:
  fontSize = input('14px');
  fontWeight = input('600');

  // Behaviour
  href = input<string | null>(null);
  type = input<'button' | 'submit' | 'reset'>('button');
}