export interface DigitalOceanVolume {
  id: string;
  region: {
    name: string;
    slug: string;
    sizes: string[];
    features: string[];
    available: boolean;
  };
  droplet_ids: number[];
  name: string;
  description: string;
  size_gigabytes: number;
  created_at: Date;
  filesystem_type: string;
  filesystem_label: string;
  tags: string[];
}
