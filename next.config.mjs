import { config } from "dotenv";

const { parsed: env } = config();

const nextConfig = {
  swcMinify: true,
  basePath: "/restaurants",
  env,
};

export default nextConfig;
