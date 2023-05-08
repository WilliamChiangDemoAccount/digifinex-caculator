import Component from ".";
import { render, screen } from "@testing-library/react";

const onSkip = jest.fn(() => { });
const goTop = jest.fn(() => { });

describe('UI test', () => {
    it('Should render', async () => {
        render(<Component goTop={goTop} onSkip={onSkip} />
        ); expect(screen.getByTestId('TrustService')).not.toBeNull();
    });
});
describe('Feature test', () => { });