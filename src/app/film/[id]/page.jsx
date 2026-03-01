import GetDetail from "@/components/GetDetail";

export default async function movieDetail({ params, searchParams }) {
  return (
    <>
      <GetDetail params={params} searchParams={searchParams} />
    </>
  );
}
