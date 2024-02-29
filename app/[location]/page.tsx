import { HomePage, Layout } from "@/components";

export default function Home({ params }: { params: { location: string } }) {
  return (
    <div>
      <Layout
        location={params.location}
        component={<HomePage location={params.location} />}
      />
    </div>
  );
}
