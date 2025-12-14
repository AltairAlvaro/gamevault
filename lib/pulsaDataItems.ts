export interface PulsaDataItem {
  id: string;
  type: "pulsa" | "data";
  name: string;
  price: number;
  description: string;
}

export const pulsaDataItems: PulsaDataItem[] = [
  // PULSA
  {
    id: "pulsa-1",
    type: "pulsa",
    name: "Pulsa 10.000",
    price: 11000,
    description: "Pulsa reguler 10.000",
  },
  {
    id: "pulsa-2",
    type: "pulsa",
    name: "Pulsa 20.000",
    price: 21000,
    description: "Pulsa reguler 20.000",
  },
  {
    id: "pulsa-3",
    type: "pulsa",
    name: "Pulsa 50.000",
    price: 51000,
    description: "Pulsa reguler 50.000",
  },
  {
    id: "pulsa-4",
    type: "pulsa",
    name: "Pulsa 100.000",
    price: 100000,
    description: "Pulsa reguler 100.000",
  },
  {
    id: "pulsa-5",
    type: "pulsa",
    name: "Pulsa 200.000",
    price: 198000,
    description: "Pulsa reguler 200.000",
  },
  // DATA
  {
    id: "data-1",
    type: "data",
    name: "Data 2GB",
    price: 15000,
    description: "Paket data 2GB 30 hari",
  },
  {
    id: "data-2",
    type: "data",
    name: "Data 5GB",
    price: 30000,
    description: "Paket data 5GB 30 hari",
  },
  {
    id: "data-3",
    type: "data",
    name: "Data 10GB",
    price: 55000,
    description: "Paket data 10GB 30 hari",
  },
  {
    id: "data-4",
    type: "data",
    name: "Data 25GB",
    price: 95000,
    description: "Paket data 25GB 30 hari",
  },
  {
    id: "data-5",
    type: "data",
    name: "Data 50GB",
    price: 150000,
    description: "Paket data 50GB 30 hari",
  },
];
