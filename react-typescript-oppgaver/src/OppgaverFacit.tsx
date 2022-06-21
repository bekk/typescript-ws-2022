import * as React from "react";
import "./App.css";
// Oppgave 1 - Typer för props
//
// Här ser ni en react component som returnerar dagens type av mat!
// Skapa ett interface som heter Props och låt komponenten veta att propsen som kommer in följer slik type.
type FoodVariant = "Meat" | "Fish" | "Vegetarian";
interface Props {
  todaysVariant: FoodVariant;
  todaysFood: string;
}
export const BekkKantina = ({ todaysVariant, todaysFood }: Props) => {
  return (
    <p>
      Idag är det {todaysFood} i kantina ({todaysVariant})
    </p>
  );
};
// Oppgave 2 - Hooks
//
// Hooks är en värdeful del av React. Genom att typa hooks kan vi få autocomplete och bättre felsökning. Detta är extra bra
// När vi jobbar med mer avancerade hooks.
//
// I denna oppgave finns det en Hook som heter useWindowSize. Den returnerar två värden: width och height.
// För att inte få problem med server och client mismatch kan det vara lurt att initiera width och height med
// undefined. Tyvärr klarar ikke typescript att automatiskt sätta typen till hooken då. Därför må vi hjelpa editorn
// genom att explicit definiera hooken!
//
// Skapa ett interface "WindowSizeProps" som du kan bruka för att typa hooken.
// TIPS 1: Bruk syntaxen: <TYPEN HÄR> för hooks.
// TIPS 2: Kanske union kan brukas här?
// Usage
export const WindowSize = () => {
  const size = useWindowSize();
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
};
// HÄR kan du skapa ditt interface:
interface WindowSizeProps {
  width: number | undefined;
  height: number | undefined;
}
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState<WindowSizeProps>({
    width: undefined,
    height: undefined,
  });
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
// Oppgave 3 - Children
//
// I oppgave tre vill du skapa en komponent som tar in andra React komponenter som children i props,
// utför någon funktionalitet (exempelvis applicerar styling), och sedan renderar ut detta utan att
// röra children explicit
//
// TIPS: Det du passar in som HTML mellan två Html-taggar kallas alltså children, och den React-type som
// accepterar allt React kan rendera är React.ReactNode
// TIPS: I App och App.css ser du vad som sker när man passar in 4 boxar till <Grid>. De får en styling från grid
// vilket är supersmidigt för exempelvis designsystem, eller liknande
// TIPS: Du kommer nog se mycket om React.FC, FunctionalComponent eller FC hvis du googlar runt children i react/typescript.
// Det var inte anbefalt innan React 18 att bruka dessa typer: https://github.com/typescript-cheatsheets/react#:~:text=is%20React.FC-,discouraged,-%3F%20What%20about%20React
// Men det har blivit någolunda fixat i React 18: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210
// Denna tråden på Stack overflow har Dan Abramov kommenterat: https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
interface GridProps {
  title: string;
  children: React.ReactNode;
}
export const Grid = ({ children, title }: GridProps) => (
  <>
    <h3>{title}</h3>
    <div className="grid">{children}</div>
  </>
);
