import ContentLayout from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render', async () => {
        render(<ContentLayout testId={'test'} classes="test" />);
        expect(screen.getByTestId('test')).not.toBeNull();
        expect(screen.getByTestId('test').className).toContain('test');
    });

    it('Should render Page Content', async () => {
        render(<ContentLayout testId={'test'}>test page</ContentLayout>);
        expect(screen.getByText('test page')).not.toBeNull();
    });
});