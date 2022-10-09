import { useQuery } from "react-query";

export const MemeGenerator = () => {
  const imagesQuery = useQuery(["meme-images"], () => fetchImages());

  return (
		<div className="p-4 border border-stone-200 rounded-lg hover:bg-stone-300">
      <h1>Meme generator</h1>
      <div className="flex items-center gap-4">
        {imagesQuery.isSuccess &&
          imagesQuery.data?.images?.map((imgSrc: string) => (
            <img
              className="w-12 h-12"
              key={imgSrc}
              src={imgSrc}
              alt="An image"
            />
          ))}
        {imagesQuery.isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

const fetchImages = async () => {
  const res = await fetch("/api/meme-image");
  const json = await res.json();
  return json;
};
