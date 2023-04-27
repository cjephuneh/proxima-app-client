// import "@testing-library/jest-dom";
// import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
// import { useTheme } from "next-themes";
// import createMockRouter from "@/__test_utils__/mockRouter";
// import { RouterContext } from 'next/dist/shared/lib/router-context';
// import Index from "@/pages/auth/login";

// describe('Login Index', () => {
//     let router = createMockRouter()

//     test('renders without error', () => {
//         render(
//         <RouterContext.Provider value={router}>
//             <Index />
//         </RouterContext.Provider>
//         );

//         expect(screen.getByText('Welcome back')).toBeInTheDocument()
//     });

//     test('submits the form when emai//     test('renders without error', () => {
//         render(
//         <RouterContext.Provider value={router}>
//             <Index />
//         </RouterContext.Provider>
//         );

//         expect(screen.getByText('Welcome back')).toBeInTheDocument()
//     });l and password fields are filled and navigates to dashboard', () => {
//         render(
//             <RouterContext.Provider value={router}>
//                 <Index />
//             </RouterContext.Provider>
//         );

//         fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }})
//         fireEvent.change(screen.getByLabelText('password-input'), { target: { value: 'password' }})

//         fireEvent.click(screen.getByTestId('login-btn'))

//         expect(router.replace).toHaveBeenCalledWith('/dashboard');
//     })

//     test('does not submit the form when email and password fields are not filled', () => {
//         render(
//             <RouterContext.Provider value={router}>
//                 <Index />
//             </RouterContext.Provider>
//         );

//         fireEvent.change(screen.getByLabelText('email-input'), { target: { value: '' }})
//         fireEvent.change(screen.getByLabelText('password-input'), { target: { value: '' }})

//         console.log(screen.getByLabelText('email-input').value)
//         console.log(router)

//         fireEvent.click(screen.getByTestId('login-btn'))

//         expect(router.replace).toHaveBeenCalledTimes(0)
//     })
// })
// import mockRouter from 'next-router-mock';
// import Index from "@/pages/auth/login";
// import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

// import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

// jest.mock('next/router', () => require('next-router-mock'));

// describe('Login Index', () => {
//     test('does not submit the form when email and password fields are not filled', () => {
//         render(
//                 <Index />, { wrapper: MemoryRouterProvider }
//         );

//         fireEvent.change(screen.getByLabelText('email-input'), { target: { value: '' }})
//         fireEvent.change(screen.getByLabelText('password-input'), { target: { value: '' }})

//         // console.log(screen.getByLabelText('email-input').value)

//         fireEvent.click(screen.getByTestId('login-btn'))
//         // console.log(mockRouter.replace)

//         expect(mockRouter.replace).not.toHaveBeenCalled()
//     })
// })

import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Index from "@/pages/auth/login";

describe('Login Index', () => {

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
        expect(screen.getByText('Welcome back')).not.toBeNull()
    });

    it('should show validation message if email or password is not entered', () => {
        fireEvent.click(screen.getByTestId('login-btn'))

        expect(screen.getByText('Email is required')).not.toBeNull()
        expect(screen.getByText('Password is required')).not.toBeNull()
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
        fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }})
        fireEvent.change(screen.getByLabelText('password-input'), { target: { value: 'password' }})

        expect(screen.getByLabelText('email-input').value).toBe('email@example.com')
        expect(screen.getByLabelText('password-input').value).toBe('password')
    })

    test('submits the form when email and password fields are filled and navigates to dashboard', () => {
        fireEvent.change(screen.getByLabelText('email-input'), { target: { value: 'email@example.com' }})
        fireEvent.change(screen.getByLabelText('password-input'), { target: { value: 'password' }})

        fireEvent.click(screen.getByTestId('login-btn'))

        expect(router.replace).toHaveBeenCalledWith('/dashboard');
    })

    test('does not submit the form when email and password fields are not filled', () => {
        fireEvent.change(screen.getByLabelText('email-input'), { target: { value: '' }})
        fireEvent.change(screen.getByLabelText('password-input'), { target: { value: '' }})

        fireEvent.click(screen.getByTestId('login-btn'))

        expect(router.replace).not.toHaveBeenCalled()
    })

    test('navigates to forgot password page on click of "I forgot my password" btn', () => {
        fireEvent.click(screen.getByTestId('forgot-btn'))

        expect(router.push).toHaveBeenCalledWith('/auth/reset-password', expect.anything(), expect.anything());
    })
})