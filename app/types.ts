type BodyBlockLink = {
  type: 'link',
  href: string,
  text?: string
}

type BodyBlockText = {
  type: 'text',
  text: string
}

type BodyBlock = BodyBlockLink | BodyBlockText

export type AppNotification = {
  id: string
  heading: string
  body: string | BodyBlock[],
  /** Set it to 0 to always show */
  durationInMs?: number,
  iconName?: string
  iconClass?: string,
  onRemove?: () => void
}
