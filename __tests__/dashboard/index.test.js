import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Index from '@/pages/dashboard/index'

describe('Dashboard Index', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <Provider store={store}>
                    <Index />
                </Provider>
            </RouterContext.Provider>
        );
    })

    test('it renders correctly', () => {
        expect(screen.getByText('Latest Issues')).toBeDefined()
    })

    test('it renders a sidebar', () => {
        expect(screen.getByTestId('side-nav')).toBeDefined()
    })

    test('it renders an overlay of issues when search input is activated', () => {
        fireEvent.focus(screen.getByPlaceholderText('Search'))

        expect(screen.getByTestId('issues-window')).toBeDefined()
    })

    test('it closes the overlay of issues when close button is clicked', () => {
        fireEvent.focus(screen.getByPlaceholderText('Search'))

        fireEvent.click(screen.getByTestId('close-btn'))

        expect(screen.queryByTestId('issues-window')).toBeNull()
    })
})