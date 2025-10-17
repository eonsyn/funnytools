import OtherDowryGrid from "./OtherDowryGrid";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function OtherDowryPage() {
  const fetchPage = async (page) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/dowry/history?page=${page}`,
      { next: { revalidate: 60 } } // ISR for this fetch
    );
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    return json.data;
  };

  const initialPages = await Promise.all([1, 2,3].map((p) => fetchPage(p)));
  const initialData = initialPages.flat();

  return <OtherDowryGrid initialData={initialData} initialPage={2} />;
}
