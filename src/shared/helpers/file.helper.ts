export const getSrc = (fileName: string, type: 'jpg' | 'svg' = 'svg'): string =>
    require(`assets/img/trust/${fileName}.${type}`);