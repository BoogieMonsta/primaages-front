export interface Photo {
  id: string;
  image: string;
  metadata: {
    width: number;
    height: number;
    description: string;
  };
}
