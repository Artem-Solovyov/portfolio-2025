import { sectionSubTitle, sectionTitle } from "./primitives";

export const SectionTitle = ({ subtitle, title }: { subtitle: string; title: any }) => {
  return (
    <div className="max-w-[1000px]">
      <div className="w-16 h-[2px] bg-primary"></div>
      <p className={sectionSubTitle()}>{subtitle}</p>
      <h2 className={sectionTitle()}>{title}</h2>
    </div>
  );
};
