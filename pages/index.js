import LanguageChange from "@/components/LanguageChange";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation("common")

  return (
    <div>
      <LanguageChange />
      <h1>{t("main")}</h1>
    </div>
  );
}