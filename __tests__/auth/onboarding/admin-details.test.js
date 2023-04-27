import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import AdminDetails from '@/pages/auth/onboarding/admin-details'

describe('AdminDetails', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <AdminDetails />
            </RouterContext.Provider>
        );
    })

    test('renders without errors', () => {
        expect(screen.getByText('Let us know more about you')).toBeDefined()
    })

    test('does not navigate to invite-members page with empty fields', () => {
        fireEvent.click(screen.getByTestId('next-btn'))

        expect(router.push).not.toHaveBeenCalled()
    })

    test('navigates to invite-members page with filled out fields', () => {
        fireEvent.change(screen.getByLabelText('first-name-input'), { target: { value: 'first' }})
        fireEvent.change(screen.getByLabelText('last-name-input'), { target: { value: 'last' }})
        fireEvent.change(screen.getByLabelText('middle-name-input'), { target: { value: 'middle' }})
        fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }})
        fireEvent.change(screen.getByLabelText('gender-input'), { target: { value: 'male' }})
        
        fireEvent.click(screen.getByTestId('next-btn'))

        expect(router.push).toHaveBeenCalledWith('invite-members')
    })
})