/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import IconWrapper from "@/components/IconWrapper";
import PageHeader from "@/components/PageHeader";
import Spacer from "@/components/Spacer";
import GlassIcons from "@/reactBits/glassIcons";
import Head from "next/head";

function Toolbox() {
  const items = [
    {
      icon: <IconWrapper iconName="/ico/vscode.ico" />,
      color: "#EDEEF0",
      label: "VS Code",
    },
    {
      icon: <IconWrapper iconName="/ico/android-studio.ico" />,
      color: "#EDEEF0",
      label: "Android Studio",
    },
    {
      icon: <IconWrapper iconName="/ico/xcode.ico" />,
      color: "#EDEEF0",
      label: "Xcode",
    },
    {
      icon: <IconWrapper iconName="/ico/vscode.ico" />,
      color: "#EDEEF0",
      label: "Warp",
    },
    {
      icon: <IconWrapper iconName="/ico/notion.ico" />,
      color: "#EDEEF0",
      label: "Notion",
    },
    {
      icon: <IconWrapper iconName="/ico/youtube-music.ico" />,
      color: "#EDEEF0",
      label: "Youtube Music",
    },
    {
      icon: <IconWrapper iconName="/ico/reactron.ico" />,
      color: "#EDEEF0",
      label: "Reactoron",
    },
    {
      icon: <IconWrapper iconName="/ico/github.ico" />,
      color: "#EDEEF0",
      label: "Github Desktop",
    },
  ];
  return (
    <>
      <Head>
        <title>Ajo Alex | Mobile App Engineer | ToolBox</title>
      </Head>
      <div className="container mx-auto w-2/3">
        <Spacer gap="h-10" />
        <PageHeader heading="Here's what I use daily." label="TOOLBOX" />
        <Spacer gap="h-20" />
        <div className="text-2xl font-semibold mb-2">Softwares</div>
        <div>
          <GlassIcons items={items} className="custom-class" />
        </div>
        {/* <div className="flex flex-row gap-4 flex-wrap">
          {software.map((obj) => {
            return (
              <a href={obj.url} key={obj.name}>
                <div className=" w-32 h-32 bg-linear-to-r from-slate-100 via-gray-100 to-slate-100 shadow-slate-200 rounded-md flex justify-center items-center group">
                  <img
                    src={`/ico/${obj.image}`}
                    className="w-16 h-16 group-hover:mb-3 transition duration-150"
                    alt={obj.name}
                  />
                </div>
              </a>
            );
          })}
        </div> */}
        <Spacer gap="h-20" />

        <Footer />
      </div>
    </>
  );
}

export default Toolbox;
