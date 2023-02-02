import Head from "next/head";
import WelcomeModal from "@/containers/WelcomeModal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixelcraft test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/* background section */}
        <div className="bg-parcel-dashboard bg-cover bg-no-repeat min-h-screen">
          <div className="bg-black opacity-[0.45] absolute h-full w-full"></div>
        </div>

        <WelcomeModal />
      </main>
    </>
  );
}
