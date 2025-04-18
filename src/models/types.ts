export type Input = {
  ssid: string;
  password: string;
};

export type Network = {
  ssid: string;
  rssi: number;
  secure: boolean;
};
