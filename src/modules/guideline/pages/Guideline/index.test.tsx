import { BrowserRouter } from "react-router-dom";
import Page from ".";
import { render, screen, waitFor } from "@testing-library/react";

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

describe('Feature test', () => {
    it('Should Switch Theme', async () => {
        render(
            <BrowserRouter>
                <Page />
            </BrowserRouter>
        );
        const btn = screen.getByTestId('theme-switch');
        expect(btn).not.toBeNull();
        await waitFor(() => btn.click());
    });
});