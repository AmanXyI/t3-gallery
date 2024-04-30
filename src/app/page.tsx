import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/1fd32fb2-f4ae-47f5-915e-84a9dc18b36e-41j5n.jpg",
  "https://utfs.io/f/87f2d5df-4db9-4818-87e0-e4688d8b7493-dznygd.jpg",
  "https://utfs.io/f/18b06e32-7239-4d99-891e-0a32eb5a3477-8t1k87.jpg",
  "https://utfs.io/f/7d3e692d-fafb-4fe2-aa20-5e71e4a5665a-8c2b4p.jpg",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("hi"); // TODO: remove
  console.log(posts); // TODO: remove
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 ">
            <img src={image.url} alt="image" className="h-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
