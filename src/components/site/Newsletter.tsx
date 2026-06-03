"use client";

export function Newsletter() {
  return (
    <section id="news" className="bg-white px-4 py-16 lg:px-6 lg:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-100 px-6 py-12 shadow-inner md:px-12 md:py-14">
        <div className="absolute -right-16 top-0 hidden h-full w-1/3 rounded-bl-[3rem] bg-navy md:block" />
        <div className="absolute right-8 top-6 hidden h-16 w-16 opacity-40 md:block">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(100 116 139 / 0.5) 1px, transparent 0)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-3 max-w-md text-muted">
              App development insights, PWA trends, and updates on projects
              and events — straight to your inbox.
            </p>
          </div>
          <form
            className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
            action="#"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="news-email" className="sr-only">
              Email
            </label>
            <div className="flex flex-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-md">
              <input
                id="news-email"
                type="email"
                required
                placeholder="Email"
                className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-navy outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-cyan px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-cyan-bright"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
