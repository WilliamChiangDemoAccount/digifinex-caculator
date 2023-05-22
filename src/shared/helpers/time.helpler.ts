import { Language } from "@shared/enums/common.enum";

export const formatLocaleDateString = (language: string, dateString: string): string => {
    const date = new Date(dateString).toISOString().replace(/T[\w|:|.]+/g, '');
    switch (language) {
        case Language.MandarinTraditional:
        case Language.MandarinSimplified:
            return date.replace(/-/, '年').replace(/-/, '月').replace(/$/, '日');
        default: return date;
    }
}