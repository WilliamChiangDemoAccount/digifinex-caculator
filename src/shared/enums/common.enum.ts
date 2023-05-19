export enum Environment {
  Test = "test",
  Dev = "development",
  Prod = "production",
}

export enum OverlayType {
  Toast = 1,
  Popup,
  Modal,
  Dialog
}

export enum Size {
  Small = 'sm',
  Middle = 'md',
  Large = 'lg'
}

export enum Status {
  Success = 1,
  Fail,
  Pending,
  Warning
}

export enum Direction {
  Top = 1,
  Right,
  Bottom,
  Left,
  TopRight,
  TopLeft,
  BottomRight,
  BottomLeft,
}

export enum Language {
  MandarinTraditional = 'zh-tw',
  MandarinSimplified = 'zh-cn',
  English = 'en'
}

export enum BreakPoint {
  Mobile = 'mobile',
  Tablet = 'table',
  Desktop = 'desktop'
}

export enum LocalStorageItem {
  Language = 'language'
}