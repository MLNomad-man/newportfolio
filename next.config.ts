import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow Hot Module Reloading (HMR) when testing on a phone/device on your local network
  allowedDevOrigins: ["192.168.0.107", "192.168.0.106", "localhost"],
};

export default nextConfig;
