import Modal from ".";
import { render, screen } from "@testing-library/react";

const onClose = jest.fn(() => { });
const onPrimaryClick = jest.fn(() => { });
const onSecondaryClick = jest.fn(() => { });

const Component = (classes?: string) => <Modal
    testId="test-modal"
    title="test"
    content="only for unit test"
    onClose={onClose}
    handleOnClose={onClose}
    primaryBtn={{ children: 'submit', classes, onClick: onPrimaryClick }}
    secondaryBtn={{ children: 'cancel', classes, onClick: onSecondaryClick }}
/>

describe('UI test', () => {
    it('Should render', async () => {
        render(Component());
        expect(screen.getByTestId('test-modal')).not.toBeNull();
    });

    it('Should render button', async () => {
        render(Component('mt-3'));
        expect(screen.getByTestId('btn-test-modal-primary')).not.toBeNull();
        expect(screen.getByTestId('btn-test-modal-secondary')).not.toBeNull();
        expect(screen.getByTestId('btn-test-modal-secondary').className).toContain('mt-3');
    });
});

describe('Feature test', () => {
    it('Should trigger button click event', async () => {
        render(Component());
        expect(screen.getByTestId('btn-test-modal-primary')).not.toBeNull();
        screen.getByTestId('btn-test-modal-primary').click();
        expect(onPrimaryClick).toBeCalled();
        expect(onClose).toBeCalled();
        expect(screen.getByTestId('btn-test-modal-secondary')).not.toBeNull();
        screen.getByTestId('btn-test-modal-secondary').click();
        expect(onSecondaryClick).toBeCalled();
        expect(onClose).toBeCalled();
    });
});