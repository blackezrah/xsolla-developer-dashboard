// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
)

// DEV-only: expose for debugging in the browser console
// (remove this block before deploying to production)
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  ;(window as any).supabase = supabase
}

export { supabase }
