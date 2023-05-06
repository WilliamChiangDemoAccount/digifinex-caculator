import Card from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render', async () => {
        render(<Card testId={'test'} classes="test" />);
        expect(screen.getByTestId('test-card')).not.toBeNull();
        expect(screen.getByTestId('test-card').className).toContain('test');
    });

    it('Should show children', async () => {
        render(<Card testId={'test'}>test content</Card>);
        expect(screen.getByText('test content')).not.toBeNull();
    });

    it('Should show footer', async () => {
        render(<Card testId={'test'} footer={<div data-testid="tesetFooter">test footer</div>} />);
        expect(screen.getByTestId('tesetFooter')).not.toBeNull();
    });
});