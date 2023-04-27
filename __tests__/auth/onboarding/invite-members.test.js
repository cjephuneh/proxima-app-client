import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import InviteMembers from '@/pages/auth/onboarding/invite-members'

describe('InviteMembers', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <InviteMembers />
            </RouterContext.Provider>
        );
    })

    test('it renders without errors', () => {
        expect(screen.getByText('Almost there..')).toBeDefined()
    })

    test('can navigate to dashboard without inviting members', () => {
        // fireEvent.click(screen.getByTestId('done-btn'))
        fireEvent.click(screen.getByText('Skip this for now'))

        expect(router.push).toBeCalledWith('/dashboard', expect.anything(), expect.anything())
    })
})