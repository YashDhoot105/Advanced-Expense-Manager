import { CommonModule } from '@angular/common';
import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss'
})
export class CustomCardComponent { @Input() bgColor: string = 'bg-white';
  @Input() textColor: string = 'text-black';
  @Input() fontSize: string = 'text-base';
  @Input() fontWeight: string = 'font-normal';
  @Input() fontFamily: string = 'font-sans';
  @Input() padding: string = 'p-4';
  @Input() borderRadius: string = 'rounded-lg';
  @Input() shadow: string = 'shadow-md';
  @Input() width: string = 'w-full';
  @Input() height: string = 'h-auto';
  @Input() border: string = 'border';
  @Input() borderColor: string = 'border-gray-300';
  @Input() hoverEffect: string = 'hover:shadow-lg hover:scale-105 transition-all duration-300';
  @Input() customClass: string = '';

  // Optional content and button
  @Input() title?: string;
  @Input() content?: string;
  @Input() showButton: boolean = false;
  @Input() buttonText: string = 'Click';
  @Input() buttonClass: string = 'bg-blue-500 text-white px-4 py-2 rounded mt-4';
}