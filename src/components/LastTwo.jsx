import Card from './Card';

export default function LastTwo({ data }) {
  return (
    <>
      {data.map((post) => (
        <Card key={post.id} video={post} />
      ))}
    </>
  );
}
