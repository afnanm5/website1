// app/api/github-stats/route.ts
export async function GET() {
  const response = await fetch("https://api.github.com/repos/afnanm5/portfolio", {
    headers: {
      "Accept": "application/vnd.github.v3+json",
    },
  });
  const data = await response.json();
  return new Response(JSON.stringify({ stars: data.stargazers_count }), {
    headers: { "Content-Type": "application/json" },
  });
}
