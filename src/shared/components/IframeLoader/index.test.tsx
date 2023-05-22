import Component from ".";
import { render, screen } from "@testing-library/react";
describe('UI test', () => {
    it('Should render', async () => {
        render(<Component htmlFile="Privacy Policy" />
        ); expect(screen.getByTestId('IframeLoader')).not.toBeNull();
    });
});
describe('Feature test', () => { });