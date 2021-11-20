export interface BookListResponse {
  kind: string;
  totalItems: number;
  items: IBook[]
}

export interface IBook {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: object;
  accessInfo: object;
  searchInfo?: object;
}

export interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: [string];
  publisher: string | [];
  publishedDate: string;
  description: string;
  readingModes: object;
  pageCount: number;
  printType: string;
  categories: [string];
  maturityRating: string;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
}

export interface ImageLinks {
  smallThumbnail: string | undefined
  thumbnail: string | undefined
}
