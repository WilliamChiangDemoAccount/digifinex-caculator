import Page from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render', async () => {
        render(<Page />);
        expect(screen.getByTestId('footer')).not.toBeNull();
    });
});

describe('Feature test', () => { });