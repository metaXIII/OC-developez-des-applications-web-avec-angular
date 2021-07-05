export class Post {
  private _loveIts!: number
  private readonly _created_at!: Date

  constructor(private _title: string, private _content: string) {
    this._loveIts    = 0
    this._created_at = new Date()
  }

  get title(): string {
    return this._title
  }

  get content(): string {
    return this._content
  }

  get loveIts(): number {
    return this._loveIts
  }

  get created_at(): Date {
    return this._created_at
  }


  set loveIts(value: number) {
    this._loveIts = value
  }
}
