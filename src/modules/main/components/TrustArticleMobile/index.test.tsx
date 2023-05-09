import { TrustArticle } from "@shared/enums/trust.enum";
import Component from ".";
import { render, screen } from "@testing-library/react";
describe('UI test', () => {
    it('Should render', async () => {
        render(<Component articles={[TrustArticle.OptionScene, TrustArticle.OptionTarget, TrustArticle.OptionUsage]} />
        ); expect(screen.getByTestId('TrustArticleMobile')).not.toBeNull();
    });
});
describe('Feature test', () => { });