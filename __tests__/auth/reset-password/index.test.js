import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Index from '@/pages/auth/reset-password/index'

describe('Reset Password Index', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <Index />
            </RouterContext.Provider>
        );
    })

    test('renders without error', () => {
        expect(screen.getByText('Did you forget your account credentials?')).toBeDefined()
    })

    test('should not navigate to new password screen if email field is empty', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('email-input'), { target: { value: '' }})

            fireEvent.click(screen.getByTestId('request-btn'))
        })

        waitFor(() => {
            expect(router.push).not.toHaveBeenCalled()
        })
    })

    test('should navigate to new password screen if email field is filled out', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }})

            fireEvent.click(screen.getByTestId('request-btn'))
        })

        waitFor(() => {
            expect(router.push).toHaveBeenCalledWith('reset-password/new-password')
        })
    })
})