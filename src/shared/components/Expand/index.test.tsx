import Component from ".";
import { render, screen } from "@testing-library/react";
describe('UI test', () => {
    it('Should render', async () => {
        render(<Component title="test expand" />
        ); expect(screen.getByTestId('Expand')).not.toBeNull();
    });
});
describe('Feature test', () => { });