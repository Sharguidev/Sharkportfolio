import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  let body: any;

  try {
    body = await request.json();
    console.log('Received body:', body);
  } catch (err) {
    console.error('Error parsing JSON body:', err);
    return new Response(
      JSON.stringify({ error: 'Invalid or missing JSON body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const res = await fetch('https://libretranslate.de/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
