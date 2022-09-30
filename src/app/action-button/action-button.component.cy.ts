import {ActionButtonComponent, ActionButtonType} from './action-button.component'

describe('ActionButton', () => {
  it('should emit', () => {
    cy.mount(ActionButtonComponent, {
      imports: [ActionButtonComponent],
      autoSpyOutputs: true
    })

    cy.get('[data-cy=save]').click()
    cy.get('@actionClickSpy').should('have.been.calledOnceWith', ActionButtonType.Save)
  })
})
