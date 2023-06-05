import { act, fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import NewPassword from '@/pages/auth/reset-password/new-password'

describe('NewPassword', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <NewPassword />
            </RouterContext.Provider>
        );
    })

    test('should render the component without errors', () => {
        expect(screen.getByText('Enter new Password')).toBeDefined()
    })

    test('should not navigate to dashboard the new and confirm password fields are empty', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('new-password'), { target: { value: '' }})
            fireEvent.change(screen.getByLabelText('confirm-password'), { target: { value: '' }})

            fireEvent.click(screen.getByTestId('submit-btn'))
        })


        waitFor(() => {
            expect(router.replace).not.toHaveBeenCalled()
        })
    })

    test('should not navigate to dashboard the new and confirm password fields values do not match', () => {
        fireEvent.change(screen.getByLabelText('new-password'), { target: { value: 'pass' }})
        fireEvent.change(screen.getByLabelText('confirm-password'), { target: { value: 'pass123' }})

        fireEvent.click(screen.getByTestId('submit-btn'))


        expect(router.replace).not.toHaveBeenCalled()
    })

    test('should navigate to dashboard the new and confirm password fields values match', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('new-password'), { target: { value: 'pass' }})
            fireEvent.change(screen.getByLabelText('confirm-password'), { target: { value: 'pass' }})

            fireEvent.click(screen.getByTestId('submit-btn'))
        })


        waitFor(() => {
            expect(router.replace).toHaveBeenCalledWith('/dashboard')
        })
    })
})