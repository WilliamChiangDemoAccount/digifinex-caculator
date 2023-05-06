import { Status } from "@shared/enums/common.enum";
import Toast from ".";
import { render, screen, waitFor } from "@testing-library/react";

const Component = (onClose?: () => void) => <Toast
    testId="test-toast"
    message="test"
    status={Status.Success}
    timeout={3}
    onClose={onClose ?? (() => { })}
    handleOnClose={onClose ?? (() => { })}
/>

describe('UI test', () => {
    it('Should render', async () => {
        render(Component());
        expect(screen.getByTestId('test-toast')).not.toBeNull();
    });
});

describe('Feature test', () => {
    const onClose = jest.fn(() => { });
    it('Should trigger close handler after timeout', async () => {
        render(Component(onClose));
        await waitFor(() => new Promise((r) => setTimeout(r, 5000)), {timeout: 6000});
        expect(onClose).toBeCalled();
    }, 6000);
});