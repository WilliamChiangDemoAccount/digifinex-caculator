import Loading from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render', async () => {
        render(<Loading />);
        expect(screen.getByTestId('loading')).not.toBeNull();
    });
});