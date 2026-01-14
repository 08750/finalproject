import Access from "./_access/Access";
import BeginnerGuide from "./_BeginnerGuide/BeginnerGuide";
import CardList from "./_cardList/CardList";
import FirstView from "./_FirstView/FirstView";
import AboutPreview from "./AboutPreview/AboutPreview";

export default function Topmain() {
  return (
    <>
      <FirstView />
      <AboutPreview />
      <CardList />
      <Access />
      <BeginnerGuide />
    </>
  );
}
