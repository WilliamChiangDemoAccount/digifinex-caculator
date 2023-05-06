import Component from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render', async () => {
        render(<Component testId="test" classes="test" onClick={() => { }} />);
        expect(screen.getByTestId('btn-test')).not.toBeNull();
        expect(screen.getByTestId('btn-test').className).toContain('test');
    });

    it('Should render primary theme', async () => {
        render(<Component testId="test" onClick={() => { }} isPrimary />);
        expect(screen.getByTestId('btn-test').className).toContain('bg-orange-primary');
    });
});

describe('Feature test', () => {
    const handleOnClick = jest.fn(() => { });
    it('Should trigger close handler', async () => {
        render(<Component testId="test" onClick={handleOnClick} />);
        screen.getByTestId('btn-test').click();
        expect(handleOnClick).toBeCalled();
    });
});