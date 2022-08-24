import ReportIntro from "./ReportIntro";
import ReportForm from "./ReportForm";
import Separator from "../common/Separator";

function Report() {
  return (
    <section
      className="flex flex-col items-center justify-center p-4 pb-0 pt-24 md:px-10 lg:px-20"
      id="report"
    >
      <section className="center-focus flex-col">
        <ReportIntro />
        <ReportForm />
        <Separator />
      </section>
    </section>
  );
}

export default Report;
