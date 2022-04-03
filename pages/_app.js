import '../styles/globals.scss'
import NextNProgress from "nextjs-progressbar";
import Layout from '../components/Layout'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  NO_GROUP
} from "kbar";

function MyApp({ Component, pageProps }) {
  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "blogs"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "contact"),
    },
  ]
  return (
    <>
      <KBarProvider actions={actions}>
      <KBarPortal> 
        <KBarPositioner> 
          <KBarAnimator> 
            <KBarSearch />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </KBarProvider>
    {/* <RenderResults /> */}
      
    </>
  )
}

export default MyApp

// function RenderResults() {
//   const { results } = useMatches();

//   return (
//     <KBarResults
//       items={results}
//       onRender={({ item, active }) =>
//         typeof item === "string" ? (
//           <div>{item}</div>
//         ) : (
//           <div
//             style={{
//               background: active ? "#eee" : "transparent",
//             }}
//           >
//             {item.name}
//           </div>
//         )
//       }
//     />
//   );
// }