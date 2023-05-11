import { fireEvent, render, screen, act, waitFor } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Index from "@/pages/auth/login/index";

describe('Login Index', () => {

    let router = createMockRouter()

    beforeEach(() => {
        router = createMockRouter()
        act(() => {
            render(
                <RouterContext.Provider value={router}>
                    <Index />
                </RouterContext.Provider>
            );
        })
    })

    test('renders without error', () => {
        expect(screen.getByText('Welcome back')).not.toBeNull()
    });

    it('should show validation message if email or password is not entered', () => {
        act(() => {
            fireEvent.click(screen.getByTestId('login-btn'))
        })

        waitFor(() => {
            expect(screen.getByText('Email is required')).toBeDefined()
            expect(screen.getByText('Password is required')).toBeDefined()
        })
    })

    // NOTE: reworking required. the tests seem to ignore tailwind classes and just show the element...
    // it('should not show validation message if email and password is entered', () => {
    //     fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }})
    //     fireEvent.change(screen.getByLabelText('password-input'), { target: { value: 'password' }})

    //     fireEvent.click(screen.getByTestId('login-btn'))

    //     expect(screen.getByText('Email is required')).toBeNull()
    //     expect(screen.getByText('Password is required')).toBeNull()
    // })

    test('updates email and password inputs value on change', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }})
            fireEvent.change(screen.getByLabelText('password-input'), { target: { value: 'password' }})
        })

        waitFor(() => {
            expect(screen.getByLabelText('email-input').value).toBe('email@example.com')
            expect(screen.getByLabelText('password-input').value).toBe('password')
        })
    })


    test('submits the form when email and password fields are filled and navigates to dashboard', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }});
            fireEvent.change(screen.getByLabelText('password-input'), { target: { value: 'password' }});
            fireEvent.click(screen.getByTestId('login-btn'));
        });
        waitFor(() => {
            expect(router.replace).toHaveBeenCalledWith('/dashboard');
        });
    });


    test('does not submit the form when email and password fields are not filled', () => {
        act(() => {
            fireEvent.change(screen.getByLabelText('email-input'), { target: { value: '' }})
            fireEvent.change(screen.getByLabelText('password-input'), { target: { value: '' }})

            fireEvent.click(screen.getByTestId('login-btn'))
        })
        waitFor(() => {
            expect(router.replace).not.toHaveBeenCalled()
        });
    })

    test('navigates to forgot password page on click of "I forgot my password" btn', () => {
        act(() => {
            fireEvent.click(screen.getByTestId('forgot-btn'))
        })

        waitFor(() => {
            expect(router.push).toHaveBeenCalledWith('/auth/reset-password', expect.anything(), expect.anything());
        });
    })
})