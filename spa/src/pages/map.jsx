import { Header } from "../components/header";

export function Map() {
  return (
    <main className="min-h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <section className="bg-slate-300 px-8 pb-8">
        <iframe className="w-full h-full bg-slate-50 p-8 rounded-xl" src="https://charts.mongodb.com/charts-project-0-alkirmd/embed/charts?id=75150d99-dcd3-40f0-b2c2-98ed4c35fb46&maxDataAge=3600&autoRefresh=true"></iframe>
      </section>
    </main>
  );
}