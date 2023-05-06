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

export enum SessionStorageItem {
  AccessToken = 'access-token',
  RefreshToken = 'refresh-token',
  TokenLifeTime = 'token-live-time'
}

export enum LocalStorageItem {
  RedirectUrl = 'redirect-url'
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