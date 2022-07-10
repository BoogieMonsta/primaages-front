export interface Photo {
  image: string;
  metadata: {
    width: number;
    height: number;
    description: string;
  };
}
