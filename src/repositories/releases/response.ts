export class ReleasesResponse {
  name: string
  artistName: string
  imageUri: string

  constructor(content: ReleasesResponseUriContentType) {
    this.name = content.name

    this.artistName = ""
    const artists = content.artists
    const size = artists.length

    for(let i = 0; i < size; i++) {
      this.artistName += (artists[i].name + (i + 1 < size ? ", " : ""))
    }

    const images = content.images
    this.imageUri = images.length > 0 ? images[0].url : ""
  }

  static uriContent(value: ReleasesResponseUriType): ReleasesResponse[] {
    const releases: ReleasesResponse[] = []

    value.albums.items.forEach(item => {
      releases.push(new ReleasesResponse(item))
    })

    return releases
  }
}

export type ReleasesResponseUriType = {
  albums: {
    items: ReleasesResponseUriContentType[]
  }
}


export type ReleasesResponseUriContentType = {
  name: string;
  artists: { name: string }[],
  images: {url: string}[]
}
