export async function POST(request: Request) {
  const body = await request.json();
  console.log("New booking:", body);
  return Response.json({ success: true });
}
