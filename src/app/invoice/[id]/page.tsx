import { Data } from "@/types/types";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
    // cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("There was an Error while fetching data");
  }

  const data = res.json();

  return data;
}

export default async function page({ params }: Props) {
  const data: Data = await getData(+params?.id);

  console.log(data);

  return (
    <div className="ml-4">
      {data?.title} {data?.body}
    </div>
  );
}
