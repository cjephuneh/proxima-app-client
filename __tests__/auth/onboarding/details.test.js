import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Details from '@/pages/auth/onboarding/details'

describe('Details', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        render(
            <RouterContext.Provider value={router}>
                <Details />
            </RouterContext.Provider>
        );
    })

    test('it renders without an error', () => {
        expect(screen.getByText('Let’s know more about your Business')).toBeDefined()
    })

    test('it does not navigate to username page when the inputs are empty', () => {
        act(() => {
            fireEvent.click(screen.getByTestId('next-btn'))
        })
        
        waitFor(() => {
            expect(router.push).not.toHaveBeenCalled()
        })
    })

    test('navigates to username page when all fields are filled out', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('name-input'), { target: { value: 'My Company' }})
            fireEvent.change(screen.getByLabelText('regNo-input'), { target: { value: '12345' }})
            fireEvent.change(screen.getByLabelText('business-doc-option-dropdown'), { target: { value: 'business registration document' }})
            fireEvent.change(screen.getByLabelText('category-input'), { target: { value: 'cat' }})
            fireEvent.change(screen.getByLabelText('subCategory-input'), { target: { value: 'subcat' }})

            // file upload
            const file = new File(['pdffile'], 'file.pdf', { type: 'application/pdf'})
            fireEvent.change(screen.getByLabelText('business-doc-upload-input'), { target: { files: [file] }})

            fireEvent.click(screen.getByTestId('next-btn'))
        })

        waitFor(() => {
            expect(router.push).toHaveBeenCalledWith('username')
        })
    })
})