/**
 * lib/mongodb.ts
 *
 * Typed Mongoose connection helper for Next.js (TypeScript).
 * - Caches connection during development to avoid multiple connections
 *   caused by Next.js hot reloads.
 * - Exports `connectToDatabase` which resolves to a `Mongoose` instance.
 */

import mongoose, { Mongoose } from 'mongoose';

// Define the shape of our cache; avoid using `any`.
type MongooseCache = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

// Extend globalThis so the cache survives module reloads in development.
declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

// Read the MongoDB connection string from environment variables.
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

// Use an existing global cache if present (important for development/hot-reload).
const cache: MongooseCache = global._mongooseCache ?? { conn: null, promise: null };

/**
 * Connects to MongoDB using Mongoose and caches the connection.
 *
 * Returns the connected `Mongoose` instance. Subsequent calls return the cached
 * connection to prevent opening multiple connections during development (Next.js).
 */
export async function connectToDatabase(): Promise<Mongoose> {
  // If a connection is already established, return it immediately.
  if (cache.conn) {
    return cache.conn;
  }

  // If a connection is in progress, await the same promise.
  if (!cache.promise) {
    // Start the connection and store the promise in the cache.
    cache.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      // `mongoose.connect` resolves to the `mongoose` singleton.
      return mongooseInstance;
    });

    // Persist the cache on the global object so hot reloads reuse it.
    if (process.env.NODE_ENV !== 'production') {
      global._mongooseCache = cache;
    }
  }

  // Await the in-flight connection and store the resolved connection.
  cache.conn = await cache.promise;
  return cache.conn;
}

export default connectToDatabase;
