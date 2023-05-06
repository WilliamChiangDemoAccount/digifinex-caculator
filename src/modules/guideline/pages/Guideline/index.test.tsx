import { BrowserRouter } from "react-router-dom";
import Page from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render Page', async () => {
        render(
            <BrowserRouter>
                <Page />
            </BrowserRouter>
        );
        expect(screen.getByTestId('Guideline')).not.toBeNull();
    });
});