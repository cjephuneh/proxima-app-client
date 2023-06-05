import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Username from '@/pages/auth/onboarding/username'

describe('Username', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <Username />
            </RouterContext.Provider>
        );
    })

    test('renders without any error', () => {
        expect(screen.getByText('How should we call you?')).toBeDefined()
    })

    test('does not navigate to admin-details page when username is empty', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('username-input'), { target: { value: '' }})

            fireEvent.click(screen.getByTestId('next-btn'))
        })

        waitFor(() => {
            expect(router.push).not.toHaveBeenCalled()
        })
    })

    test('navigates to admin-details page when username is filled out', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('username-input'), { target: { value: 'username' }})

            fireEvent.click(screen.getByTestId('next-btn'))
        })

        waitFor(() => {
            expect(router.push).toHaveBeenCalledWith('admin-details')
        })
    })
})