export const getSrc = (fileName: string, path: string, type: 'jpg' | 'svg' = 'svg'): string =>
    require(`assets/img/${path}/${fileName}.${type}`);