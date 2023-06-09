import "./styles/global.css"
import {Navigation} from './components/Navigation'
export const metadata = {
  title: "Pokémon API & Gifs",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
