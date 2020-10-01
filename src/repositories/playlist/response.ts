
export class FeaturedPlaylistResponse {
  name: string
  imageUri: string

  constructor(content: FeaturedPlaylistResponseUriContentType) {
    this.name = content.name

    const images = content.images
    this.imageUri = images.length > 0 ? images[0].url : ""
  }

  static uriContent(value: FeaturedPlaylistResponseUriType): FeaturedPlaylistResponse[] {
    const releases: FeaturedPlaylistResponse[] = []

    value.playlists.items.forEach(item => {
      releases.push(new FeaturedPlaylistResponse(item))
    })

    return releases
  }
}

export type FeaturedPlaylistResponseUriType = {
  playlists: {
    items: FeaturedPlaylistResponseUriContentType[]
  }
}


export type FeaturedPlaylistResponseUriContentType = {
  name: string;
  images: {url: string}[]
}
