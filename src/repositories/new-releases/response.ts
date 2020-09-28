export class NewReleasesResponse {
  name: string
  artistName: string
  imageUri: string

  constructor(value: {[key: string]: any}) {
    this.name = value["name"]

    this.artistName = ""
    const artists = value["artists"]
    const size = artists.length

    for(let i = 0; i < size; i++) {
      this.artistName += artists[i].name
    }

    const images = value["images"]
    this.imageUri = images.length > 0 ? images[images.length - 1].url : ""
  }

  static uriContent(value: NewReleasesResponseUriType): NewReleasesResponse[] {
    const releases: NewReleasesResponse[] = []

    value.albums.items.forEach(item => {
      releases.push(new NewReleasesResponse(item))
    })

    return releases
  }
}

export type NewReleasesResponseUriType = {albums: {items: {[key: string]: string}[]}}
