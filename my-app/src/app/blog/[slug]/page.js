export default async function Page({ params }) {
  const slug = params.slug;
  
  // Dynamically import the MDX file from the 'content' folder inside 'src/app'
  const { default: Post } = await import(`@/app/content/${slug}.mdx`);
  
  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: 'experiments' }];
}

export const dynamicParams = false;
