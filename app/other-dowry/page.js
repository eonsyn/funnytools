import OtherDowryGrid from "./OtherDowryGrid";

export const revalidate = 60; // ISR

export default async function OtherDowryPage() {
  // Pre-fetch first 2 pages for faster load
  const fetchPage = async (page) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dowry/history?page=${page}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    return json.data;
  };

  const initialPages = await Promise.all([1, 2].map((p) => fetchPage(p)));
  const initialData = initialPages.flat();

  return <OtherDowryGrid initialData={initialData} initialPage={2} />;
}
