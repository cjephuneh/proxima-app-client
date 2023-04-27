import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import OrgName from "@/pages/auth/onboarding/orgname";

describe('Orgname', () => {
    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <OrgName />
            </RouterContext.Provider>
        );
    })

    test('it renders without crashing', () => {
        expect(screen.getByText('What is your organization name?')).toBeDefined()
    })

    test('does not navigate to details screen if orgname is empty', () => {
        fireEvent.change(screen.getByLabelText('orgname-input'), { target: { value: '' }})

        fireEvent.click(screen.getByTestId('proceed-btn'))

        expect(router.push).not.toBeCalled()
    })

    test('navigates to details screen if orgname is not empty', () => {
        fireEvent.change(screen.getByLabelText('orgname-input'), { target: { value: 'My Org' }})

        fireEvent.click(screen.getByTestId('proceed-btn'))

        expect(router.push).toBeCalledWith('details')
    })
})