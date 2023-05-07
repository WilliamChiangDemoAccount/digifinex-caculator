import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from ".";
import { render, screen } from "@testing-library/react";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

describe('UI test', () => {
    it('Should render', async () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(screen.getByTestId('header')).not.toBeNull();
    });

    // it('Should render language dropdown', async () => {
    //     render(<Header />);
    //     expect(screen.getByTestId('header')).not.toBeNull();
    // });
});

// describe('Feature test', () => {
//     it('Should render', async () => {
//         render(<Header />);
//         expect(screen.getByTestId('header')).not.toBeNull();
//     });
// });