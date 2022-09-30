import {Component, EventEmitter, Output} from '@angular/core'

export enum ActionButtonType {
  Save
}

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  standalone: true
})
export class ActionButtonComponent {
  @Output() actionClick = new EventEmitter<ActionButtonType>()

  save(): void {
    this.actionClick.next(ActionButtonType.Save)
  }
}
