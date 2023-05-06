import Header from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render', async () => {
        render(<Header />);
        expect(screen.getByTestId('header')).not.toBeNull();
    });
});