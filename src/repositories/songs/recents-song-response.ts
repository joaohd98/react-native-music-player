export class RecentsSongResponse {
  name: string
  artistName: string
  previewURL: string
  duration: string

  constructor(content: RecentsSongResponseUriContentType) {
    this.name = content.name
    this.previewURL = content.preview_url

    this.duration = RecentsSongResponse.millisToMinutesAndSeconds(content.duration_ms)

    this.artistName = ""
    const artists = content.artists
    const size = artists.length

    for(let i = 0; i < size; i++) {
      this.artistName += (artists[i].name + (i + 1 < size ? ", " : ""))
    }
  }

  private static millisToMinutesAndSeconds = (millis: number) =>  {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + (seconds).toFixed(0);
  }

  static uriContent(value: RecentsSongResponseUriType): RecentsSongResponse[] {
    const song: RecentsSongResponse[] = []

    value.albums.items.forEach(item => {
      song.push(new RecentsSongResponse(item))
    })

    return song
  }
}

export type RecentsSongResponseUriType = {
  albums: {
    items: RecentsSongResponseUriContentType[]
  }
}

export type RecentsSongResponseUriContentType = {
  name: string;
  artists: { name: string }[];
  duration_ms: number
  preview_url: string;
}
