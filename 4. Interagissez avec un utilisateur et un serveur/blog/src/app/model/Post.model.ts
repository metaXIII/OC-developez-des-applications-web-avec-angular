export class Post {

  public loveIts: number
  public readonly created_at: Date

  constructor(public title?: string,
              public content?: string,
  ) {
    this.loveIts    = 0
    this.created_at = new Date()
  }
}
