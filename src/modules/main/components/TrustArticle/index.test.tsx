import { TrustArticle } from "@shared/enums/trust.enum";
import Component from ".";
import { render, screen } from "@testing-library/react";

describe('UI test', () => {
    it('Should render', async () => {
        render(<Component activeArticle={TrustArticle.OptionScene} />
        ); expect(screen.getByTestId('TrustArticle')).not.toBeNull();
    });
});

describe('Feature test', () => { });