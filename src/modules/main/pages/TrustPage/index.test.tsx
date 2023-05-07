import Page from ".";
import { render, screen } from "@testing-library/react";
describe('UI test', () => {
    it('Should render', async () => {
        render(<Page />
        ); expect(screen.getByTestId('TrustPage')).not.toBeNull();
    });
});
describe('Feature test', () => { });