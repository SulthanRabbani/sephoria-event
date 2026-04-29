import * as path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1', 'localhost', '109.123.234.186'],
  turbopack: {
    root: path.resolve(process.cwd()),
  },
}

export default nextConfig
