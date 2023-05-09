import Component from ".";
import { render, screen } from "@testing-library/react";

const onSkip = jest.fn(() => { });

describe('UI test', () => {
    it('Should render', async () => {
        render(<Component onSkip={onSkip} />
        ); expect(screen.getByTestId('TrustArticleListMobile')).not.toBeNull();
    });
});

describe('Feature test', () => { });