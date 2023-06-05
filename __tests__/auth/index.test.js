import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Index from '@/pages/index';
import { createMockRouter } from "@/__test_utils__/mockRouter";
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('Index', () => {
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
    expect(screen.getByTestId('first-visit')).toBeInTheDocument()
  });

  test('displays "Yes" and "No" buttons', () => {
    expect(screen.getByText('Yes, I have been here before')).toBeInTheDocument();
    expect(screen.getByText('No, this is my first time')).toBeInTheDocument();
  });

  test('navigates to login page when "Yes" button is clicked', () => {

    fireEvent.click(screen.getByText('Yes, I have been here before'))
    expect(router.push).toHaveBeenCalledWith('/auth/login', expect.anything(), expect.anything());
  })

  test('navigates to orgname page when "No" button is clicked', () => {
    fireEvent.click(screen.getByText('No, this is my first time'))
    expect(router.push).toHaveBeenCalledWith('/auth/onboarding/orgname', expect.anything(), expect.anything());
  })
});

