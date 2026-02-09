# Vercel Blob Storage Setup

## Configuration Complete ✅

The Vercel Blob storage adapter has been configured in your Payload CMS setup.

## Required Environment Variable

You need to set the following environment variable in your Vercel project:

### `BLOB_READ_WRITE_TOKEN`

This token is required for Vercel Blob storage to work.

## How to Get Your Vercel Blob Token

### Option 1: Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard
2. Navigate to **Storage** tab
3. Click **Create Database** or select existing Blob storage
4. Click **Connect** or view your existing Blob store
5. Copy the `BLOB_READ_WRITE_TOKEN` value
6. Add it to your project's environment variables:
   - Go to **Settings** → **Environment Variables**
   - Add `BLOB_READ_WRITE_TOKEN` with the token value
   - Make sure it's available for all environments (Production, Preview, Development)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Link your project
vercel link

# Create a Blob store (if you haven't)
vercel blob create

# The token will be automatically added to your project
```

## Local Development

For local development, add the token to your `.env` file:

```env
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_YOUR_TOKEN_HERE
```

## What Changed

1. **payload.config.ts**: Added Vercel Blob storage adapter configuration
2. **Media.ts**: Removed local `staticDir` configuration (not compatible with Vercel)
3. Media uploads now go to Vercel Blob instead of local filesystem

## Testing

After setting the environment variable:

1. Redeploy your Vercel project or restart your local dev server
2. Try uploading an image in the Payload admin panel
3. The upload should now work without errors

## Troubleshooting

If you still get errors:

1. **Check the token**: Make sure `BLOB_READ_WRITE_TOKEN` is set in Vercel environment variables
2. **Redeploy**: After adding environment variables, trigger a new deployment
3. **Check logs**: View Vercel function logs for detailed error messages
4. **Token format**: The token should start with `vercel_blob_rw_`

## Additional Notes

- Vercel Blob storage is automatically backed up
- Files are served via CDN for fast global access
- No additional configuration needed for production
- The storage adapter handles all file operations automatically
