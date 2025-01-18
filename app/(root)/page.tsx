import SearchForm from "@/components/SearchForm";
import SearchBar from "@/components/SearchBar";
import StartUpCard, { startuptypecard } from "@/components/StartUpCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERRY } from "@/sanity/lib/querry";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const post = await client.fetch(STARTUP_QUERRY);

  return (
    <>
      <section className="pink_container">
        <div className="tag">pitch, vote and grow</div>
        <h1 className="heading">PITCH YOUR STARTUP, <br />CONNECT WITH ENTREPRENEURS</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competition</p>
        <SearchForm query={query} />
        {/* <SearchBar /> */}
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for '${query}'` : 'All Startups'}
        </p>
        <ul className="card_grid mt-7">
          {post?.length > 0 ? (
            post.map((post:startuptypecard) => (
              <StartUpCard key={post._id} post={post} />
            ))
          ) : (<p>No startups found</p>)}
          {/* <StartUpCard /> */}
        </ul>
      </section>
    </>
  );
}
