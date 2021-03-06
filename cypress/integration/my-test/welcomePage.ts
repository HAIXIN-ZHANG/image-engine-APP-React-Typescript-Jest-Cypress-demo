/// <reference types="Cypress" />
import { baseUrl } from '../../../src/constants/index'

describe('Welcome Page Test Suite', () => {
	it('My Test case', () => {
		cy.visit(baseUrl)

		//radio buttons
		cy.get('[data-test="min-size-radio"]').check().should('be.checked')
		cy.get('[data-test="mid-size-radio"]').check().should('be.checked')
		cy.get('[data-test="large-size-radio"]').check().should('be.checked')
		//confirm buttons and url
		cy.get('[data-test="confirm-button"]').click()
		cy.url().should('include', '/colour-board/1024')
	})
})
