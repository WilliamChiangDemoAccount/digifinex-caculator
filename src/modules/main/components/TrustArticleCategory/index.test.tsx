import { TrustArticle } from "@shared/enums/trust.enum";
import Category from ".";
import { render, screen } from "@testing-library/react";

const onExpand = jest.fn();

const Component = () => <Category
    testId="test-category"
    label="test"
    onExpand={onExpand}
    isExpand={false}
    articles={[]}
    activeArticle={TrustArticle.OptionScene}
/>

describe('UI test', () => {
    it('Should render', async () => {
        render(<Component />
        ); expect(screen.getByTestId('TrustArticleCategory')).not.toBeNull();
    });
});

describe('Feature test', () => { });