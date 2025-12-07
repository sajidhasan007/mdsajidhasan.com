// Import the generated Prisma client directly from the generated folder
// (tsconfig `baseUrl` is `src`, so `generated/...` resolves to `src/generated/...`).
import { PrismaClient } from 'generated/prisma/client';

declare global {
  // Prevent multiple instances in dev (hot reload)
  var prisma: PrismaClient | undefined;
}

// Create or reuse a global Prisma client (important for dev hot-reload)
type PrismaClientArgs = ConstructorParameters<typeof PrismaClient>[0];
export const prisma = globalThis.prisma ?? new PrismaClient({} as PrismaClientArgs);

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}
