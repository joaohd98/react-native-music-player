export interface PlayerSongProp {
  isOpen: boolean,
  onClose: () => void,
  height: number,
  mediaType: "audio" | "video",
}
