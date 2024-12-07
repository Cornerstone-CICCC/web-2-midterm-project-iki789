export default async function Movies({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log({ id });

  return (
    <div className="min-h-screen mb-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="container mx-auto mb-4">
          <div className=""></div>
        </section>
      </main>
    </div>
  );
}
