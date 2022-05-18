import Head from "next/head";

export default function Meta({ title }: { title: string }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>
        {title ? "František Ortmann  - " + title : "František Ortmann"}
      </title>
      <meta
        property="og:title"
        content={title ? "František Ortmann  - " + title : "František Ortmann"}
      />
      <meta
        property="description"
        content="František Ortmann je držitelem několika ocenění Czech Press Photo. Poslední získal v roce 2010 za první místo Zlaté oko v kategorii Lidé, o nichž se mluví. Měl samostatnou retrospektivní výstavu portrétů ve Sbírce moderního umění Národní galerie. Řadí se k obecně nejmladším, samostatně vystavujícím fotografům v Národní galerii vůbec."
      />
      <meta
        property="og:description"
        content="František Ortmann je držitelem několika ocenění Czech Press Photo. Poslední získal v roce 2010 za první místo Zlaté oko v kategorii Lidé, o nichž se mluví. Měl samostatnou retrospektivní výstavu portrétů ve Sbírce moderního umění Národní galerie. Řadí se k obecně nejmladším, samostatně vystavujícím fotografům v Národní galerii vůbec."
      />
      <meta property="og:image" content="/static/system/og_image.jpg" />
      <meta property="og:site_name" content="František Ortmann" />
      <meta property="og:type" content="website" />
      <meta name="author" content="František Ortmann" />
      <meta property="og:type" content="website" />
      <meta name="pinterest" content="nopin" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicon/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffcd00" />
      <meta
        name="msapplication-config"
        content="/static/favicon/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
