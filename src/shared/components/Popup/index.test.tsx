import Popup from ".";
import { render, screen } from "@testing-library/react";

const Component = (onClose?: () => void) => <Popup
    testId="test-popup"
    title="test"
    content="only for unit test"
    btnText="close"
    onClose={onClose ?? (() => { })}
    handleOnClose={onClose ?? (() => { })}
/>

describe('UI test', () => {
    it('Should render', async () => {
        render(Component());
        expect(screen.getByTestId('test-popup')).not.toBeNull();
    });
});

describe('Feature test', () => {
    const onClose = jest.fn(() => { });
    it('Should trigger close handler', async () => {
        render(Component(onClose));
        expect(screen.getByTestId('btn-test-popup-close')).not.toBeNull();
        screen.getByTestId('btn-test-popup-close').click();
        expect(onClose).toBeCalled();
    });
});